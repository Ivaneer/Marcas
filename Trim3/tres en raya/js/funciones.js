function crearTablero(){
	var tabla=document.createElement("table");
		tabla.style.width="400px";
		tabla.style.height="400px";
		tabla.style.border="2px solid black";
	for (indice_fila=0; indice_fila<3; indice_fila++){
		var obj_fila=document.createElement("tr");
		for (indice_columna=0; indice_columna<3; indice_columna++){
			var obj_columna=document.createElement("td");
			obj_columna.style.border="2px solid black"
			obj_fila.appendChild(obj_columna);
		}
	}
}