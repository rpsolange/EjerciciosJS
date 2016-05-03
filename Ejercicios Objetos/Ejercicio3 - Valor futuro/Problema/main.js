var inversion={
	valor_inicial: prompt("Ingrese el valor inicial de la inversión: "),
	tasa: prompt("La tasa de interés es: "),
	periodo: prompt("Ingrese el plazo en que se planea obtener el fruto de la inversión:"),
}
var valor_futuro= (inversion.valor_inicial*Math.pow(1+(inversion.tasa/100),inversion.periodo)).toFixed(2);
alert("El valor futuro es "+valor_futuro);