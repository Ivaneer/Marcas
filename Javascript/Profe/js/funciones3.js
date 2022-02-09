function cambiarEstado()
{
	let nombre_clase=document.getElementById("start").className;
	if (nombre_clase=="mostrado")
		{document.getElementById("start").className="oculto";
	}
	else
		{document.getElementById("start").className="mostrado";
	}
	
}