var texto=prompt("Ingresa el texto");
var repetir=prompt("Ingresa el número de veces a repetir el texto");
var resultado= "\n ";
for(var i=1; i<=repetir;i++){
	resultado += texto+ "\n ";
}
alert("Este es el texto repetido "+repetir+" veces:"+resultado);
