function ahorro(){
	var ahorro=0;
	for(var i=1; i<=12; i++){
		var saldo=parseInt(prompt("Deposito del mes "+i+" :"));
		ahorro += saldo;
	}
	alert("El ahorro anual es :"+ahorro);
}
ahorro();