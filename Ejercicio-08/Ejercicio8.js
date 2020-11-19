"use strict";
class Ejercicio {
  constructor() {
    this.apikey = "47b790fd0fc41878c80c57c9846132cb";
    this.arrayCiudades = [];
    this.arrayCiudades.push("Oviedo");
    this.arrayCiudades.push("Gijón");
    this.arrayCiudades.push("Avilés");
    this.tipo = "&mode=json";
    this.unidades = "&units=metric";
    this.idioma = "&lang=es";
  }

  main() {
    $("#toAdd").empty();
    for (var i = 0; i < this.arrayCiudades.length; i++) {
      this.url =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        this.arrayCiudades[i] +
        this.tipo +
        this.unidades +
        this.idioma +
        "&APPID=" +
        this.apikey;
      var _this = this;
      $.ajax({
        dataType: "json",
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
    var amanecer = respuesta["sys"]["sunrise"];
    var date = new Date(amanecer * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    amanecer = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    var puesta = respuesta["sys"]["sunset"];
    date = new Date(puesta * 1000);
    hours = date.getHours();
    minutes = "0" + date.getMinutes();
    seconds = "0" + date.getSeconds();
    puesta = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    /*document.write("<div><h1>" +
      respuesta["name"] +
      "</h1>" +
      "<img src='http://openweathermap.org/img/w/" +
      respuesta["weather"][0]["icon"] +
      ".png'/>");
    document.write(
      "<p>Longitud: " +
      respuesta["coord"]["lon"] +
      "</p><p>Latitud: " +
      respuesta["coord"]["lat"] +
      "</p>");
    document.write( "<p>Clima: " + respuesta["weather"][0]["description"] + "</p>");
    document.write(
      "<p>Temperatura actual: " +
      respuesta["main"]["temp"] +
      "º</p><p>Temperatura máxima: " +
      respuesta["main"]["temp_max"] +
      "º</p>Temperatura mínima: " +
      respuesta["main"]["temp_min"] +
      "º</p>");
    document.write(
      "<p>Presión: " +
      respuesta["main"]["pressure"] +
      "</p><p>Humedad: " +
      respuesta["main"]["humidity"] +
      "%</p>");
    document.write("<p>Velocidad del viento: " + respuesta["wind"]["speed"]);
    document.write(
      "<p>Salida del sol: " +
      amanecer +
      "</p><p>Puesta del sol: " +
      puesta +
      "</p></div>");
*/
    
    var texto =
      "<div><h1>" +
      respuesta["name"] +
      "</h1>" +
      "<img src='http://openweathermap.org/img/w/" +
      respuesta["weather"][0]["icon"] +
      ".png'/>";
    texto +=
      "<p>Longitud: " +
      respuesta["coord"]["lon"] +
      "</p><p>Latitud: " +
      respuesta["coord"]["lat"] +
      "</p>";
    texto += "<p>Clima: " + respuesta["weather"][0]["description"] + "</p>";
    texto +=
      "<p>Temperatura actual: " +
      respuesta["main"]["temp"] +
      "º</p><p>Temperatura máxima: " +
      respuesta["main"]["temp_max"] +
      "º</p>Temperatura mínima: " +
      respuesta["main"]["temp_min"] +
      "º</p>";
    texto +=
      "<p>Presión: " +
      respuesta["main"]["pressure"] +
      "</p><p>Humedad: " +
      respuesta["main"]["humidity"] +
      "%</p>";
    texto += "<p>Velocidad del viento: " + respuesta["wind"]["speed"];
    texto +=
      "<p>Salida del sol: " +
      amanecer +
      "</p><p>Puesta del sol: " +
      puesta +
      "</p></div>";

    $("#toAdd").append(texto);
  }

  mostrarError() {
    alert("Se ha producido un error.");
  }
}

var ejercicio = new Ejercicio();
