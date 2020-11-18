"use strict";
class Calculadora {
  constructor() {
    this.cadena = "";
    this.memory = 0;
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

  calcular() {
    try {
      if (this.cadena == "") {
        this.cadena = 0;
      }
      this.cadena = eval(this.cadena);
      this.imprime();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
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
  
}

var calculadora = new Calculadora();
