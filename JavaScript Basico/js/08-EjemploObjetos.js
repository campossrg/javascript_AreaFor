//Clase perro
function Perro(nombre,raza) //Constructor. Se definen los parametros minimos para crear objetos de esta clase
{
	//Atributos
	this.nombre=nombre;
	this.raza=raza;
	this.edad;
	this.color;
	var estaDormido=false; //Este sera privado porque lo declaramos con var en lugar de this y solo podra ser utilizado dentro de la clase


	//Metodos
	this.ladrar=function()
	{
		alert("Guau guau");
	};
	this.comer=function()
	{
		//Podemos como es logico utilizar los atributos del objeto en cuestion, en este caso, el nombre del perro
		alert(this.nombre+" esta comiendo");
	};
	this.correr=function(velocidad)
	{
		//Los metodos como cualquier otra funcion pueden recibir o no parametros y devolver o no valor
		alert(this.nombre+" esta corriendo a "+velocidad+" m/s");
	}
	this.dormir=function()
	{
		//Hacemos uso del atributo privado estaDormido para saber el estado actual del perro
		if(estaDormido)
		{
			alert(this.nombre+" ya esta dormido");
		}
		else
		{
			//Cambio el valor de estaDormido
			estaDormido=true;
			alert(this.nombre+" se acaba de dormir");
		}
	};
	this.despertar=function()		//En esta funcion devolvemos el valor de miPerro con un return
	{
		if(estaDormido)
		{
			//Cambio el valor de estaDormido
			estaDormido=false;
			return this.nombre+" se desperto";
		}
		else
		{
			return this.nombre+" ya estaba despierto";
		}
	};
}


//Declaro una variable global que me servira para almacenar el objeto de la clase que creemos al pulsar btCrear
var miPerro;


//Añado los listeners a cada uno de los botones dentro del evento load del window (cuando la ventana de ha cargado por completo)
window.onload=function()
{
	//Las funciones van sin parentesis para que no se ejecuten en el momento
	//Las funciones se pueden crear implicitamente o fuera del bloque (se prueban de varias maneras)
	//Las funciones son llamadas de la misma manera; tanto con .addEventListener como con .onclick
	btCrear.addEventListener("click",crear,false);						//EXTERNA
	btComer.onclick=comer;												//EXTERNA
	btLadrar.addEventListener("click",function()						//IMPLICITA
	{
		if(miPerro!=undefined)
		{
			miPerro.ladrar();
		}
		else
		{
			alert("No has creado ningun perro!");
		}
	},false);
	btDormir.onclick=function()											//IMPLICITA
	{
		if(miPerro!=undefined)
		{
			miPerro.dormir();
		}
		else
		{
			alert("No has creado ningun perro!");
		}
	}
	btDespertar.addEventListener("click",despertar,false);				//EXTERNA
	btCorrer.addEventListener("click",correr,false);					//EXTERNA
	btEstablecerEdad.addEventListener("click",establecerEdad,false);	//EXTERNA
	btComprobarEdad.addEventListener("click",comprobarEdad,false);		//EXTERNA
};

function crear()
{
	//Compruebo si han introducido el nombre y la raza
	if(txtNombre.value!=""&&txtRaza.value!="")
	{
		//Creamos el perro llamando al constructor gracias al operador new
		miPerro=new Perro(txtNombre.value,txtRaza.value);
	}
	else
	{
		alert("Debes introducir el nombre y la raza");
	}
}

function comer()
{
	if(miPerro!=undefined)
	{
		miPerro.comer();
	}
	else
	{
		alert("No has creado ningun perro!");
	}
}

function despertar()
{
	if(miPerro!=undefined)
	{
		//Guardo la cadena devuelta por el metodo despertar() de miPerro
		var respuesta = miPerro.despertar();
		//Muestro en un alert la respuesta
		alert(respuesta);
	}
	else
	{
		alert("No has creado ningun perro!");
	}
}

function correr()
{
	if(miPerro!=undefined)
	{
		var velocidad;
		do
		{
			velocidad=prompt("Introduce la velocidad a la que correr el perro");
		}while(isNaN(velocidad));
		//Pase la velocidad al metodo correr de miPerro
		miPerro.correr(velocidad);
	}
	else
	{
		alert("No has creado ningun perro!");
	}
}

function establecerEdad()
{
	if(miPerro!=undefined)
	{
		var edad;
		do
		{
			edad=prompt("Introduce edad");
		}while(isNaN(edad));
		miPerro.edad=edad;
	}
	else
	{
		alert("No has creado ningun perro!");
	}
}

function comprobarEdad()
{
	if(miPerro!=undefined)
	{
		if(miPerro.edad!=undefined)
		{
			alert(miPerro.nombre+" tiene "+miPerro.edad+" años");
		}
		else
		{
			alert("No se definio la edad de "+miPerro.nombre);
		}
	}
	else
	{
		alert("No has creado ningun perro!");
	}
}