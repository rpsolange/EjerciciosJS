var cuatrimestre={
	primer: ["enero", "febrero", "marzo","abril"],
	segundo: ["mayo","junio","julio","agosto"],
	tercer: ["setiembre","octubre","noviembre","diciembre"]
};
var mes_actual= prompt("Escribe el mes en el que estamos ahora!:").toLowerCase();
for(var i=0; i<=3;i++){
	if(mes_actual==cuatrimestre.primer[i])
		alert("Estamos en el 1er cuatrimestre!")
	if(mes_actual==cuatrimestre.segundo[i])
		alert("Estamos en el 2do cuatrimestre!")
	if(mes_actual==cuatrimestre.tercer[i])
		alert("Estamos en el 3er y último cuatrimentre del año! \nY se acerca la navidad!...")
}