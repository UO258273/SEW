"use strict";
class Ejercicio {
  constructor() {
    this.apikey = "47b790fd0fc41878c80c57c9846132cb";
    this.ciudades = [];
    this.ciudades.push("Oviedo");
    this.ciudades.push("Gijón");
    this.ciudades.push("Avilés");
    this.ciudades.push("Huesca");
    this.ciudades.push("León");
    this.tipo = "&mode=xml";
    this.unidades = "&units=metric";
    this.idioma = "&lang=es";
  }

  ejecutarAjax() {
    $("#toAdd").empty();
    for (var i = 0; i < this.ciudades.length; i++) {
      this.url =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        this.ciudades[i] +
        this.tipo +
        this.unidades +
        this.idioma +
        "&APPID=" +
        this.apikey;
      var _this = this;
      $.ajax({
        dataType: "xml",
        url: this.url,
        method: "GET",
        success: function (datos) {
          _this.cargarRespuesta(datos);
        },
        error: function () {
          _this.mostrarError();
        },
      });
    }
  }

  cargarRespuesta(respuesta) {
    var ciudad = $("city", respuesta).attr("name");
    var longitud = $("coord", respuesta).attr("lon");
    var latitud = $("coord", respuesta).attr("lat");
    var amanecer = $("sun", respuesta).attr("rise");
    var minutosZonaHoraria = new Date().getTimezoneOffset();
    var amanecerMiliSeg1970 = Date.parse(amanecer);
    amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
    var amanecerLocal = new Date(amanecerMiliSeg1970).toLocaleTimeString(
      "es-ES"
    );
    var oscurecer = $("sun", respuesta).attr("set");
    var oscurecerMiliSeg1970 = Date.parse(oscurecer);
    oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
    var oscurecerLocal = new Date(oscurecerMiliSeg1970).toLocaleTimeString(
      "es-ES"
    );
    var temperatura = $("temperature", respuesta).attr("value");
    var temperaturaMin = $("temperature", respuesta).attr("min");
    var temperaturaMax = $("temperature", respuesta).attr("max");
    var humedad = $("humidity", respuesta).attr("value");
    var presion = $("pressure", respuesta).attr("value");
    var velocidadViento = $("speed", respuesta).attr("value");
    var descripcion = $("weather", respuesta).attr("value");
    var imagen = $("weather", respuesta).attr("icon");

    var texto =
      "<div><h1>" +
      ciudad +
      "</h1>" +
      "<img src='http://openweathermap.org/img/w/" +
      imagen +
      ".png'/>";
    texto += "<p>Longitud: " + longitud + "</p><p>Latitud: " + latitud + "</p>";
    texto += "<p>Clima: " + descripcion + "</p>";
    texto +=
      "<p>Temperatura actual: " +
      temperatura +
      "º</p><p>Temperatura máxima: " +
      temperaturaMax +
      "º</p>Temperatura mínima: " +
      temperaturaMin +
      "º</p>";
    texto += "<p>Presión: " + presion + "</p><p>Humedad: " + humedad + "%</p>";
    texto += "<p>Velocidad del viento: " + velocidadViento;
    texto +=
      "<p>Salida del sol: " +
      amanecerLocal +
      "</p><p>Puesta del sol: " +
      oscurecerLocal +
      "</p></div>";

    $("#toAdd").append(texto);
  }

  mostrarError() {
    alert("Se ha producido un error.");
  }
}

var ejercicio = new Ejercicio();
