var palabra= prompt("Introduzca solo una de estas palabras: casa, mesa, perro o gato:");
var text= palabra.toLowerCase();
switch(text){
	case 'casa':
		alert("House");
		break;
	case 'mesa':
		alert("Table");
		break;
	case 'perro':
		alert("Dog");
		break;
	case 'gato':
		alert("Cat");
		break;
	default:
		alert("Not found!");
		break;
}