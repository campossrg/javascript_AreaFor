function f1()
{
	alert("Hola");
	document.write("Bienvenido desde Javascript");
}

function f2()
{
	alert("Esta es la primera linea \ny esta es la segunda. Ahora escribo una \\ y una \´ o \"");
}

function f3()
{
	var nombre, edad, email, telefono, respuesta;

	nombre = prompt("Introduzca su nombre", "Sergio");
	edad = prompt("Introduzca su edad", "25");
	email = prompt("Introduzca su email", "Sergio@gmail.com");
	telefono = prompt("Introduzca su telefono", "943207705");

	respuesta = "Nombre: " + nombre + "\nEdad: " + edad + "\nEmail: " + email + "\nTelefono: " + telefono;

	alert(respuesta);
}

function f4()
{
	var x, y, r, suma, resta, mult, div, resto;

	x = prompt("Introducir el primer numero", "2");
	y = prompt("Introducir el segundo numero", "3");

	suma = parseInt(x) + parseInt(y);
	resta = x-y;
	mult = x*y;
	div = x/y;
	resto = x%y;

	r = "Primer numero: " + x + " Segundo numero: " + y + "<br>Suma: " + suma + "<br>Resta: " + resta + "<br>Multiplicacion: " + mult + "<br>Division: " + div + "<br>Resto: " + resto;

	document.write(r);
}

function f5()
{
	var birth,seg;

	birth = prompt("Introducir año nacimiento: ", "1988");

	seg = ("2014" - birth) * 365 * 24 * 60 * 60;
	
	alert("Numero de segundos desde " + birth + ": " + seg);
}

function f6()
{
	var euros, r;

	euros = prompt("CONVERSOR EUROS-PESETAS\nIntroducir euros: ", "1");

	alert("Pesetas: " + (euros * 166.386));
	r = confirm("Desea introducir otra cifra?");

	if(r) f6();
}

function f7()
{
	var num, num2;

	do
	{
		num = parseInt(prompt("Introducir numero entre 0 y 10", "1"));
	} while (num < 0 || num > 10 || isNaN(num));
	
	num2 = prompt("Introducir otro numero entre 0 y 10", "3");
	while (num2 < 0 || num2 > 10 || isNaN(num2)) num2 = prompt("Numero incorrecto! \nIntroducir otro numero entre 0 y 10", "4");

	if(num > num2) alert(num + " es mayor que " + num2);
	else if(num < num2) alert(num2 + " es mayor que " + num);
	else alert("Los numeros son iguales");
}

function f8()
{
	var sexo;
	do{
		sexo = prompt("Introducir sexo (chico/chica): ", "chico");
		switch(sexo)
		{
			case "chico":
				alert("Chico!");
				break;
			case "chica":
				alert("Chica!");
				break;
			default:
				alert("No se si eres chico o chica...");
		}
	}while(sexo != 'chica' && sexo != 'chico')
}

function f9()
{
	var veces = prompt("Introducir numero de veces: ", "2");
	for(i=0; i<veces; i++) document.write(parseInt(i)+1 + ". Hola<br>");
}

function f10()
{
	var num = prompt("Introducir numero entre 0 y 5", "2");

	while(num<0 || num>5 || isNaN(num)) num = prompt("Numero incorrecto!\nIntroducir numero entre 0 y 5", "2");

	alert("Numero: " + num);
}

function f11()
{
	var i = 1;
	var num = prompt("TABLA DE MULTIPLICAR\n******************\nIntroducir un numero:", "2");

	while(num<0 || num>10) num = prompt("Numero incorrecto! (0-10)\nIntroducir un numero:", "2");

	document.write("Tabla del " + num + "<br>");
	while(i<11) 
	{
		document.write(i + " * " + num + " = " + (i*num) + "<br>");
		i++;
	}
}

function f12()
{
	var res = confirm("Desea eliminar el registro?");
	if (res) alert("Ha sido eliminado con exito!");
}