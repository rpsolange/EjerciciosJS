numero();
function numero(){
	for(var i=1;i<=10;i++){
		var number = prompt("Leer numero" + i +": ");
		var cubo = Math.pow(number,3);
		var cuarta = Math.pow(number,4);
		document.write("<br>"+ "El cubo es :"+ cubo+ "<br>"+ "La cuarta de este numero es: "+ cuarta);
	}
}
