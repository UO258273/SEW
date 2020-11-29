"use strict";
class Ejercicio {
  constructor() {
    this.apikey = "de24bd8504e1cda6e58a914849019dad";
  }

  ejecutarAjax() {
    $("#toAdd").empty();
    this.solicitarDatos();
  }

  solicitarDatos() {
    var url = "http://data.fixer.io/api/latest?access_key=" + this.apikey;
    var _this = this;
    $.ajax({
      dataType: "json",
      url: url,
      method: "GET",
      success: function (respuesta) {
        var gbp = respuesta["rates"]["GBP"];
        var egp = respuesta["rates"]["EGP"];
        var usd = respuesta["rates"]["USD"];
        var btc = respuesta["rates"]["BTC"];
        var jpy = respuesta["rates"]["JPY"];

        $("#prim").text("EUR-GBP: " + gbp);
        $("#seg").text("EUR-EGP: " + egp);
        $("#ter").text("EUR-USD: " + usd);
        $("#cuar").text("EUR-BTC: " + btc);
        $("#quin").text("EUR-JPY: " + jpy);
      },
      error: function () {
        alert("Se ha producido un error.");
      },
    });
  }
}

var ejercicio = new Ejercicio();
