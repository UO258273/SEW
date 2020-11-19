"use restrictive";
class Funcionalidad {
  constructor() {
	this.flag = false;
  }

  ocultar() {
    $("h1").hide();
  }
  mostrar() {
    $("h1").show();
  }

  modificar() {
    debugger;
    if (mensajeOriginal === "") {
      mensajeOriginal = $("h2").text();
    }
    if (cont < mensajeOriginal.length) {
      $("h2").text(
        `${mensajeOriginal.substring(
          cont,
          mensajeOriginal.length
        )},veces modificado: ${cont}`
      );
    } else {
      $("h2").text(
        "ya no se puede seguir modificando, veces modificado: " +
          mensajeOriginal.length
      );
    }
    cont++;
  }

  añadir() {
    debugger;
    $("h3").text(`${$("h3").text()} unas palabras mas añadidas`);
  }

  eliminar() {
	$("#ph3").remove();
	$("#eliminar").remove();
  }
  mostrarPadre(){
	if(!this.flag){
		$("*", document.body).each(function(){
			var padre = $(this).parent().get(0);
			var tipoPadre = padre.tagName;
			$(this).prepend("<p>Etiqueta de su posicion actual: " + $(this).prop("tagName") + "</p>");
			$(this).prepend("<p>Etiqueta de su padre: " + tipoPadre + "</p>");
		});

		this.flag = true;
	}
}

sumatorioTablas(){
	var filas = [];
	var columnas = [];
	var count = 0;

	$("table tr").each(function(){
		var tds = $(this).children();
		console.log(tds);
		var suma = 0;

		for(var i=0;i<tds.length;i++){
			var td = tds[i];
			suma += parseInt(td.innerText);
			if(count != 0)
				columnas[i] += parseInt(td.innerText);
			else
				columnas[i] = parseInt(td.innerText);
		}
		
		filas.push(suma);
		count++;
	}); 

	for(var i=0;i<filas.length;i++){
		$("#tabla").append("<p>Fila: " + i + " = " + filas[i]);
	}

	for(var i=0;i<columnas.length;i++){
		$("#tabla").append("<p>Columna: " + i + " = " + columnas[i]);
	}
}
}
var func = new Funcionalidad();
var cont = 1;
var mensajeOriginal = "";
