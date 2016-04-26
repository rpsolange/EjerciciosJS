function matriz (){
	var a= prompt("Sea una matriz 2x2, colocar sus valores:"+"\nA11:");
	var b= prompt("A12: ");
	var c= prompt("A21: ");
	var d= prompt("A22: ");
	var resultado=(a*d)-(b*c); 
	alert("El resultado de la matriz es "+resultado);
}
matriz();