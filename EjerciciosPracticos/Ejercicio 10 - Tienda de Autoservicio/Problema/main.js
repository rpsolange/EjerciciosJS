function tienda(){
	var ciudades=prompt("En cuántas ciudades tiene sucursales esta tienda?");
	var tiendas;
	var empleados;
	var objetos;
	var venta=0;
	var vt=0; 
	var total=0;
	for(var t=1; t<=tiendas; t++){
		tiendas=prompt("Cuántas tiendas hay en ciudad "+t+" :");
		for(var e=1; e<=empleados;e++){
			tiendas=prompt("Cuántas tiendas hay en ciudad "+e+" :");
			for(var o=1; o<=objetos;o++){
				objetos= prompt("Cuánto vendió el empleado "+o+" :"); 
				venta+=objetos;
				vt+=venta;
				total+=vt;	
			}
		}
	}alert("En cada tienda vendió: "+venta+"\nEn cada ciudad vendió:"+vt+"\nEn un día la cadena recaudó: "+total );
}
tienda();