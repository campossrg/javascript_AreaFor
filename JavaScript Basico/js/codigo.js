//Esto es un comentario de linea

/*
	Esto es un comentario de bloque
*/

alert("Este alert esta en codigo.js");

//Operadores aritmeticos
var numero1 = 3;
var numero2 = 2;
var total = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var resto = numero1 % numero2;
numero1 ++;
numero2 --;

//OPERADORES LOGICOS
var n1 = 1;
var n2 = 1;
var n3 = 2;
if(n1 == n2 && n2 < n3)
{
	alert("Se cumple la condicion");
}
else
{
	alert("No se cumple");
}
//Negacion (La condicion contraria del resultado o la variable)
n2 = 2;
n3 = 3;
if(!(n2 == n3)) //Si n2 y n3 no son iguales ->
{
	alert("n2 y n3 no son iguales");
}

//Switch
n1 = 1;
switch (n1)
{
	case 1:
		alert("Vale 1");
		break;
	case 2:
		alert("Vale 2");
		break;
	default:
		alert("No vale ni 1 ni 2");
}