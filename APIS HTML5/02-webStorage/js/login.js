window.onload=function()
{
	//Añadimos un listener al boton de login
	btLogin.onclick=function()
	{
		//Comprobamos que los valores introducidos en los input sean "area" "area"
		if(txtNombre.value=="area"&&txtPassword.value=="area")
		{
			//Guardamos un nuevo item en el sessionStorage
			sessionStorage["nombreUsuario"]=txtNombre.value;
			//Redirigimos a la pagina de index
			window.location.href="index.html";
		}
		else alert("Nombre de usuario o contraseña no son correctos!");
	}
}