<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8" />
	<title>Crear base de datos</title>
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
					<li><a>Crear Base de Datos</a></li>
					<li><a href="InsertarDatos.php" title="Insertar Datos">Insertar datos</a></li>
					<li><a href="MostrarDatos.php" title="Mostrar Datos Introducidos">Mostrar datos introducidos</a></li>
					<li><a href="EliminarDatos.php" title="Eliminar Datos Introducidos">Eliminar datos introducidos</a></li>
					<li><a href="Exportar.php" title="Exportar los datos">Exportar datos</a></li>
				</ul>
			</nav>
		</section>
		<section class="cuerpo">
			<h2>Crear base de datos de Ondas</h2>
			<form id="formbase" action='#' method='post'>
				<input type='submit' class='button' name='generaBase' value='Crear base de datos' />
			</form>
			<?php
			require('BaseDatos.php');
			$base = new BaseDatos();
			if (count($_POST) > 0)
				if (isset($_POST['generaBase'])) {
					$base->crearBaseDeDatos();
					$base->crearTabla();
					$base->cargarDatos("trabajo.csv", 1);
					$base->cargarDatos("material.csv", 2);
					$base->cargarDatos("trabajador.csv", 3);
				}
			?>
		</section>
	</section>
</body>

</html>