"use strict";
class Procesamiento {
    constructor() {}
    soportaApiFile() {
        if (window.File && window.FileReader && window.FileList && window.Blob)
            document.getElementById("soporte").innerHTML =
            "<p>Este navegador soporta el API File </p>";
        else
            document.getElementById("soporte").innerHTML =
            "<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>";
    }
    ejecutar() {
        $("#info").empty();
        var nBytes = 0,
            archivos = document.getElementById("subirArchivos").files;

        for (var i = 0; i < archivos.length; i++) {
            nBytes += archivos[i].size;
        }

        var nArchivos = "<p> Numero total archivos: " + archivos.length + "</p>";
        var pesoArchivos = "<p>Peso: " + nBytes + " bytes</p>";

        $("#info").append(nArchivos);
        $("#info").append(pesoArchivos);

        for (var i = 0; i < archivos.length; i++) {
            var nombresTiposTamaños =
                "<p id=" +
                i +
                ">Archivo[" +
                i +
                "] = " +
                archivos[i].name +
                " Tamaño: " +
                archivos[i].size +
                " bytes " +
                " Tipo: " +
                archivos[i].type +
                "</p>";
            $("#info").append(nombresTiposTamaños);
            this.leerContenido(archivos[i], i);
        }
    }

    leerContenido(archivo, id) {
        var tipoTexto = /text.*/;
        var tipoJson = "application/json";

        if (archivo.type.match(tipoTexto) || archivo.type == tipoJson) {
            var lector = new FileReader();
            var res;
            lector.onload = function(evento) {
                res = lector.result;
                $("#" + id).after(res);
            };
            lector.readAsText(archivo);
        }
    }
}

var procesar = new Procesamiento();