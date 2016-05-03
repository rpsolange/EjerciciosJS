var mes={
	meses: ["enero", "febrero", "marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"],
	mes_actual:prompt("Ingrese en qué mes estamos: ").toLowerCase(),
	grupo_mes: function (){
		for(var i=1; i<=12;i++){
			if(mes_actual===meses[i]){
				if(i<=4){
					alert("Estamos en el 1er cuatrimestre!");
				} else if(i>=5&&i<=8){
					alert("Estamos en el 2do cuatrimestre!");
				} else if(i>=9&&i<=12){
					alert("Estamos en el 3er cuatrimestre!...se acerca la Navidad :D");
				}
			}
		}
	}
}

