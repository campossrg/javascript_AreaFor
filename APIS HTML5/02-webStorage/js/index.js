//Clases
function Nota(categoria,descripcion)
{
	this.categoria=categoria;
	this.descripcion=descripcion;
}
//Variables globales

window.onload=function()
{
	//Compruebo si esta establecido el valor nombreUsuario en el sessionStorage
	if(sessionStorage["nombreUsuario"]!=undefined)
	{
		//Escribo el mensaje de bienvenida el pBienvenida
		pBienvenida.textContent="Bienvenid@ "+sessionStorage["nombreUsuario"];
	}
	else
	{
		//En caso de que no se haya establecido sessionStorage["nombreUsuario"] enviamos a la pagina de login
		window.location.href="login.html";
	}
	//añadimos los listeners
	btNuevaNota.onclick=nuevaNota;
}
function nuevaNota()
{
	//Recupero del localStorage el array
	var jsonLocalStorage=localStorage["listaNotas"];
	var arrayNotas=[];
	if(jsonLocalStorage!=undefined)
	{
		arrayNotas=JSON.parse(jsonLocalStorage);
	}
}