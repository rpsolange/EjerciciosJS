var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
var dni=parseInt(prompt("Ingrese su DNI: "));
var resto;
if(dni<0 || dni>99999999 || dni.length>8){
	alert("DNI no válido");
}else{
	var letra=prompt("Ingrese la letra correspondiente: ").toUpperCase();;
	resto=dni%23;
	if(letras[resto]==letra){
		alert("El N° y letra del DNI son correctos.");
	} else{
		alert("La letra indicada no es correcta.");
	}
}