var multiplo= "\n ";
var suma= null;
var cantidad= 0;
for(var i=1; i<3000;i++){
	if(i%11==0){
		multiplo+= i+ "\n ";
		suma+= i;
		cantidad++;
	}
}
alert("Los múltiplos de 11 menores que 3000 son: "+cantidad+" y son los siguientes: "+multiplo+"\nY la suma de estos es: "+suma);

