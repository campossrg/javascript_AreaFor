function maximo_de_tres()
{
	var num1 = prompt("Introduce el primer numero: ", "0");
	while(isNaN(num1)) num1 = prompt("El numero introducido no es correcto\nIntroduce el primer numero: ", "0");
	var num2 = prompt("Introduce el segundo numero: ", "1");
	while(isNaN(num2)) num2 = prompt("El numero introducido no es correcto\nIntroduce el segundo numero: ", "1");

	if(num1>num2) alert ("El primer numero es mayor: " + num1);
	else if(num1<num2) alert("El segundo numero es mayor" + num2);
	else alert("Los numeros son iguales");
}

function caracteres()
{
	var cad = prompt("Introducir palabra: ", "Sergio");
	for(i=0; i<cad.length; i++) document.write(cad.charAt(i) + "<br>");
}

function invertir()
{
	var array = new Array();
	var cad = prompt("Introducir palabra: ", "Sergio");

	for(i=0; i<cad.length; i++) array[i] = cad.charAt(i);

	array.reverse();
	var invertida=array.join("");
	alert(invertida);
}

function palabraLarga()
{
	var array = new Array();
	var cad = "";

	for(i=0; i<5; i++)
	{
		array[i] = prompt("Introducir palabra num." + parseInt(i+1) + ": ", "Ejemplo");
		if(array[i].length>cad.length) cad = array[i];
	} 

	alert(cad);
}

function frecuenciaCaracteres()
{
	var array = new Array();
	var cad = prompt("Introducir palabra: ", "Sergio");

	for(i=0; i<cad.length; i++) array[i] = cad.charAt(i);

	for(x=0,veces=0; x<cad.length; x++)	document.write(array[x] + "<br>");
	
	for(y=0,veces=0; y<cad.length; y++)
	{
		if(cad.charAt(x)==array[y]) veces++;
		document.write(" " + veces + "<br>");
	} 
}