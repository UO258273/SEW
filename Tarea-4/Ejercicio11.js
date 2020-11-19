"use strict";
class Ejercicio{
    constructor(){}

    initMap(){
        var loc = {lat: 43.548471, lng: -5.663992};
        var mapaLoc = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:loc});
        var marcador = new google.maps.Marker({position:loc,map:mapaLoc});
    }

}

var ejercicio = new Ejercicio();