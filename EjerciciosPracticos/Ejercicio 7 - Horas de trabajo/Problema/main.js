function trabajo(){
	var suma=0;
	for(var i=1; i<=6;i++){
		var horas= parseInt(prompt("Ingrese horas de trabajo del día "+i+" :"));
		var pago=5;
		suma +=horas;
		pago *= suma;
	}
	alert("Total de horas de trabajo a la semana es :"+suma+"\nSueldo semanal es: "+pago);
}
trabajo();