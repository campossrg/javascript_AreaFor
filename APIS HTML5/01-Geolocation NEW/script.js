window.onload=function(){
	//En el window load comprobaremos que podemos obtener los datos de ubicacion del usuario y si es posible realizaremos una solicitud mediante getCurrentPosition
	if(navigator.geolocation!=undefined){
		//Realizamos la solicitud. Debemos tener en cuenta que esta sera asincrona y que debera estar vinculada a un dominio
		navigator.geolocation.getCurrentPosition(geolocalizacionObtenida,error); 
	}
	else{
		alert("Tu navegador no soporta el API Geolocation");
	}
};

function geolocalizacionObtenida(posicion){
	//Mostramos la latitud, longitud y precision de los datos obtenidos
	actual.innerHTML="";
	actual.innerHTML+="<strong>Latitud:</strong> "+posicion.coords.latitude;
	actual.innerHTML+="<br><strong>Longitud:</strong> "+posicion.coords.longitude;
	actual.innerHTML+="<br><strong>Precisión:</strong> "+posicion.coords.accuracy;
	//Usando el timestamp creamos un objeto tipo de Date para mostrar el dia, mes y año en el que se obtuvieron los datos
	var fecha = new Date(posicion.timestamp);
	actual.innerHTML+="<br><strong>Fecha: </strong>"+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
	//Llamamos a una funcion que se encargue de crear el mapa de Google Maps y centrarlo en el punto obtenido, para ello pasaremos a la funcion la latitud y la longitud obtenidas
	crearGoogleMap(posicion.coords.latitude,posicion.coords.longitude);
}
function error(er){
	alert("Error al obtener la geolocalización: "+er.message);
}
//Variables globales para guardar las referencias del mapa de Google y del punto actual donde se encuentra el usuario
var map;
var latLngActual;
function crearGoogleMap(latitud,longitud){
	//Creamos un objeto latLng que represente el pnto actual
	latLngActual = new google.maps.LatLng(latitud,longitud);
	//Establecemos las opciones de creacion del mapa
	var opciones = {
		zoom: 20,//Zoom aplicado al mapa
		center: latLngActual,//Punto sobre el que se centra el mapa
		mapTypeId: google.maps.MapTypeId.SATELLITE//Tipo de mapa a mostrar. ROADMAP, HYBRID, TERRAIN, SATELLITE
	};
	//Creamos el mapa de Google Maps pasandole como parametros la referencia al div sobre el que debe mostrarlo y las opciones de creacion
	map = new google.maps.Map(document.getElementById('mapa'),opciones);
	//Agregamos un marcador sobre el mapa para ver la posicion en la que nos encontramos
	var opcionesMarcador = {
		position: latLngActual,//Posicion del marcador
		map: map,//Mapa sobre el que sera mostrado
		title: "Posición actual"//Titulo del marcador
	};
	var marcador = new google.maps.Marker(opcionesMarcador);
	//Creamos tambien un InfoWindow para mostrar más información cuando pulse el marcador
	var infoWindow = new google.maps.InfoWindow({
		content: "<h3>Marcador Posición Actual</h3><p>Te encuentras aquí</p>",
	});
	//Para que se muestre el infoWindow deberemos asignarle un listener al evento click sobre el marcador
	google.maps.event.addListener(marcador,"click",function(){
		//Hacemos zoom sobre el mapa
		map.setZoom(30);
		//Mostramos el infoWindow
		infoWindow.open(map,marcador);
	});
}

function ocultarControles(){
	//Para ocultar los controles que se muestran por defecto en un mapa debemos modificar las opciones del mismo gracias a su metodo setOptions
	map.setOptions({
		disableDefaultUI: true,
		//zoom: 10
	});
}

function mostrarNavigation(){
	map.setOptions({
		zoomControl: true,
		rotateControl: true,
		panControl: true,
		streetViewControl: true
	});
}

function mostrarScale(){
	map.setOptions({
		scaleControl:true
	});
}

/*
Para poder mostrar/ocultar la capa de trafico declaramos una variable global que nos servira para guardar la refencia a dicha capa y asi poder cambiar su mapa mediante setMap
*/
var capaTrafico = undefined;
function mostrarCapaTrafico(){
	if(capaTrafico==undefined){
		//Creo un nuevo objeto capa trafico (TrafficLayer)
		capaTrafico = new google.maps.TrafficLayer();
		//Para mostrarla uso su metodo setMap
		capaTrafico.setMap(map);
	}else{
		//Quito la capa del mapa
		capaTrafico.setMap(null);
		//Elimino de la variable global la referencia a la capa trafico
		capaTrafico=undefined;
	}
}

//Hacemos algo similar para la capa bici
var capaBici;
function mostrarCapaBici(){
	if(capaBici==undefined){
		capaBici = new google.maps.BicyclingLayer();
	}
	//En funcion de si su map es map o no establezco el valor de dicha propiedad
	if(capaBici.getMap()==null){
		capaBici.setMap(map);
	}
	else{
		capaBici.setMap(null);
	}
}

/* SERVICIO DE GEOCODING ***************/
function obtenerCoordenadas(){
	//Recuperamos la direccion a buscar del txt
	var direccion = txtDireccion.value;
	//Utilizamos un objeto Geocoder que es el que nos permitira usar el servicio de geocoding
	var geocoder = new google.maps.Geocoder();
	//Usaremos su metodo geocode para obtener las coordenadas. Este metodo puede recibir diferentes parametros de entrada (una direccion, unas coordenadas, etc.) y de los resultados podremos obtener tambien informacion variada (calle, ciudad, coordenadas)
	geocoder.geocode({//Parametros de entrada
		address:direccion
	},function(results,status){//Funcion de retorno
		//Comprobamos que la peticion haya salido bien
		if(status==google.maps.GeocoderStatus.OK){
			alert("Nº de resultados: "+results.length);
			//Recuperamos las coordenadas de la direccion que hemos pasado
			var coordenadas = results[0].geometry.location;
			//Colocamos un marcador en dicha posicion
			var marcador = new google.maps.Marker({
				position: coordenadas,
				title: direccion,
				map: map
			});
			//Centramos el mapa en dicho punto
			map.setCenter(coordenadas);
			//Mostramos la direccion y las cordenadas por consola
			console.log(direccion+": "+coordenadas.lat()+","+coordenadas.lng());
		}else{
			alert("Error usando Geocoder: "+status);
		}
	});
}

function obtenerDireccion(){
	//Similar al anterior pero cambiando los parametros de entrada y los datos de salida
	var textoCoordenadas = txtDireccion.value;
	var arrayCoordenadas = textoCoordenadas.split(",");
	//Creamos un objeto LatLng usando los valores de latitud y longitud introducidos por el usuario
	var latitud = parseFloat(arrayCoordenadas[0]);
	var longitud = parseFloat(arrayCoordenadas[1]);
	var latLng = new google.maps.LatLng(latitud,longitud);
	//Usamos el geocoder
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({//Parametros de entrada
		'latLng':latLng
	},function(results,status){//Funcionde retorno
		if(status==google.maps.GeocoderStatus.OK){
			//Mostramos en un alert la direccion obtenida
			alert("Dirección obtenida: "+results[0].formatted_address);
		}
		else{
			alert("Error usando Geocoder: "+status);
		}
	});
}
/* SERVICIO DIRECTIONS - RUTAS *************/
//declaramos una variable global para guardar la referencia a la capa que contiene la ruta. Asi podremos ocultarla posterioremente
var capaRuta;
function obtenerRuta(){
	//Creamos un objeto DirectionsRenderer y guardamos su referencia en capaRuta
	capaRuta = new google.maps.DirectionsRenderer();
	//Creamos un objeto DirectionsService que me permitira obtener una ruta gracias a su metodo route
	var directionsService = new google.maps.DirectionsService();
	directionsService.route({//Parametros de entrada
		origin: latLngActual,
		destination: txtDireccion.value,
		travelMode: google.maps.DirectionsTravelMode.DRIVING//Debemos definir si la ruta es a pie (WALKING), en coche (DRIVING) o en bici (BICYCLING)
	},function(results,status){//Funcion de retorno
		if(status==google.maps.DirectionsStatus.OK){
			//Paso los resultados al objeto capaRuta
			capaRuta.setDirections(results);
			//Muestro la ruta en el mapa
			capaRuta.setMap(map);
		}else{
			alert("Error al obtener ruta: "+status);
		}
	});
}

function ocultarRuta(){
	capaRuta.setMap(null);
}

/* SERVICIO STREETVIEW *****************/
function verStreetView(){
	//Debemos recuperar la refencia al objeto streetView a traves del objeto Google Map map
	var streetView = map.getStreetView();
	//Posicionamos streetView en un punto en concreto
	streetView.setPosition(latLngActual);
	//En funcion del si esta mostrandose o no streetView cambio su estado
	if(streetView.getVisible()==true){
		streetView.setVisible(false);
	}else{
		streetView.setVisible(true);
	}
}