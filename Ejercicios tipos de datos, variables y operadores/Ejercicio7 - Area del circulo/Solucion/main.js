function circulo(){
	var radio=prompt("Ingresa el radio del circulo:");
	var area=(Math.PI*(Math.pow(radio,2))).toFixed(2);
	alert("El área del circulo es "+area);
}
circulo();