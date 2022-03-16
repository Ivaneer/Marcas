function validar(){
	let titulo=document.getElementsByTagName("input")[0];
	if (titulo.value.length<4){
	alert("Minimo 4 caracteres");
	}
}

function genero(){
	let generos = ['fantasticos','historicos','documental'];
	let SelectGenero = document.getElementsByTagName("select")[0];
	for (let i = 0; i < generos.length; i++) {
		let option = document.createElement("option");
		option.setAttribute("value", generos[i]);
		SelectGenero.appendChild(option);
	 document.getElementsByTagName("option")[i].innerHTML=generos[i];
	}
}
function enviar(){
	let titulo=document.getElementsByTagName("input")[0];
	let genero=document.getElementsByTagName("select")[0];
	if (titulo.value.length>3){
		alert("Se va a registrar la pelicula con titulo " +titulo.value+" y de genero " + genero.value );
	}
	else{
		alert("Ponga un titulo");
	}
}