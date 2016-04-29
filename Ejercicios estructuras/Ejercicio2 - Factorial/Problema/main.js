function factorial(){
	var number= prompt("Escribe el numero entero: ");
	var resultado= 1;
	for(var i=1; i<=number; i++){
		resultado*= i;
	}
	alert("El factorial(!) del número entero dado es: "+resultado);
}
factorial();
