function tienda(){
	var ventas= parseInt(prompt("Ingrese numero de ventas del día:"));
	var total=0;
	var uno=0;
	var dos=0;
	var tres=0;
	var valor=0;
	var valor1=0;
	var valor2=0;
	var i=1;
	while(i<=ventas){
		var precio= parseInt(prompt("Ingrese el precio a pagar "+i+" :"));
		total=total+precio;
		if(precio>1000){
			valor=valor+precio;
			uno+=1;
		} else if(precio>500&&precio<=1000){
			valor1+=precio;
			dos+=1;
		} else if(precio<=500){
			valor2+=precio;
			tres+=1;
		}
		i++;
	}
	alert("Ventas con monto mayor a 1000 son "+uno+" con un total de "+valor+" dolares"+"\nVentas con un monto mayor a 500 pero menor o igual a 1000 son "+dos+" con un total de "+valor1+" dólares"+"\nVentas con un monto menor a 500 son "+tres+" con un total de "+valor2+" dólares"+"\nMonto Global: "+total);
}
tienda();