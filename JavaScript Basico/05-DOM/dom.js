function numEnlaces()
{
	//Recupero el documento
	var enlaces = document.getElementsByTagName("a");
	//Compruebo cual es total
	var total = enlaces.length;
	//Recupero la referecncia al parrafo donde escribire el resultado
	var pResultado = document.getElementById("soluciones");
	//Añado a su Html el texto que indica el numero de enlaces
	pResultado.innerHTML += "<strong> Numero enlaces: </strong>" + total + "<br>";
}

function dirEnlaces()
{
	var enlaces = document.getElementsByTagName("a");
	var pResultado = document.getElementById("soluciones");
	var contador=0;
	for(i=0; i<enlaces.length; i++)
	{
		if(enlaces[0].href=="enlace")
		{
			contador++;
		}
	}
	pResultado.innerHTML += "<strong> Numero enlaces que enlazan enlace: </strong>" + contador + "<br>";
}

function enlaceesp()
{
	var enlaces = document.getElementsByTagName("a");
	var contador=0;
	for(i=0; i<enlaces.length; i++)
	{
		var dirEnlace = enlaces[i].href;
		if(dirEnlace.indexOf("areafor.com")!=-1)
		{
			contador++;
		}
	}
	soluciones.innerHTML += "<strong> Numero enlaces que apuntan a www.area.com: </strong>" + contador;
}

function anade()	//USANDO innerHTML
{
	var listaAmigos = document.getElementById("lista");
	var textoElemento = prompt("Introduce el texto a introducir en la lista de amigos: ");

	listaAmigos.innerHTML += "<li><a href='#'>" + textoElemento + "</a></li>";
}

function anade2()	//USANDO APPENDCHILD
{
	var listaAmigos = document.getElementById("lista");
	var textoElemento = prompt("Introduce el texto a introducir en la lista de amigos: ");
	var textNode = document.createTextNode(textoElemento);
	var a = document.createElement("a");
	a.href="#";
	var li = document.createElement("li");
	a.appendChild(textNode);
	li.appendChild(a);
	listaAmigos.appendChild(li);
}

function informacion()
{
	soluciones.innerHTML += "<strong>Informacion del documento</Strong><br>";
	soluciones.innerHTML += "Dominio: " + document.domain + "<br>";
	soluciones.innerHTML += "Fecha ultima modificacion: " + document.lastModified + "<br>";
	soluciones.innerHTML += "URL: " + document.location + "<br>";
	soluciones.innerHTML += "Titulo: " + document.title + "<br>";
}

function muestra()
{
	if(segundo.className=="oculto")
	{
		segundo.className="visible";
	}
	else
	{
		segundo.className="oculto";
	}
}