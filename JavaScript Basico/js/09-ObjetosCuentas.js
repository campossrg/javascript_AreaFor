//Array cuentas
var arrayCuentas=new Array();

//****************************************ONLOAD****************************************

window.onload=function()
{
	btAnadirCuenta.addEventListener("click",añadirCuenta,false);
	btEliminarCuenta.addEventListener("click",eliminarCuenta,false);
	btIngreso.addEventListener("click",añadirFondo,false);
	btGasto.addEventListener("click",quitarFondo,false);
	btVerMovimientos.addEventListener("click",verMovimientos,false);
}

//****************************************CUENTAS****************************************

function Cuentas(nombre,saldo)
{
	//Atributos
	this.nombre=nombre;
	var saldo=saldo;
	var movimientos = new Array();

	//Metodos
	this.ingreso=function(dinero)
	{
		saldo+=dinero;
	}
	this.gasto=function(dinero)
	{
		if(dinero>saldo) return false;
		else saldo-=dinero;
		return true;
	}
}

//****************************************FUNCIONES INTERNAS****************************************

function añadirCuenta()
{
	var nombre,saldo;
	do
	{
		nombre=prompt("Introduzca un nombre de usuario:","Sergio");
	}while(!comprobarNombre(nombre)&&nombre=="");
	do
	{
		saldo=prompt("Introduzca el importe del saldo de su cuenta:","3000");
	}while(saldo=="");
	arrayCuentas.push(new Cuentas(nombre,saldo));
	var i=arrayCuentas.length-1;
	cuentas.innerHTML += "<br><option value = '"+i+"'>"+nombre+"</option>";
}

function eliminarCuenta()
{
	if(comprobarCuenta())
	{
		arrayCuentas.splice(cuentas.value,1);
		cuentas.innerHTML="";
		for(i=0;i<arrayCuentas.length;i++)
		{
			cuentas.innerHTML+="<option value = '"+i+"'>"+arrayCuentas[i].nombre+"</option><br>";
		}
	}
	else alert("No existe ninguna cuenta!");
}

function añadirFondo()
{
	if(comprobarCuenta())
	{
		var importe;
		do
		{
			importe=prompt("Introduzca el importe:","3000");
		}while(importe=="");
		arrayCuentas[cuentas.value].ingreso(importe));
	}
	else alert("No existe ninguna cuenta!");
}

function quitarFondo()
{
	if(comprobarCuenta())
	{
		var importe
		do
		{
			importe=prompt("Introduzca el importe:","20");
		}while(!arrayCuentas[cuentas.value].gasto(importe)||importe="");
	}
	else alert("No existe ninguna cuenta!");
}

function verMovimientos()
{
	if(comprobarCuenta())
	{
		
	}
	else alert("No existe ninguna cuenta!");
}

//****************************************FUNCIONES EXTERNAS****************************************

function comprobarNombre(nombre)
{
	for(i=0;i<arrayCuentas.length;i++)
	{
		if(arrayCuentas[i].nombre==nombre) return false;
	}
	return true;
}

function comprobarCuenta()
{
	if(arrayCuentas[cuentas.value]==undefined||arrayCuentas.length==0) return false;
	else return true;
}