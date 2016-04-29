function cliente(){
	var cantidad= prompt("Ingrese la cantidad de clientes del banco:");
	var suma= 0;
	for(var i=1; i<=cantidad;i++){
		var nombre=prompt("Ingrese nombre y apellidos del cliente "+i);
		var cuenta=prompt("Ingrese N° de cuenta del cliente "+i)
		if(cuenta<0){
			alert("Número de cuenta inválido");
			break;
		}
		else{
			var saldo=parseInt(prompt("Ingrese saldo actual del cliente "+i));
			if(saldo>0){
				suma+=saldo;
				alert("Acreedor");
			} else if(saldo<0){
				alert("Deudor");
			} else if(saldo==0){
				alert("Nulo");
			}
		}
	}
	alert("La suma del saldo de todos los acreedores es: S/."+suma);
}
cliente();
