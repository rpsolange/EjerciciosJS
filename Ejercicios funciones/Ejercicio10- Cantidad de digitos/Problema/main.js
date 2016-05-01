function variable(){
	var number=prompt("Ingresa un número entero positivo:");
	if(number<0){
		alert("Ingrese otro número válido");
	} else{
		alert("La cantidad de dígitos del valor ingresado es "+parseInt(number.length));
	}
}
variable();