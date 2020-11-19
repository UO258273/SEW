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
  imprimeAlerta(aviso) {
    document.getElementById("avi").value = aviso;
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
  print() {
    this.imprimeAlerta(this.cadena);
  }
  fun(variable) {
    return this.cadena.replace("x", variable);
  }

  integ() {
    var area = 0;
    var dx = 0.001;
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    console.log(min + " " + max);
    for (let x = parseInt(min); x < parseInt(max); x += dx) {
      area += dx * eval(this.cadena);
    }
    this.cadena = area;
    this.imprime();
    return area;
  }

  derivada() {
    var valor = document.getElementById("der").value;
    console.log(valor);
    valor = parseInt(valor);
    var dx = 0.0000001;
    let x = valor + dx;
    console.log(x);
    var prim = 0;
    prim = eval(this.cadena);
    console.log(prim);
    x = valor;
    var seg = eval(this.cadena);
    var salida = (prim - seg) / dx;
    console.log(salida);
    this.cadena=salida;
    this.imprime();
    return salida;
  }
}

var calculadora = new CalculadoraAvanzada();
