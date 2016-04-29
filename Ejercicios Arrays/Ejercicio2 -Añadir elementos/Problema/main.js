function lista(){
	var nombre=["María", "Milú", "Carolina"];
	var cantidad=prompt("Cuantos nombres querés que sean en total?");
	for(var i=4; i<=cantidad; i++){
		var name=prompt("Ingresar nombre que falta "+i+" :");
		nombre.push(name);
	}
	return nombre;
}
alert("El lista de nombres es: "+lista());