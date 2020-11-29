
"use strict";
class Ejercicio{
    constructor(){}

    exec(){
        navigator.geolocation.getCurrentPosition(this.mostrar, this.error);
    }

    mostrar(posicion){
        var latitud = posicion.coords.latitude;
        var longitud = posicion.coords.longitude;

        var ubicacion=document.getElementById("mapa");
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + latitud + "," + longitud;
        var zoom ="&zoom=15";
        var tamaño= "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + latitud + "," + longitud;
        var sensor = "&sensor=false"; 
        
        var imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img src='" + imagenMapa + "'/>";
    }

    error(error){
        alert('Error: '+error.code+' '+error.message);
    }

}

var ejercicio = new Ejercicio();