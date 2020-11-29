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

    calcular() {
        try {
            //console.log(eval(this.cadena));
            this.cadena = eval(this.cadena);
            this.imprime();
        } catch (err) {
            document.getElementById("consola").value = "Syntax Error";
            this.memory = "";
        }
    }
}
var calculadora = new Calculadora();