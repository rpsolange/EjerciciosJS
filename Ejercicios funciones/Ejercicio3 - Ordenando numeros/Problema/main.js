function orden(){
	var number=prompt("Ingrese 3 números:");
	var cadena = number.split([" "]);
	if(cadena[0]==cadena[1]&& cadena[0]==cadena[2]){
		alert("Los tres números son iguales");
	} else if(cadena[2]>cadena[1]&&cadena[1]>cadena[0]){
		alert("El orden es: "+cadena[0]+" "+cadena[1]+" "+cadena[2])
	} else if(cadena[2]>cadena[0]&&cadena[0]>cadena[1]){
		alert("El orden es: "+cadena[1]+" "+cadena[0]+" "+cadena[2])
	} else if(cadena[1]>cadena[0]&&cadena[0]>cadena[2]){
		alert("El orden es: "+cadena[2]+" "+cadena[0]+" "+cadena[1])
	} else if(cadena[1]>cadena[2]&&cadena[2]>cadena[0]){
		alert("El orden es: "+cadena[0]+" "+cadena[2]+" "+cadena[1])
	} else if(cadena[0]>cadena[1]&&cadena[1]>cadena[2]){
		alert("El orden es: "+cadena[2]+" "+cadena[1]+" "+cadena[0])
	} else if(cadena[0]>cadena[2]&&cadena[2]>cadena[1]){
		alert("El orden es: "+cadena[1]+" "+cadena[2]+" "+cadena[0])
	} 
}
orden();