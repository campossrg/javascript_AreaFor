function mesActual()
{
	var arrayMeses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
	var date = new Date();
	console.log(arrayMeses[parseInt(date.getMonth())]);
}

function arrayDistintosTipos()
{
	var array = new Array(true, 5, false, "Hola", 3, "Adios");
	
	for(i=0; i<array.length; i++)
	{
		
		if(array[i].length>cad.length) cad = array[i];
	}
}