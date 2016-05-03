var masa={
	peso: prompt("Introduzca su peso en kg"),
	altura: parseFloat(prompt("Ingrese su altura en metros"))
};

var imc=(masa.peso/(Math.pow(masa.altura,2))).toFixed(2);
alert("Su IMC es "+imc);