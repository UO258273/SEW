"use strict";
class Ejercicio {
    constructor() { }

    initMap() {
        const Ubicacion = { lat: 43.355365, lng: -5.854619 };
        var mapaUbicacion = new google.maps.Map(document.getElementById('mapa'), { zoom: 18, center: Ubicacion });
        var marcador = new google.maps.Marker({ position: Ubicacion, map: mapaUbicacion });
    }
    exec() {
        navigator.geolocation.getCurrentPosition(this.mostrar);
    }
    rad(x) { return x * Math.PI / 180; }

    mostrar(posicion) {
        var lat1 = posicion.coords.latitude;
        var lon1 = posicion.coords.longitude;
        var lat2 = 43.355365;
        var lon2 = -5.854619;
        var dLat = (lat2 - lat1) * Math.PI / 180
        var dLong = (lon2 - lon1) * Math.PI / 180
        var radLat1 = lat1 * Math.PI / 180;
        var radLat2 = lat2 * Math.PI / 180;
        var R = 6378.137; //Radio de la tierra en km
        //var dLat = this.rad(difLat);
        //var dLong = this.rad(difLon);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        var salida = d.toFixed(3) +" km";
        $("#mostrar").append(salida);
    }

}

var ejercicio = new Ejercicio();