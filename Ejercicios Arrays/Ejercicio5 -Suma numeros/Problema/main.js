function suma(){
	var numero=[ ];
	var suma=0;
	for(var i=1; i<=10; i++){
		var number=parseInt(prompt("Ingresa N° "+i));
		numero.push(number);
		suma+=number;
	}
	return suma+"\nY los 10 números son: "+numero;
}
alert("La suma de los números es: "+suma());