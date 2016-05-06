var facturas={
	empresa: ["nombre de la empresa","dirección","teléfono","NIF" ],
	cliente: ["nombre","dirección","teléfono","DNI"],
	elemento: ["Descripcion","Precio","Cantidad"],
	factura: ["Tipo de IVA", "Forma de Pago","Total"]
}
var empresa=[ ];
var cliente=[ ];
var elemento=[ ];
var factura=[ ];
for(var i=0; i<=facturas.empresa.length-1; i++){
	empresa.push(prompt("Ingrese el "+facturas.empresa[i]+" :"));
	alert("Los datos de la empresa son:"+)
}