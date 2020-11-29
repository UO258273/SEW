"use strict";
class CalculadoraRPN {
  constructor() {
    this.pila = new Array();
    this.consola = "";
  }
  teclaNums(num) {
    try {
      this.consola += num;
      this.mostrarConsola();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }

  teclaDec() {
    try {
      this.consola += ".";
      this.mostrarConsola();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  teclaPI() {
    try {
      this.consola += Math.PI;
      this.mostrarConsola();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }

  //OPERACIONES
  Sum() {
    try {
      var suma1 = parseFloat(this.pop());
      var suma2 = parseFloat(this.pop());
      var res = suma1 + suma2;
      this.push(res);
      this.mostrarPila();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  Sub() {
    try {
      var resta1 = parseFloat(this.pop());
      var resta2 = parseFloat(this.pop());
      var res = resta2 - resta1;
      this.push(res);
      this.mostrarPila();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  Mul() {
    try {
      var mul = parseFloat(this.pop());
      var mul2 = parseFloat(this.pop());
      var res = mul * mul2;
      this.push(res);
      this.mostrarPila();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  Div() {
    try {
      var divisor = parseFloat(this.pop());
      var dividendo = parseFloat(this.pop());
      var res = dividendo / divisor;
      this.push(res);
      this.mostrarPila();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  teclaFuncionesIndividuales(func) {
    try {
      var digito = this.pop();
      if (func == 1) digito = Math.sin(digito);
      else if (func == 2) digito = Math.cos(digito);
      else if (func == 3) digito = Math.tan(digito);
      else digito = Math.log(digito);
      this.push(digito);
      this.mostrarPila();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  teclaApilarDato() {
    try {
      this.push(this.consola);
      this.mostrarPila();
      this.consola = "";
      document.getElementById("consola").value = this.consola;
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  teclaDesapilarDato() {
    try {
      this.pop();
      this.mostrarPila();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  reset() {
    try {
      this.consola = "";
      document.getElementById("consola").value = this.consola;
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  resetfull() {
    try {
      this.vaciarPila();
      this.consola = "";
      document.getElementById("consola").value = this.consola;
      document.getElementById("pila").value = this.consola;
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  mostrarConsola() {
    try {
      document.getElementById("consola").value = this.consola;
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }

  //PILA
  push(valor) {
    try {
      this.pila.push(valor);
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  pop() {
    try {
      return this.pila.pop();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  mostrarPila() {
    try {
      var res = " ";
      for (var i in this.pila) res += " " + this.pila[i];
      document.getElementById("pila").value = res;
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
  vaciarPila() {
    try {
      for (var i in this.pila) this.pop();
      this.pop();
    } catch (err) {
      document.getElementById("consola").value = "Syntax Error";
      this.memory = "";
    }
  }
}
var calculadora = new CalculadoraRPN();
