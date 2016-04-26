function suma(){
	var suma=0;
	var i=1;
	while (i<=10){
		var numero=prompt("Ingrese número "+i+": ");
		suma=suma+parseInt(numero); 
		i++;
	}
	alert("La suma de los diez números ingresados es: "+ suma);
}
suma();