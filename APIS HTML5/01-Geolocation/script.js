window.onload=function()
{
	/*En el window load comprobaremos que podemos obtener los datos de ubicacion del usuario y si es posible
	realizaremosuna solicutd mediante getCurrentPostion.
	*/
	if(navigator.geolocation!=undefined)
	{
		/*Realizamos la solicitud. Debemos tener en cuenta que esta sera asincrona y que debera estar 
		vinculada a un dominio.
		*/
		navigator.geolocation.getCurrentPosition(geolocalizacionObtenida,error);
	}
	else
	{
		alert("Tu navegador no soporta el API Geolocation!");
	}
}

function geolocalizacionObtenida(posicion)
{
	//Mostramos la latitud, longitud y precision de los datos obtenidos.
	actual.innerHTML="";
	actual.innerHTML+="<strong>Latitud:</strong> " +posicion.coords.latitude;
	actual.innerHTML+="<strong>Longitud:</strong> " +posicion.coords.longitude;
	actual.innerHTML+="<strong>Precision:</strong> " +posicion.coords.accuracy;
}

function error(er)
{
	alert("Error al obtener la geolocalizacion: "+er.message);
}