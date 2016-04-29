function operaciones(){
	var a=parseInt(prompt("Ingresa N° 1:"));
	var b=parseInt(prompt("Ingresa N° 2:"));
	if(a>b){
		alert("La suma de "+a+" y "+b+" es: "+parseInt(a+b)+"\nY su la resta de ambos es: "+parseInt(a-b));
	} else if(a===b){
		alert(a+" y "+b+" son iguales");
	} else if(b>a){
		alert("La multiplicación de "+a+" y "+b+" es: "+parseInt(a*b)+"\nY su la división es: "+parseInt(b/a))
	}
}
operaciones();