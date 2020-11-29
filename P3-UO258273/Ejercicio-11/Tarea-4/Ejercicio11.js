"use strict";
class Ejercicio{
    constructor(){}

    initMap(){
        var Ubicacion = {lat: 43.548471, lng: -5.663992};
        var mapaUbicacion = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:Ubicacion});
        var marcador = new google.maps.Marker({position:Ubicacion,map:mapaUbicacion});
    }

}

var ejercicio = new Ejercicio();