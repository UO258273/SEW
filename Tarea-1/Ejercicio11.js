"use strict";
class Ejercicio{
    constructor(){}

    exec(){
        navigator.geolocation.getCurrentPosition(this.mostrar);
    }

    mostrar(posicion){
        var salida ='<br>Latitud: '+posicion.coords.latitude+' grados<br>'; 
        salida+='Longitud: '+posicion.coords.longitude+' grados<br>'; 
        salida+='Precisión de la latitud y longitud: '+posicion.coords.accuracy+' metros<br>';
        salida+='Altitud: '+posicion.coords.altitude+' metros.<br>';
        salida+='Precisión de la altitud: '+posicion.coords.altitudeAccuracy+' metros<br>'; 
        salida+='Rumbo: '+posicion.coords.heading+' grados<br>'; 
        salida+='Velocidad: '+posicion.coords.speed+' metros/segundo<br>';
        
        $("#mostrar").append(salida);
    }

}

var ejercicio = new Ejercicio();