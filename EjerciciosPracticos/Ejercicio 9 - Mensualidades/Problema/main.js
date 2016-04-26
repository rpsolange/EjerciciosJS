function mensualidad(){
	var total=0; 
	var a= 10;
	var mensual=0;
	var resultado= " ";
	for(var i=1; i<=20; i++){
		mensual= mensual+a;
		a=mensual;
		resultado+= mensual+ " ";
		total= total+mensual;
	}
	alert("Cada mes pagó: "+resultado+"\nEl total a pagar fué: "+total);
}
mensualidad();