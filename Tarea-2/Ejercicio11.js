"use strict";
class Ejercicio {
  constructor() {}

  exec() {
    navigator.geolocation.getCurrentPosition(this.mostrar, this.verErrores);
  }

  mostrar(posicion) {
    var salida = "<br>Latitud: " + posicion.coords.latitude + " grados<br>";
    salida += "Longitud: " + posicion.coords.longitude + " grados<br>";
    salida +=
      "Precisión de la latitud y longitud: " +
      posicion.coords.accuracy +
      " metros<br>";
    salida += "Altitud: " + posicion.coords.altitude + " metros.<br>";
    salida +=
      "Precisión de la altitud: " +
      posicion.coords.altitudeAccuracy +
      " metros<br>";
    salida += "Rumbo: " + posicion.coords.heading + " grados<br>";
    salida += "Velocidad: " + posicion.coords.speed + " metros/segundo<br>";

    $("#seccion").append(salida);
  }

  verErrores(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.mensaje = "El usuario no permite la petición de geolocalización";
        alert(mensaje);
        break;
      case error.POSITION_UNAVAILABLE:
        this.mensaje = "Información de geolocalización no disponible";
        alert(mensaje);
        break;
      case error.TIMEOUT:
        this.mensaje = "La petición de geolocalización ha caducado";
        alert(mensaje);
        break;
      case error.UNKNOWN_ERROR:
        this.mensaje = "Se ha producido un error desconocido";
        alert(mensaje);
        break;
    }
  }
}

var ejercicio = new Ejercicio();
