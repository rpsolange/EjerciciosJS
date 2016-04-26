function edad(){
	var cantidad= prompt ("Ingrese la cantidad de alumnos :");
	var suma= null;
	var i= 1;
	while (i<= cantidad){
		var numero = prompt ("Ingrese edad del alumno"+i+": ");
		suma = suma+parseInt(numero);
		i++; 
	} 
	var promedio= suma/cantidad;
	alert("El promedio de las edades es : "+ promedio);
}
edad();