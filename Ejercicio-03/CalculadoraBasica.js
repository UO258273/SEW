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

  borrarPantalla() {
    this.cadena = "" + this.memory;
    this.memory = 0;
    this.imprime();
  }

  addMemoria() {
    this.memory += eval(this.cadena);
  }

  restarMemoria() {
    this.memory -= eval(this.cadena);
  }
  imprime() {
    document.getElementById("consola").value = this.cadena;
  }

  calcular() {
    try {
      this.cadena = eval(this.cadena);
      this.imprime();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
}
var calculadora = new Calculadora();
