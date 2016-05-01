function suma(a, b){
	var c= a+b;
	var d= Math.pow(c,2);
	return d;
}
var valor=prompt("Ingresa dos valores para sacar el cuadrado de la suma de estos:");
var cadena=valor.split([" "]);
alert("El cuadrado de la suma de "+cadena[0]+" y "+cadena[1]+" es "+suma(parseInt(cadena[0]), parseInt(cadena[1])));