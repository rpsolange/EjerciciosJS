function edad(){
	var cantidad= prompt ("Ingrese la cantidad de alumnos :");
	var suma= null;
	for(var i=1; i<= cantidad; i++){
		var numero = prompt ("Ingrese edad del alumno"+i+": ");
		suma= suma+parseInt(numero); 
	}
	var promedio= suma/cantidad;
	alert("El promedio de las edades es : "+ promedio);
}
edad();