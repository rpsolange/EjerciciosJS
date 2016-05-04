var inversion={
	valor: null,
	tasa: null,
	periodo: null	
}
for(var i in inversion) {
	inversion[i] = prompt("Ingresa "+i);
}

var resultado= inversion.valor*Math.pow(1+inversion.tasa/100,inversion.periodo);
alert("La inversion futura es "+resultado);

/*inversion.valor=prompt("Ingrese valor");
inversion.tasa=prompt("Ingrese tasa");
inversion.periodo=prompt("Ingrese periodo");
*/