function vector(){
	var a=prompt("Ingrese la coordenada X del vector 1:");
	var b=prompt("Ingrese la coordenada Y del vector 1:");
	var c=prompt("Ingrese la coordenada X del vector 2:");
	var d=prompt("Ingrese la coordenada Y del vector 2:");
	var vector1=[a,b];
	var vector2=[c,d];
	var resultado=(a*c)+(b*d);
	alert("El producto escalar de los vectores: "+"\n"+vector1+" y "+vector2+" es "+resultado);
}
vector();