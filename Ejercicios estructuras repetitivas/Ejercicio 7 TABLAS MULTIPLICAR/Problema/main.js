function tabla(){
	var tabla= parseInt(prompt("Ingrese un número a multiplicar:"));
	var i=0;
	while (i<=12){
		var producto = tabla*i;
		alert(tabla+ " x " +i+ " es: " +producto);
		i++;
	}
}

tabla();