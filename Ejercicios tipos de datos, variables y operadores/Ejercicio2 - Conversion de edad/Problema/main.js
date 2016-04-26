function age(){
	var nombre=prompt("Escribe tu nombre: ");
	var edad= prompt("Hola! "+nombre+" ¿Cuál es tu edad?");
	var conversion=edad*365;
	alert("Estimado(a) "+nombre+" hasta ahora, has vivido "+conversion+" días!"+ "\ny te faltan muchos más por vivir!")
}
age();