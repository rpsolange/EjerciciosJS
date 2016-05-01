var numero=prompt("Ingresa el N°:");
var cadena= "\n";
var resultado= "\n"+numero+"\n";
function multiplo(){
	for(var i=2; i<=10; i++){
		resultado+= numero*i+ "\n";
	}
	alert("Los múltiplos de "+numero+" son: "+resultado);
}
multiplo();


