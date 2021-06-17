<?php
class BaseDatos
{

    private $servername;
    private $username;
    private $password;
    private $database;

    public function __construct()
    {
        $this->servername = "localhost";
        $this->username = "DBUSER2020";
        $this->password = "DBPSWD2020";
        $this->database = "ondas";
    }



    public function crearBaseDeDatos()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password);
        $consulta = "CREATE DATABASE IF NOT EXISTS ondas COLLATE utf8_spanish_ci";
        if ($transacc->query($consulta) === TRUE)
            echo "<p >Se ha creado la base de datos 'ondas'</p>";
        else {
            echo "<p >La base de datos ya existe o no se ha podido crear</p>";
            exit();
        }
        $transacc->close();
    }

    public function crearTabla()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);



        $consulta = "CREATE TABLE IF NOT EXISTS trabajo (
                        id INT NOT NULL AUTO_INCREMENT, descripcion VARCHAR(200), ubicacion VARCHAR(200), fechaInicio DATE, fechaFin DATE, importe VARCHAR(10),
                        PRIMARY KEY (id))";

        if ($transacc->query($consulta) === TRUE)
            echo "<p>Se ha creado la tabla 'trabajo'</p>";
        else {
            echo "<p>La tabla trabajo ya existe o no se ha podido crear</p>";
            exit();
        }

        $consulta = "CREATE TABLE IF NOT EXISTS material (
                        id INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(200), tipo VARCHAR(200),
                        PRIMARY KEY (id))";

        if ($transacc->query($consulta) === TRUE)
            echo "<p>Se ha creado la tabla 'material'</p>";
        else {
            echo "<p>La tabla material ya existe o no se ha podido crear</p>";
            exit();
        }

        $consulta = "CREATE TABLE IF NOT EXISTS trabajador (
                id INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(200), apellidos VARCHAR(200), edad INT, id_trabajo INT, id_material INT,
                PRIMARY KEY (id),
                FOREIGN KEY (id_trabajo) REFERENCES trabajo(id),
                FOREIGN KEY (id_material) REFERENCES material(id))";

        if ($transacc->query($consulta) === TRUE)
            echo "<p>Se ha creado la tabla 'trabajador'</p>";
        else {
            echo "<p>La tabla trabajador ya existe o no se ha podido crear</p>";
            exit();
        }

        $transacc->close();
    }

    public function insertartrabajo()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $consultaInsercion = $transacc->prepare("INSERT INTO trabajo (descripcion,ubicacion,fechaInicio, fechaFin, importe) VALUES (?,?,?,?,?)");
        if ((empty($_POST['descripcionc']) || empty($_POST['ubicacionc']) || empty($_POST['fechaInicioc']) || empty($_POST['fechaFinc']) || empty($_POST['importec'])))
            echo "<p>No se puede realizar la inserción, faltan campos por completar</p>";
        else {
            $consultaInsercion->bind_param(
                'sssss',
                $_POST["descripcionc"],
                $_POST["ubicacionc"],
                $_POST["fechaInicioc"],
                $_POST["fechaFinc"],
                $_POST["importec"]
            );
            $consultaInsercion->execute();
            echo "<p>Inserción realizada correctamente</p>";
            $consultaInsercion->close();
        }
        $transacc->close();
    }

    public function insertartrabajador()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $consultaInsercion = $transacc->prepare("INSERT INTO trabajador (nombre,apellidos,edad,id_trabajo,id_material) VALUES (?,?,?,?,?)");
        if ((empty($_POST['nombred']) || empty($_POST['apellidosd']) || empty($_POST['edadd']) || empty($_POST['id_trabajod']) || empty($_POST['id_materiald'])))
            echo "<p>No se puede realizar la inserción, faltan campos por completar</p>";
        else {
            $consultaInsercion->bind_param(
                'ssiii',
                $_POST["nombred"],
                $_POST["apellidosd"],
                $_POST["edadd"],
                $_POST["id_trabajod"],
                $_POST["id_materiald"]
            );
            $consultaInsercion->execute();
            echo "<p>Inserción realizada correctamente</p>";
            $consultaInsercion->close();
        }
        $transacc->close();
    }

    public function insertarmaterial()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $consultaInsercion = $transacc->prepare("INSERT INTO material (nombre,tipo)
				VALUES (?,?)");
        if ((empty($_POST['nombrem']) || empty($_POST['tipom'])))
            echo "<p>No se puede realizar la inserción, faltan campos por completar</p>";
        else {
            $consultaInsercion->bind_param(
                'ss',
                $_POST["nombrem"],
                $_POST["tipom"]
            );
            $consultaInsercion->execute();
            echo "<p>Inserción realizada correctamente</p>";
            $consultaInsercion->close();
        }
        $transacc->close();
    }

    public function MostrarDatostrabajo()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $consulta = $transacc->prepare("SELECT * FROM trabajo");
        $consulta->execute();
        $resultado = $consulta->get_result();
        if ($resultado->num_rows >= 1) {
            echo "<h2>Datos de trabajos:</h2>";
            echo "<ul>";
            while ($row = $resultado->fetch_assoc()) {
                echo "<li>Descripcion del trabajo: " . $row["descripcion"] . "</li>";
                echo "<li>Ubicacion del trabajo: " . $row["ubicacion"] . "</li>";
                echo "<li>Fecha de inicio del trabajo: " . $row["fechaInicio"] . "</li>";
                echo "<li>Fecha fin del trabajo: " . $row["fechaFin"] . "</li>";
                echo "<li>Importe del trabajo: " . $row["importe"] . "</li>";
               
            }
            echo "</ul>";
        }
        $consulta->close();
        $transacc->close();
    }

    public function MostrarDatostrabajador()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $consulta = $transacc->prepare("SELECT * FROM trabajador");
        $consulta->execute();
        $resultado = $consulta->get_result();
        if ($resultado->num_rows >= 1) {
            echo "<h2>Datos de trabajadores:</h2>";
            echo "<ul>";

            while ($row = $resultado->fetch_assoc()) {
                echo "<li>Nombre del trabajador: " . $row["nombre"] . "</li>";
                echo "<li>Apellidos deltrabajador: " . $row["apellidos"] . "</li>";
                echo "<li>Edad del trabajador: " . $row["edad"] . "</li>";
                echo "<li>Trabajo desempeñado por el trabajador: " . $row["id_trabajo"] . "</li>";
                echo "<li>Material usado por el trabajador" . $row["id_material"] . "</li>";
               

            }
            echo "</ul>";
        }
        $consulta->close();
        $transacc->close();
    }

    public function MostrarDatosmaterial()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $consulta = $transacc->prepare("SELECT * FROM material");
        $consulta->execute();
        $resultado = $consulta->get_result();
        if ($resultado->num_rows >= 1) {
            echo "<h2>Datos de materiales:</h2>";
            echo "<ul>";
            while ($row = $resultado->fetch_assoc()) {
                echo "<li>Nombre del material: " . $row["nombre"] . "</li>";
                echo "<li>Tipo del material: " . $row["tipo"] . "</li>";
               
            }
            echo "</ul>";
        }
        $consulta->close();
        $transacc->close();
    }

    public function borrarDatostrabajo()
    {
        if (empty($_POST['id']))
            echo "<p>Introduzca id</p>";
        else {
            $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
            $consulta = $transacc->prepare("DELETE FROM trabajo WHERE id=?");
            $consulta->bind_param('i', $_POST["id"]);
            $consulta->execute();
            $consulta->close();
            echo "<p>Eliminación realizada correctamente</p>";
            $transacc->close();
        }
    }

    public function borrarDatostrabajador()
    {
        if (empty($_POST['id']))
            echo "<p>Introduzca id</p>";
        else {
            $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
            $consulta = $transacc->prepare("DELETE FROM trabajador WHERE id=?");
            $consulta->bind_param('i', $_POST["id"]);
            $consulta->execute();
            $consulta->close();
            echo "<p>Eliminación realizada correctamente</p>";
            $transacc->close();
        }
    }

    public function borrarDatosmaterial()
    {
        if (empty($_POST['id']))
            echo "<p>Introduzca id</p>";
        else {
            $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
            $consulta = $transacc->prepare("DELETE FROM material WHERE id=?");
            $consulta->bind_param('i', $_POST["id"]);
            $consulta->execute();
            $consulta->close();
            echo "<p>Eliminación realizada correctamente</p>";
            $transacc->close();
        }
    }

    public function cargarDatos($a1, $a2)
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $archivo = fopen($a1, "r");
        if ($a2 == 1) {
            while ($line = fgets($archivo)) {
                $consultaInsercion = $transacc->prepare("INSERT INTO trabajo VALUES (?,?,?,?,?,?)");
                $toInsert = explode(",", $line);
                $consultaInsercion->bind_param(
                    'isssss',
                    $toInsert[0],
                    $toInsert[1],
                    $toInsert[2],
                    $toInsert[3],
                    $toInsert[4],
                    $toInsert[5]
                );
                $consultaInsercion->execute();
            }
        } else if ($a2 == 2) {
            while ($line = fgets($archivo)) {
                $consultaInsercion = $transacc->prepare("INSERT INTO material VALUES (?,?,?)");
                $toInsert = explode(",", $line);
                $consultaInsercion->bind_param(
                    'iss',
                    $toInsert[0],
                    $toInsert[1],
                    $toInsert[2]
                );
                $consultaInsercion->execute();
            }
            
        } else {
            while ($line = fgets($archivo)) {
                $consultaInsercion = $transacc->prepare("INSERT INTO trabajador VALUES (?,?,?,?,?,?)");
                $toInsert = explode(",", $line);
                $consultaInsercion->bind_param(
                    'issiii',
                    $toInsert[0],
                    $toInsert[1],
                    $toInsert[2],
                    $toInsert[3],
                    $toInsert[4],
                    $toInsert[5]
                );
                $consultaInsercion->execute();
            }
        }
        $consultaInsercion->close();
        $salida = "Datos cargados correctamente ".$a1;
        echo "<p>$salida</p>";
    }

    public function Exportarmaterial()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $datosExportar =  $transacc->query('SELECT * FROM material');
        $cadenaParaExportar2 = "";
        if ($datosExportar->num_rows > 0) {
            while ($row = $datosExportar->fetch_assoc()) {
                $cadenaParaExportar2 .= $row['id'] . "," . $row['nombre'] . "," . $row['tipo'] . "\r\n";
            }
        }
        $transacc->close();
        file_put_contents("material.csv", $cadenaParaExportar2);
        echo "<p>Fichero material generado correctamente</p>";
    }
    public function ExportarTrabajo()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $datosExportar =  $transacc->query('SELECT * FROM trabajo');
        $cadenaParaExportar2 = "";
        if ($datosExportar->num_rows > 0) {
            while ($row = $datosExportar->fetch_assoc()) {
                $cadenaParaExportar2 .= $row['id'] . "," . $row['descripcion'] . "," . $row['ubicacion'] ."," . $row['fechaInicio'] ."," . $row['fechaFin'] ."," . $row['importe'] . "\r\n";
            }
        }
        $transacc->close();
        file_put_contents("trabajo.csv", $cadenaParaExportar2);
        echo "<p>Fichero trabajo generado correctamente</p>";
    }
    public function ExportarTrabajador()
    {
        $transacc = new mysqli($this->servername, $this->username, $this->password, $this->database);
        $datosExportar =  $transacc->query('SELECT * FROM trabajador');
        $cadenaParaExportar2 = "";
        if ($datosExportar->num_rows > 0) {
            while ($row = $datosExportar->fetch_assoc()) {
                $cadenaParaExportar2 .= $row['id'] . "," . $row['nombre'] . "," . $row['apellidos'] ."," . $row['edad'] ."," . $row['id_trabajo'] ."," . $row['id_material'] . "\r\n";
            }
        }
        $transacc->close();
        file_put_contents("trabajador.csv", $cadenaParaExportar2);
        echo "<p>Fichero trabajador generado correctamente</p>";
    }

    function leerCSV($archivo)
    {
        $linea = 0;
        //Abrimos nuestro archivo
        $archivo = fopen($archivo, "r");
        //Lo recorremos
        while (($datos = fgetcsv($archivo, ",")) == true) {
            $num = count($datos);
            $linea++;
            //Recorremos las columnas de esa linea
            for ($columna = 0; $columna < $num; $columna++) {
                $this->debugConsola($datos[$columna] . "\n");
            }
        }
        //Cerramos el archivo
        fclose($archivo);
    }
    function debugConsola($data)
    {
        $output = $data;
        if (is_array($output))
            $output = implode(',', $output);

        echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
    }
}
