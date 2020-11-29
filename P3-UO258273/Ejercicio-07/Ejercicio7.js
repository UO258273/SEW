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
    mostrarPadreYTipo() {
        if (!this.flag) {
            $("*", document.body).each(function() {
                var padre = $(this).parent().get(0);
                var tipoPadre = padre.tagName;
                $(this).prepend(
                    "<p>Etiqueta de su posicion actual: " +
                    $(this).prop("tagName") +
                    "</p>"
                );
                $(this).prepend("<p>Etiqueta de su padre: " + tipoPadre + "</p>");
            });

            this.flag = true;
        }
    }

    sumatorioTablas() {
        var row = [];
        var counter = 0;
        var column = [];

        $("table tr").each(function() {
            var row = $(this).children();
            var resultado = 0;

            for (var i = 1; i < row.length; i++) {
                var columna = row[i];
                resultado += parseInt(columna.outerText);
                if (counter != 0) column[i] += parseInt(columna.innerText);
                else column[i] = parseInt(columna.innerText);
            }

            row.push(resultado);
            counter++;
        });

        for (var i = 0; i < row.length; i++) {
            console.log("row");
            console.log(row[i]);
            $("#tabla").append("<p>Fila: " + i + " = " + row[i]);
        }

        for (var i = 1; i < column.length; i++) {
            console.log("columna");
            console.log(column[i]);
            $("#tabla").append("<p>Columna: " + i + " = " + column[i]);
        }
    }
}
var func = new Funcionalidad();
var cont = 1;
var mensajeOriginal = "";