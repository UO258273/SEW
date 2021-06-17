<!DOCTYPE HTML>
<html lang="es">

<head>
	<meta charset="UTF-8" />
	<title>Exportar datos introducidos</title>
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
		<section class = "navegador">
			<h3>Índice</h3>
		<nav>
			<ul>
				<li><a href="indexBase.html" title="Menú principal">Menú principal</a></li>
				<li><a href="CreaBBDD.php" title="Crear Base de Datos">Crear Base de Datos</a></li>
				<li><a href="InsertarDatos.php" title="Insertar Datos">Insertar datos</a></li>
				<li><a href="MostrarDatos.php" title="Buscar Datos Introducidos">Mostrar datos introducidos</a></li>
				<li><a href="EliminarDatos.php" title="Eliminar Datos Introducidos">Eliminar datos introducidos</a></li>
				<li><a>Exportar datos</a></li>
			</ul>
		</nav>
		</section>
		<section class="cuerpo">
		<h2>Resultados</h2>
			<?php
			require('BaseDatos.php');
			$base = new BaseDatos();
			$base->Exportartrabajador();
			$base->Exportarmaterial();
			$base->Exportartrabajo();
			?>
		</section>
	</section>
</body>

</html>