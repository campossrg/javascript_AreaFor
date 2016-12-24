window.onload=function()
{
	/*addEventListener:
	click -> evento que dispara la accion
	mostrarAlert -> funcion a ejecutar
	propagacion: true -> de padre a hijo, false -> de hijo a padre
	*/
	btMostrar.addEventListener("click",mostrarAlert,false);

	/*
	removeEventListener -> Elimina las funcionalidades
	*/
	btEliminarListener.addEventListener("click",function(){
		btMostrar.removeEventListener("click",mostrarAlert,false);
	},false);

	/*Los eventos se propagan por la jerarquia del DOM. Al asignar el listener 
	indicamos la direccion de propagacion mediante un valor booleano.
	Un valor false indica de hijo a padre
	*/
	padre1.addEventListener("click",clickDiv,false);
	hijo1.addEventListener("click",clickP,false);

	padre2.addEventListener("click",clickDiv,true);
	hijo2.addEventListener("click",clickP,true);
};

function mostrarAlert()
{
	alert("Has pulsado el boton mostrar Alert");
}

function clickDiv(e)
{
	//Podemos utilizar el objeto event para recuperar informacion sobre el evento
	var idElemento = e.target.id;
	alert("Click sobre el div "+this.id+". Elemento origen del evento "+idElemento);
	//Siquiero parar la propagacion del evento debo usar el objeto event y su metodo de stopPropagation
	e.stopPropagation();
}

function clickP(evento)
{
	//Podemos utilizar el objeto event para recuperar informacion sobre el evento
	var idElemento = evento.target.id;
	alert("Click sobre el p "+this.id+". Elemento origen del evento "+idElemento);
}

var contador=0; //Variable global para almacenar el numero de clicks realizados sobre el link
function comprobarClicks(e)
{
	/*Si deseamos evitar el comportamiento por defecto del enlace al hacer click sobre el 
	(navegar) debemos hacer uso de preventDefault(). En este caso no navegaremos hasta que se haya
	hecho click sobre el link al menos dos veces.
	*/
	contador ++;
	if(contador<2)
	{
		e.preventDefault;
	}
	alert("Nº de clicks: "+contador);
}

function comprobarFormulario(evento)
{
	
}