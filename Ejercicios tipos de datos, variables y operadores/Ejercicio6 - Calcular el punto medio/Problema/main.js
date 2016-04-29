/*var a=parseInt(prompt("Ingrese la coordenada X del vector 1:"));
var b=parseInt(prompt("Ingrese la coordenada Y del vector 1:"));
var c=parseInt(prompt("Ingrese la coordenada X del vector 2:"));
var d=parseInt(prompt("Ingrese la coordenada Y del vector 2:"));
var vector1=[a,b];
var vector2=[c,d];
var x=(a+c)/2;
var y=(b+d)/2;
var resultado= [x,y];
alert("El punto medio del segmento de extremos: "+vector1+" y "+vector2+" es "+resultado);
*/
function medio(x,y){
	return (x+y)/2;
}
var a=parseInt(prompt("Ingrese la coordenada X del vector 1:"));
var b=parseInt(prompt("Ingrese la coordenada Y del vector 1:"));
var c=parseInt(prompt("Ingrese la coordenada X del vector 2:"));
var d=parseInt(prompt("Ingrese la coordenada Y del vector 2:"));
alert("El punto medio es: "+"\n( "+medio(a,c)+ " , "+medio(b,d)+" )");

