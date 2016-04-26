function potencia(){
	var numero = prompt("Ingresa el numero : ");
	var exponente= prompt ("Ingresa el exponente : ");
	var resultado= Math.pow(numero,exponente);
	document.write("El resultado es : " +resultado);
}

potencia();

//La función  Math.pow() devuelve la  base elevada al exponente , esto es, baseexponent
// Puesto que pow() es un método estático de Math, siempre se utiliza como Math.pow().