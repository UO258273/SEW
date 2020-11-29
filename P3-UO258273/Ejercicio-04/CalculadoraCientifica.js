"use strict";
class Calculadora {
  constructor() {
    this.cadena = "";
    this.memory = 0;
  }

  pantallaVacia() {
    try {
      this.cadena = "";
      this.imprime();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }

  addPantalla(value) {
    try {
      this.cadena += value;
      this.imprime();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }

  imprime() {
    try {
      document.getElementById("consola").value = this.cadena;
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
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
    try {
      this.cadena += "" + this.memory;
      this.memory = 0;
      this.imprime();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }

  addMemoria() {
    try {
      this.memory += eval(this.cadena);
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }

  restarMemoria() {
    try {
      this.memory -= eval(this.cadena);
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
}
class CalculadoraCientifica extends Calculadora {
  funcion(value) {
    try {
      this.cadena += "Math." + value + "(";
      this.imprime();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  constante(value) {
    try {
      this.cadena += "Math." + value;
      this.imprime();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
}

var calculadora = new CalculadoraCientifica();
