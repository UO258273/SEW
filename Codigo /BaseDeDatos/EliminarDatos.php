<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8" />
	<title>Eliminar datos introducidos</title>
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
					<li><a href="InsertarDatos.php" title="Insertar Datos de prueba">Insertar datos</a></li>
					<li><a href="MostrarDatos.php" title="Buscar Datos Introducidos">Mostrar datos introducidos</a></li>
					<li><a>Eliminar datos introducidos</a></li>
					<li><a href="Exportar.php" title="Exportar los datos">Exportar datos</a></li>
				</ul>
			</nav>
		</section>
		<section class="cuerpo">
			<h2>Eliminar dato introducido</h2>
			<form id="formbase" action='#' method='post'>
				<label for="id">Id a borrar</label> <br>
				<input type='text' class='text' name='id' id='id' /> <br>
				<input type='submit' class='button' name='eliminarc' value='Eliminar trabajo' /> <br>
				<input type='submit' class='button' name='eliminard' value='Eliminar trabajador' /> <br>
				<input type='submit' class='button' name='eliminarp' value='Eliminar material' />
			</form>
			<?php
			require('BaseDatos.php');
			$base = new BaseDatos();

			if (count($_POST) > 0)
				if (isset($_POST['eliminarc']))
					$base->borrarDatostrabajo();
			if (isset($_POST['eliminard']))
				$base->borrarDatostrabajador();
			if (isset($_POST['eliminarp']))
				$base->borrarDatosmaterial();
			?>
		</section>
	</section>
</body>

</html>