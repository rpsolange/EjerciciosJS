var masa={
	peso: null,
	altura:null,
	imc: function(){
		return (this.peso/(Math.pow(this.altura,2))).toFixed(2);
	}
};

masa.peso=parseFloat(prompt("Ingrese su peso:"));
masa.altura=parseFloat(prompt("Ingrese su altura:"));
alert("Su IMC es "+masa.imc());