function lista(){
	var lista=[];
	for (var i = 1; i <= 3; i++) {
		var a=parseInt(prompt("Ingresar número "+i));
		lista.push(a);
	}
	return lista[0]+lista[1]+lista[2];
}
var lista1=lista();
var lista2=lista();
if(lista1>lista2){
	alert("Lista 1 mayor");
} else if(lista1<lista2){
	alert("Lista 2 es mayor");
} else if(lista1==lista2){
	alert("Son listas iguales");
}
