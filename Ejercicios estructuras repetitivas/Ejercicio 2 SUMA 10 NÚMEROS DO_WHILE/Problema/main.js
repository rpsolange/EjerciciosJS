function suma(){
	var suma=0;
	var i=1;
	do {
		var numero=prompt("Ingrese número "+i+": ");
		suma=suma+parseInt(numero);
		i++;
	} while (i<=10);

	alert("La suma de los números ingresados es: "+ suma);
}

suma();