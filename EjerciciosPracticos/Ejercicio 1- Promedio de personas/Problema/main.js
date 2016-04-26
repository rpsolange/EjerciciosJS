function estatura(){
	var cantidad= parseInt(prompt("La cantidad de personas es: "));
	var i=1;
	var suma=null;
	while(i<=cantidad){
		var medida= parseFloat(prompt("Ingrese la estatura "+i+" :"));
		suma += parseFloat(medida);
		i= i+1;
	}
	var promedio= parseFloat(suma/cantidad).toFixed(2);
	alert("La estatura promedio es "+promedio);
}
estatura();