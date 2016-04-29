function triangle(){
	var a=parseInt(prompt("Ingresa el lado 1"));
	var b=parseInt(prompt("Ingresa el lado 2"));
	var c=parseInt(prompt("Ingresa el lado 3"));
	if(a==b&&b==c&&a==c){
		alert("Es un triángulo equilátero");
	} else if(a==b||a==c||b==c){
		alert("Es un triángulo isósceles");
	} else if(a!=b&&a!=c&&b!=c){
		alert("Es un triángulo escaleno");
		if((a*a)+(b*b)===c*c||(a*a)+(c*c)===(b*b)||(c*c)+(b*b)===(a*a)){
			alert("Es un triángulo rectángulo");
		}
	} 
}
triangle();