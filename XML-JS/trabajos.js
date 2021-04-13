"use strict";
class Procesamiento {
    constructor() {
        var text;
    }

    wikiSearch() {
        var output = document.getElementsByClassName("location");
        //output = this.sliceArray(output)
        //console.log("flag1");
        for (var i = 0;i<output.length;i++) {
            //console.log("flag");
            console.log(output[i].firstChild.data);
            this.deployInfo(output[i].firstChild.data)
        }
    }

    sliceArray(array) {
        var places = Array();
        for (var i = 0; i < array.length; i++) {
            places.push(array[i].innerHTML.split(": ")[1]);
        }
        return places;
    }

    deployInfo(place) {
        $("#toAdd").empty();
        this.url =
            "https://es.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" +
            place;
        var _this = this;
        $.ajax({
            type: "GET",
            xhrFields: {
                withCredentials: true
            },
            url: this.url,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "jsonp",
            success: function (data) {
                var pageId;
                for (var page_idx in data.query.pages) {
                    pageId = data.query.pages[page_idx].pageid;
                }
                var text2 = data.query.pages[pageId].extract;

                this.text = "<h3> " + place + " </h3>";
                this.text += "<p>";
                this.text += text2;
                this.text += " </p>";
                $("#toAdd").append(this.text);
            },
            error: function (errorMessage) {
                console.log("ha habido un error con la obtención de la información")
            }
        });

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
        $("#subirArchivos").hide();
        $("#wikiButton").show();
        $("#lblWiki").show();
    }

    leerContenido(archivo, id) {
        var tipoTexto = /text.*/;

        if (archivo.type.match(tipoTexto)) {
            var lector = new FileReader();
            var res;
            var salida = "";
            var pcomienzo = "<p>"
            var psalida = "<\p>";
            var h3comienzo= "<h3>";
            var h3salida = "</h3>"
            lector.onload = function (evento) {
                res = lector.result;
                var xml = res,
                    xmlDoc = $.parseXML(xml),
                    $xml = $(xmlDoc);
                var trabajos = xmlDoc.getElementsByTagName("trabajos");
                for (var i = 0; i < trabajos[0].children.length; i++) {

                    salida +=
                        "<h2>" +
                        trabajos[0].children[i].attributes[0].nodeValue +
                        "<\h2>" +
                        '<p class="location">' +
                        trabajos[0].children[i].getElementsByTagName("location")[0].childNodes[0].nodeValue +
                        psalida +
                        h3comienzo+
                        "latitud: " +
                        h3salida +
                        pcomienzo +
                        trabajos[0].children[i].getElementsByTagName("coordinates")[0].getElementsByTagName("latitud")[0].childNodes[0].nodeValue +
                        psalida +
                        h3comienzo+
                        "longitud: " +
                        h3salida+
                        pcomienzo +
                        trabajos[0].children[i].getElementsByTagName("coordinates")[0].getElementsByTagName("longitud")[0].childNodes[0].nodeValue +
                        psalida +
                        h3comienzo +
                        "altitud: " +
                        h3salida +
                        pcomienzo +
                        trabajos[0].children[i].getElementsByTagName("coordinates")[0].getElementsByTagName("altitude")[0].childNodes[0].nodeValue +
                        psalida +
                        h3comienzo +
                        "tiempo transcurrido: " +
                        h3salida +
                        pcomienzo +
                        trabajos[0].children[i].getElementsByTagName("timeElapsed")[0].childNodes[0].nodeValue +
                        psalida +
                        h3comienzo +
                        "fecha: " +
                        h3salida +
                        pcomienzo +
                        trabajos[0].children[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
                        psalida +
                        h3comienzo +
                        "descripcion: " +
                        h3salida +
                        pcomienzo +
                        trabajos[0].children[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
                        psalida +
                        h3comienzo +
                        "materiales: " +
                        h3salida;
                    for (var j = 0; j < trabajos[0].children[i].getElementsByTagName("materiales")[0].children.length; j++) {
                        salida +=
                            pcomienzo +
                            "nombre: " +
                            trabajos[0].children[i].getElementsByTagName("materiales")[0].children[j].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
                            psalida +
                            pcomienzo +
                            "tipo: " +
                            trabajos[0].children[i].getElementsByTagName("materiales")[0].children[j].getElementsByTagName("tipo")[0].childNodes[0].nodeValue +
                            psalida
                            +
                            "<br>";
                    }

                    salida +=
                        h3comienzo +
                        "precio: " +
                        h3salida +
                        pcomienzo +
                        trabajos[0].children[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
                        psalida +
                        h3comienzo +
                         "Fotografías: " +
                         h3salida;

                    for (var k = 0; k < trabajos[0].children[i].getElementsByTagName("images")[0].children.length; k++) {
                        salida +=
                            pcomienzo +
                            '<img src="' +
                            trabajos[0].children[i].getElementsByTagName("images")[0].children[k].attributes[0].nodeValue +
                            '"alt="foto' + String(i) + String(k) + '"width="400" height="230" />'
                        psalida;
                    }
                }

                $(info).append(salida);
            };
            this.prueba = lector.readAsText(archivo);
        }
    }

    esconderWikiButton(){
        $("#wikiButton").hide();
        $("#lblWiki").hide();
    }
}

var procesamientoTrabajos = new Procesamiento();
