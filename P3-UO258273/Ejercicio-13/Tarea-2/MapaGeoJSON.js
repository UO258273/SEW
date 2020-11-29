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
            center: new google.maps.LatLng(43.546480, -5.662275),
            zoom: 12,
            mapTypeId: 'roadmap'
        });
    }

    exec(){
        var lector = new FileReader();
        var resultado;
        var that = this;

        var archivos = document.getElementById("subirArchivos").files;
        var archivo = archivos[0];

        lector.onload = function (evento) {
            resultado = lector.result;
            that.loadGeoJson(JSON.parse(resultado));
        }      

        lector.readAsText(archivo);
    }

    loadGeoJson(text){
        this.map.data.addGeoJson(text);
    }

}

var ejercicio = new Ejercicio();