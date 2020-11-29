"use strict";
class Ejercicio{
    constructor(){
        this.map = null;
    }

    soportaApiFile() {
        if (window.File && window.FileReader && window.FileList && window.Blob)
            document.getElementById("soporte").innerHTML =
            "<p>Este navegador soporta el API File </p>";
        else
            document.getElementById("soporte").innerHTML =
            "<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>";
    }

    initMap(){
        this.map = new google.maps.Map(document.getElementById('mapa'), {
            center: new google.maps.LatLng(-19.257753, 146.823688),
            zoom: 2,
            mapTypeId: 'roadmap'
        });
    }

    exec(){
        var archivos = document.getElementById("subirArchivos").files;
        var archivo = archivos[0];
        var lector = new FileReader();
        var resultado;
        var that = this;

        lector.onload = function (evento) {
            resultado = lector.result;
            that.cargarKML(resultado);
        }      

        lector.readAsText(archivo);

    }


    cargarKML(text){
        var map = this.map;
  
        var geoXml = new geoXML3.parser({
            map: map,
            singleInfoWindow: true,
        });
        geoXml.parseKmlString(text);
    }
}

var ejercicio = new Ejercicio();
