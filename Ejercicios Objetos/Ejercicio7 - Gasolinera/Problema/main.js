var gasolinera={
	precio_galon: 5,
	litros_disponible: 80 
}
function gasolina(){
	var cantidad=0;
	var conteo=0;
	var i=0;
	do{
		cantidad=parseFloat(prompt("Cuántos galones de gasolina comprará?")).toFixed(2);
		var precio_total= gasolinera.precio_galon*cantidad;
		gasolinera.litros_disponible-=cantidad;
		if(cantidad!=0){
			conteo++;
		}
		if(gasolinera.litros_disponible<0){
			alert("No hay suficiente gasolina disponible ahora... \nVuelva pronto.");
			break;
		}
		alert("Usted pagará por "+cantidad+" galon(es) "+precio_total+" soles"+"\nLitros disponibles: "+gasolinera.litros_disponible.toFixed(2));
	} while(i<conteo);
}
gasolina();


