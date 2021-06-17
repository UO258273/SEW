<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8" />
	<title>Inserta datos en tabla de la bbdd</title>
	<meta name="description" content="Gestión BBDD con PHP. Ejercicio 6">
	<meta name="keywords" content="bbdd, sql, php">
	<meta name="author" content="Luis Martinez">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="EstiloBaseDeDatos.css" rel="stylesheet" />
</head>

<body>
	<header>
		<h1>Ondas vídeo BBDD</h1>
		<a href='../index.html' class="button1">Volver a la página principal</a>
	</header>
	<section class="grid-2column">
		<h2 class="invisible">.</h2>
		<section class="navegador">
			<h3>Índice</h3>
			<nav>
				<ul>
					<li><a href="indexBase.html" title="Menú principal">Menú principal</a></li>
					<li><a href="CreaBBDD.php" title="Crear Base de Datos">Crear Base de Datos</a></li>
					<li><a>Insertar datos</a></li>
					<li><a href="MostrarDatos.php" title="Mostrar Datos Introducidos">Mostrar datos introducidos</a></li>
					<li><a href="EliminarDatos.php" title="Eliminar Datos Introducidos">Eliminar datos introducidos</a></li>
					<li><a href="Exportar.php" title="Exportar los datos">Exportar datos</a></li>
				</ul>
			</nav>
		</section>
		<section class="cuerpo">
			<h2>Complete los datos a insertar</h2>
			<form id="formbase" action='#' method='post'>
				<p>Trabajo:</p>
				<div class="espacio">
				<label for="nc">Descipción del trabajo:</label>
				<input type='text' class='text' id='nc' name='descripcionc' />
				<br>
				</div>
				<div class="espacio">
				<label for="uc">Ubicación del trabajo</label>
				<input type='text' class='text' id='uc' name='ubicacionc' />
				<br>
				</div>
				<div class="espacio">
				<label for="fic">Fecha de inicio del trabajo</label>
				<input type='text' class='text' id='fic' name='fechaInicioc' />
				<br>
				</div>
				<div class="espacio">
				<label for="ffc">Fecha fin del trabajo</label>
				<input type='text' class='text' id='ffc' name='fechaFinc' />
				<br>
				</div>
				<div class="espacio">
				<label for="ic">Importe del trabajo</label>
				<input type='text' class='text' id='ic' name='importec' />
				<br>
				</div>
				<div class="espacio">
				<input type='submit' class='button' name='insertarc' value='Insertar datos trabajo' />
				</div>


				<p>Trabajador</p>
				<div class="espacio">
				<label for="nm">Nombre del trabajador: </label>
				<input type='text' class='text' id='nm' name='nombred' />
				<br>
				</div>
				<div class="espacio">
				<label for="pm">Apellido del trabajador:</label>
				<input type='text' class='text' id='pm' name='apellidosd' />
				<br>
				</div>
				<div class="espacio">
				<label for="ep">Edad del trabajador</label>
				<input type='text' class='text' id='ep' name='edadd' />
				<br>
				</div>
				<div class="espacio">
				<label for="itd">Id del trabajo desempeñado</label>
				<input type='text' class='text' id='itd' name='id_trabajod' />
				<br>
				</div>
				<div class="espacio">
				<label for="imu">Id del material utilizado</label>
				<input type='text' class='text' id='imu' name='id_materiald' />
				<br>
				</div>
				<div class="espacio">
				<input type='submit' class='button' name='insertard' value='Insertar datos trabajador' />
				</div>



				<p>Material</p>
				<div class="espacio">
				<label for="nmm">Nombre del material</label>
				<input type='text' class='text' id='nmm' name='nombrem' />
				<br>
				</div>
				<div class="espacio">
				<label for="tmm">Tipo del material</label>
				<input type='text' class='text' id='tmm' name='tipom' />
				<br>
				</div>
				<div class="espacio">
				<input type='submit' class='button' name='insertarp' value='Insertar datos material' />
				</div>
			</form>

			<?php
			require('BaseDatos.php');
			$base = new BaseDatos();

			if (count($_POST) > 0) {
				if (isset($_POST['insertarc']))
					$base->insertartrabajo();
				if (isset($_POST['insertard']))
					$base->insertartrabajador();
				if (isset($_POST['insertarp']))
					$base->insertarmaterial();
			}
			?>
		</section>

</body>

</html>