function array_asociativo()
{
	var marcasVehiculos = new Array();
	marcasVehiculos = ["Renault", "Audi", "Seat"];

	show(marcasVehiculos);

	marcasVehiculos.unshift("BMW", "Skoda");
	marcasVehiculos.sort();

	show(marcasVehiculos);

	var alumnos = prompt("Indique el numero de alumnos del curso: ", "0");
	var array_alumnos = new Array();
	for(i=0; i<alumnos; i++)
	{
		array_alumnos.push(prompt("Nombre alumno: ","Sergio"));
		array_alumnos[i] = prompt("Nota alumno: ","8");
	}

	show(array_alumnos);
}

function show(array)
{
	for(i=0; i<array.length; i++)
	{
		console.log(array[i]);
	}
}