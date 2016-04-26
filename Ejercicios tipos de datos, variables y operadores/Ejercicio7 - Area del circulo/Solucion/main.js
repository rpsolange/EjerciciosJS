function circulo(){
	var radio=prompt("Ingresa el radio del circulo:");
	var area=(radio*(Math.pow(Math.PI,2))).toFixed(2);
	alert("El área del circulo es "+area);
}
circulo();