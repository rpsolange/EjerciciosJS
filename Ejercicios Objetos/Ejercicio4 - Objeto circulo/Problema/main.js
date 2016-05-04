var circulo={
	radio: null,
	longitud: function(){
		return (this.radio*2*Math.PI).toFixed(2)
	},
	area: function(){
		return (Math.pow(this.radio,2)*Math.PI).toFixed(2)
	}
}
circulo.radio= prompt("Escribir el radio del círculo:");
alert("La longitud del círculo es "+circulo.longitud()+"\nY su área es "+circulo.area());