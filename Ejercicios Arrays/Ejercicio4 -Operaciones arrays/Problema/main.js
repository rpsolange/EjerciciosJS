var valores=[true, 5, false, "hola", "adios", 2];
var resultado= valores[0]||valores[2];
var resultado2= valores[0]&&valores[2];
if(valores[3].length>valores[4].length){
	alert("Hola es mayor que Adiós");
} else if(valores[4].length>valores[3].length&&valores[4].length!=valores[3].length){
	alert("Adios es mayor que Hola");
} else if(valores[4].length==valores[3].length){
	alert("Hola y Adios son iguales");
}
alert("True || False= "+resultado+" \nY "+"True && False= "+resultado2);
alert("El resultado de las 5 operaciones matemáticas es: "+"\nSuma: "+parseInt(valores[1]+valores[5])+"\nResta: "+parseInt(valores[1]-valores[5])+"\nMultiplicación: "+parseInt(valores[1]*valores[5])+"\nDivisión: "+parseFloat(valores[1]/valores[5]).toFixed(2)+"\nResto: "+parseInt(valores[1]%valores[5]));