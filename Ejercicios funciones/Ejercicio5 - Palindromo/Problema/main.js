function texto() {
	var text = prompt("Ingresa el texto").toLowerCase();
	var inverse = text.split("").reverse().join("");
	if (text == inverse) {
		alert("La palabra '"+text+"' SI es palíndromo");
	} else {
		alert("La palabra '"+text+"' NO es palíndromo '"+inverse+"'");
	}		
}
texto();
/* esta mal :C */
/*String.prototype.reverse= function(){
	return this.split(" ").reverse().join("");
}
function palindromo(){
	var texto=prompt("Escribe un texto:").toLowerCase();
	var inverse=texto.reverse();
	if(texto==inverse){
		alert("Es un texto palíndromo");
	} else{
		alert("No es un texto palíndromo");
	}
}
palindromo();*/

//.join -Join the elements of an array into a string