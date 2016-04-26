function triangulo(){
	for(co=1; co<=500; co++){
		for(ca=1; ca<=500; ca++){
			for(hp=1; hp<=500; hp++){
				if(hp*hp===co*co+ca*ca){
					alert(" Los lados son : " +co+ " " +ca+" " +hp);
				}
			}
		}
	}
}
triangulo();


//document.right=alert
//document.write("<br>"+" Terna Pitagórica: " +co+ " " +ca+" " +hp+ ".");