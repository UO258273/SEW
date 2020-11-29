"use strict";
class Procesamiento {
	constructor() {}
	soportaApiFile() {
        if (window.File && window.FileReader && window.FileList && window.Blob)
            document.getElementById("soporte").innerHTML ="<p>Este navegador soporta el API File </p>";
        else
            document.getElementById("soporte").innerHTML ="<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>";
    }
	Canvas() {

		//creo el canvas
		var canvas = document.getElementById('canvas');
		var canvas1 = canvas.getContext('2d');
		//aniado el gradiente
		var gradient = canvas1.createLinearGradient(0, 0, 170, 0);
		gradient.addColorStop("0.25", "red");
		gradient.addColorStop("0.55" ,"yellow");
		gradient.addColorStop("1", "red");
		//pongo el gradiente como estilos para los objetos rellenados y los que no
		canvas1.strokeStyle = gradient;
		canvas1.fillStyle = gradient;
		canvas1.lineWidth = 5;
		// creo el triangulo
		canvas1.beginPath();
		canvas1.moveTo(750,500);
		canvas1.lineTo(100,750);
		canvas1.lineTo(50,25);
		canvas1.fill();
		
		//pongo mi UO
		canvas1.font = 'italic 55px sans-serif';
		canvas1.strokeText("UO258273", 200, 100);
	}
	
	Svg(files) {
		var archivo = files[0];
		if (archivo.name.endsWith(".svg")) {
            var lector = new FileReader();
            lector.readAsText(archivo);
            lector.onload = function (evento) {
				document.getElementById("svg").innerHTML = lector.result;
            }
        }
		else {
			document.getElementById("svg").innerHTML = "<p>Este archivo no tiene la extension .svg</p>";
		}
	}
}

var ejercicio = new Procesamiento();
