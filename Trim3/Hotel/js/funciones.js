function nombres(){
	let divAdultos = document.getElementsByTagName("div")[0];
	let divNinos = document.getElementsByTagName("div")[1];
	let adultos=document.getElementById("adultos");
	let ninos=document.getElementById("ninos");
	divAdultos.innerHTML=" ";
	divNinos.innerHTML=" ";

	for ( i=0; i<adultos.value ; i++) {
		let text = document.createElement("input");
		text.setAttribute("type", "text");
		text.setAttribute("placeholder", "Nombre");
		text.setAttribute("class", "Nombre");
		divAdultos.appendChild(text);
	}
	for ( i=0; i<ninos.value ; i++) {
		let text = document.createElement("input");
		text.setAttribute("type", "number");
		text.setAttribute("class", "edad")
		text.setAttribute("placeholder", "Edad");
		divNinos.appendChild(text);
	}
}

function validar(){
	let Nadultos=document.getElementsByTagName("select")[0];
	let Nninos=document.getElementsByTagName("select")[1];
	let adultos=document.getElementsByClassName("Nombre");
	let edad=document.getElementsByClassName("edad");
	let nombres=" ";
	let edades=" ";
	for(i=0; i<adultos.length ; i++){
		let nombre=adultos[i].value;
		nombres=nombres+""+nombre
	}
	for(i=0; i<edad.length ; i++){
		let edat=edad[i].value;
		edades=edades+" "+edat;
	}
	alert("hay "+ Nadultos.value + " adultos con nombre: "+ nombres+" y hay "  +Nninos.value + " niños con edades: "+ edades );
}

//PRUEBAS F
	/*if (adultos.value=="1"){
		let text = document.createElement("input");
		text.setAttribute("type", "text");
		divAdultos.appendChild(text);
	}
	
	if (adultos.value=="2"){
		let text = document.createElement("input");
		text.setAttribute("type", "text");
		divAdultos.appendChild(text);
		let text2 = document.createElement("input");
		text2.setAttribute("type", "text");
		divAdultos.appendChild(text2);
	}*/

	/*function validar(){
	let adultos=document.getElementsByTagName("select")[0];
	let ninos=document.getElementsByTagName("select")[1];
	let tamañoNombres=document.querySelectorAll('input.Nombre').length;
	let tamañoEdades=document.querySelectorAll('input.edad').length;
	for(i=0; i<adultos.value ; i++){
	let nombre=document.getElementsByClassName("Nombre")[i]
	let edad=document.getElementsByClassName("edad")[i];
	
	if (tamañoNombres==1) {
		alert("hay "+ adultos.value + " adultos con nombre "+ nombre.value+" y hay "  +ninos.value + " niños con edad "+ edad.value );
	}
   }
}*/
