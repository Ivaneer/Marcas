function cambiarEstado()
{
	let nombre_clase=document.getElementById("start").className;
	if (nombre_clase=="mostrado")
		{document.getElementById("start").className="oculto";
		document.getElementById("start").innerHTML="VERDE"
	}
	else
		{document.getElementById("start").className="mostrado";
		document.getElementById("start").innerHTML="ROJO"
	}
	
}