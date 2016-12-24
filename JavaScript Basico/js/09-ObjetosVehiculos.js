//ArrayVehiculos
var arrayVehiculos = new Array();

window.onload = function()
{	
	btAnadirVehiculo.addEventListener("click",añadirVehiculo,false);
	btEliminarVehiculo.addEventListener("click",eliminarVehiculo,false);
	btAcelerar.addEventListener("click",acelerar,false);
	btFrenar.addEventListener("click",frenar,false);
	btVerVelocidad.addEventListener("click",verVelocidad,false);
	vehiculos.addEventListener("change",function()
	{
		if(arrayVehiculos.length==0) txtVelocidad.value="";
		else actualizarVelocidad();
	},false);	
}

//****************************************VEHICULO****************************************

//Objeto vehiculo
function Vehiculo(matricula,marca,modelo)
{
	//Atributos
	this.matricula=matricula;
	this.marca=marca;
	this.modelo=modelo;
	var velocidad=0;

	//Metodos
	this.acelerar=function()
	{
		if(velocidad<200)
		{
			velocidad+=10;
		} 
		else alert("El vehiculo va demasiado rapido!")
	}
	this.frenar=function()
	{
		if(velocidad>0)
		{
			velocidad-=10;
		}
		else alert("El vehiculo esta parado!");
	}
	this.verVelocidad=function()
	{
		return velocidad;
	}
}

//****************************************FUNCIONES OBJETO****************************************

function añadirVehiculo()
{
	var matricula,marca,modelo;
	do
	{
		matricula=prompt("Introduzca matricula del vehiculo","6512HLK");
	}while(!comprobarMatricula(matricula) && matricula=="");
	do
	{
		marca=prompt("Introduzca marca del vehiculo","Renault");
	}while(marca=="");
	do
	{
		modelo=prompt("Introduzca modelo del vehiculo","Twingo");
	}while(modelo=="");
	
	arrayVehiculos.push(new Vehiculo(matricula,marca,modelo));
	var i = arrayVehiculos.length-1;
	vehiculos.innerHTML += "<br><option value = '"+i+"'>"+matricula+" - "+marca+" "+modelo+"</option>";

	actualizarVelocidad();
}

function eliminarVehiculo()
{
	if(comprobarVehiculo())
	{
		var erase = confirm("Esta seguro que desea eliminar el vehiculo seleccionado?");
		if(erase)
		{
			arrayVehiculos.splice(vehiculos.value,1); //Elimina desde la posicion "x","y" elementos (.splice(x,y))
			vehiculos.innerHTML="";
			for(i=0;i<arrayVehiculos.length;i++)
			{
				vehiculos.innerHTML+="<option value = '"+i+"'>"+arrayVehiculos[i].matricula+" - "+arrayVehiculos[i].marca+" "+arrayVehiculos[i].modelo+"</option><br>";
			}
		}

		txtVelocidad.value="";
	}
	else alert("No existen vehiculos!");
	
}

function acelerar()
{
	if(comprobarVehiculo())
	{
		arrayVehiculos[vehiculos.value].acelerar();
		actualizarVelocidad();
	}
	else alert("No existen vehiculos!");
}

function frenar()
{
	if(comprobarVehiculo())
	{
		arrayVehiculos[vehiculos.value].frenar();
		actualizarVelocidad();
	}
	else alert("No existen vehiculos!");
}

function verVelocidad()
{
	if(comprobarVehiculo())
	{
		alert("Velocidad del vehiculo: "+arrayVehiculos[vehiculos.value].verVelocidad());
	}
	else alert("No existen vehiculos!");
}

//****************************************FUNCIONES EXTERNAS****************************************

function actualizarVelocidad()
{
	txtVelocidad.value=arrayVehiculos[vehiculos.value].verVelocidad();
}

function comprobarVehiculo()
{
	if(arrayVehiculos[vehiculos.value]==undefined||arrayVehiculos.length==0) return false;
	else return true;
}

function comprobarMatricula(matricula)
{
	for(i=0;i<arrayVehiculos.length;i++)
	{
		if(arrayVehiculos[i].matricula==matricula) return false;
	}
	return true;
}