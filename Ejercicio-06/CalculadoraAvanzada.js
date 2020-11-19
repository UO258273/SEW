"use strict";
class CalculadoraAvanzada {
  constructor() {
    this.cadena = "";
    this.memory = 0;
    this.min = 1;
    this.max = 2;
  }

  pantallaVacia() {
    this.cadena = "";
    this.imprime();
  }

  addPantalla(value) {
    this.cadena += value;
    this.imprime();
  }

  imprime() {
    document.getElementById("consola").value = this.cadena;
  }

  borrarPantalla() {
    this.cadena += "" + this.memory;
    this.memory = 0;
    this.imprime();
  }

  addMemoria() {
    this.memory += eval(this.cadena);
  }

  restarMemoria() {
    this.memory -= eval(this.cadena);
  }
  funcion(value) {
    this.cadena += "Math." + value + "(";
    this.imprime();
  }
  constante(value) {
    this.cadena += "Math." + value;
    this.imprime();
  }
  print() {
    this.imprimeAlerta(this.cadena);
  }
  fun(variable) {
    return this.cadena.replace("x", variable);
  }
  integ(f, a, b) {
    var area = 0;
    var dx = 0.001;
    for (let x = a; x < b; x += dx) {
      area += dx * f(x);
    }
    return area;
  }
  integral() {
    //debugger;
    var sal = this.cadena;
    console.log(sal);
    var printable;
    var f = function (x) {
      var funcion = 1 / x ;
      return funcion;
    };
    var printable = String(f).slice(35,-31);
    var menor = document.getElementById("min").value;
    menor = parseInt(menor);
    var mayor = document.getElementById("max").value;
    mayor = parseInt(mayor);
    var integrada = this.integ(f, menor, mayor);
    this.imprimeEnunciado(
      "La Integral definida de " +
        printable +
        " entre los valores " +
        menor +
        " y " +
        mayor +
        " es: "
    );
    this.cadena = integrada;
    this.imprime();
  }

  derivada() {
    
    var dx = 0.0000001;
    var valor = document.getElementById("der").value;
    valor = parseInt(valor);
    let x = valor + dx;
    var f = function (x) {
      return Math.pow(x, 2);
    };
    var resultado = (f(x + dx) - f(x)) / dx;
    var printable = String(f).slice(29,-8);
    this.imprimeEnunciado(
      "La derivada de " + printable + " con x = " + valor + " es: "
    );
    this.cadena = resultado;
    this.imprime();
  }

  imprimeEnunciado(texto) {
    document.getElementById("texto").innerHTML = texto;
  }
}

var calculadora = new CalculadoraAvanzada();
