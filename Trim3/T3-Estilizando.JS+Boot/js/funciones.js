function creaCampos(){
	let div1=document.getElementsByTagName("div")[0];
	let input = document.createElement("input");
		input.setAttribute("onblur","validar();");
		div1.appendChild(input);
}
function validar(){
	let nombre=document.getElementsByTagName("input")[0];
	if (nombre.value.length<4){
	alert("Minimo 4 caracteres");
	document.getElementsByTagName("div")[1].className="alert alert-danger";
	document.getElementsByTagName("div")[1].innerHTML="<strong>Error</strong> El campo debe tener mas de 4 caracteres"
	}
	else{
		document.getElementsByTagName("div")[1].className="alert alert-success";
		document.getElementsByTagName("div")[1].innerHTML="<strong>Correcto</strong>"
	}
}