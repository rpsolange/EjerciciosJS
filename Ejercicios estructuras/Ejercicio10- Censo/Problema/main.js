var cantidad=prompt("Ingrese N° de personas censadas:");
var suma =0;
var sum=0;
var varones=0;
for(var i=1; i<=cantidad; i++){
	var dni=Number(prompt("Ingrese N° de DNI de la persona "+i+" : "));
	var edad=prompt("Ingrese edad de la persona "+i+" : ");
	var sexo=prompt("Ingrese el sexo de la persona(femenino o masculino) "+i+" : ").toLowerCase();	alert("N° de DNI: 0"+dni+"\nEdad: "+edad+"\nSexo: "+sexo);
	switch (sexo) {
		case 'femenino':
			suma++;
			break;
		case 'masculino':
			sum++;
			if(edad>=16&&edad<=65){
				varones++;
			} 
			break;
		default:
			alert("Escriba correctamente (masculino o femenino)");
			break;
	}	
}
alert("La cantidad total de personas censadas es "+cantidad+"\nLa cantidad de varones es "+sum+"\nLa cantidad de mujeres es "+suma+"\nLa cantidad de varones cuya edad varía entre 16 y 65 años es "+varones);