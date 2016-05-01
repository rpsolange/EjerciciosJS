function texto(){
	var text= prompt("Escribe un texto: ");
	if(text==text.toUpperCase())
		alert("El texto está escrito con Mayúsculas");
	else if(text==text.toLowerCase())
		alert("El texto está escrito sólo con Minúsculas");
	else
		alert("El texto tiene Mayúsculas y Minúsculas");
}
texto();