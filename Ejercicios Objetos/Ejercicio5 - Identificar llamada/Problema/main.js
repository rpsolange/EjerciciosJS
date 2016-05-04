var persona={
	dato: ["nombre", "telefono"]
}
var cantidad= prompt("Cuantas personas estan en la lista");
for(var i=1; i<=cantidad; i++){
	persona.dato[0]=prompt("Ingrese el nombre");
	persona.dato[1]= prompt ("Ingrese el teléfono");
	document.write("Contacto "+i+" "+persona.dato+"\n");
	i++;
}
