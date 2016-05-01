function numero(){
	var menor= 100000;
	for(var i=1; i<=3;i++){
		var number=parseInt(prompt("Ingresa N° "+i+" :"));
		if(number<menor){
			menor=number;
		} else{
			menor=menor;
		}
	}
	alert("El N° menor es "+menor);
}
numero();