function fibonacci(){
	var cantidad=prompt("Introduzca el N° de elementos para la Sucesión fibonacci: ");
	var a= 1;
	var b= -1;
	var resultado= "";
	for(var i=1; i<=cantidad; i++){
		var serie;
		serie= a+b; //0 1 1 2 3
		b= a; //1 0 1 1 2
		a=serie; //0 1 1 2 3
		resultado += serie + " "; //0 1 1 2 3
	}
	alert(resultado);
}
fibonacci();