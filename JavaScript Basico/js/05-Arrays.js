window.onload=function(){
	//Creo un array con valores iniciales
	var marcasVehiculos = ["Renault","Audi","Seat"];
	//Recorro el array para mostrar sus elementos por consola
	console.log("Elementos iniciales de marcasVehiculos");
	for(i=0;i<marcasVehiculos.length;i++){
		console.log(marcasVehiculos[i]);
	}
	console.log("******************");
	//Añado al inicio del array dos valores nuevos
	marcasVehiculos.unshift("BMW","Skoda");
	//Ordeno alfabeticamente el array con sort
	marcasVehiculos.sort();
	//Recorro de nuevo el array para mostrar los elementos ordenados
	console.log("marcasVehiculos ordenado")
	for(i=0;i<marcasVehiculos.length;i++){
		console.log(marcasVehiculos[i]);
	}
	console.log("***********************");
	//Solicito al usuario un numero de alumnos
	var total;
	do{
		total = parseInt(prompt("Introduzca el numero de alumnos","3"));
	}while(isNaN(total)||total<0);
	//Declaro el array asociativo
	var arrayAlumnos=[];
	//Debere solicitar el nombre y la nota de los alumnos que se hayan indicado
	for(i=0;i<total;i++){
		var nombre=prompt("Introduce el nombre del alumno número "+(i+1));
		var nota = parseFloat(prompt("Introduce la nota del alumno "+(i+1)));
		//Una vez tenga el nombre y la nota introducire en el array asociativo dicho par de valores, haciendo que la clave sea el nombre del alumno y la nota sea el valor
		arrayAlumnos[nombre]=nota;
	}
	//Declaro las variables media, mayor, menor, nombreMayor, nombreMenor antes de recorrer el array
	var media=0, mayor, menor, nombreMayor, nombreMenor;
	//Recorro el array asociativo para calcular y buscar los valores solicitados
	for(var nombre in arrayAlumnos){
		//Recupero la nota del alumno que estamos analizando
		var nota = arrayAlumnos[nombre];
		//Compruebo si estan inicializadas las variables mayor, menor, etc. En caso de no estarlo indicara que es la primera vuelta y pondremos por valores iniciales los del primer alumno
		if(mayor==undefined){
			mayor=nota;
			nombreMayor=nombre;
			menor=nota;
			nombreMenor=nombre;
		}
		
		//Sumo su nota a la media
		media=media+nota;
		//Compruebo si esta nota es menor que la almacenada anteriormente
		if(nota<menor){
			//Guardo dicha nota en menor
			menor=nota;
			//Guardo el nombre del alumno
			nombreMenor=nombre;
		}
		//Actuo de manera similar para saber la nota mayor
		if(nota>mayor){
			//Guardo dicha nota en mayor y el nombre del alumno
			mayor=nota;
			nombreMayor=nombre;
		}
	}
	//Al salir del bucle debo dividir el valor almacenado en media entre el numero de alumnos
	media=media/total;
	//Saco los resultados por consola
	console.log("Nota media: "+media);
	console.log("Nota menor: "+menor+" Alumno: "+nombreMenor);
	console.log("Nota mayor: "+mayor+" Alumno: "+nombreMayor);
};