<h1><em> Proyecto CRUD Back-end Node + Express Framework </em></h1><br>
<p>Este proyecto fue desarrollado con Node version 22.18, utilizando el framework Express version 5.1.0 realizando el modulo clientes, es un CRUD con conexion a base de datos MYSQL mediante el paquete MySQL2, por tanto
cuenta con las funciones de Crear, Leer, Modificar y Eliminar, dentro de una BD, Se realizo con el editor de codigo Visual Studio Code version 1.103.2, La base de datos esta realizada en MYSQL ejecutada desde MYSQL WORKBENCH, en los archivos del proyectos encontrara la 
base de datos llamada "cliente.sql" a fin de importala y puedan ejecutar el programa, la base de datos se debe llamar animalcenter o modificar dicha base en el archivo db.js dentro de la caperta config.</p>

<p>Si desea realizar pruebas puede utilizar POSTMAN con el fin de conectarse a la API, las URL de mapeo son:</p>
<ul>
<li>Crear Cliente: http://localhost:8080/api/v1/clientes/create
  Debe entregarle un JSON con los datos Requeridos Ejemplo:<br>
{<br>
    "id_cliente": 111626578888,<br>
    "nombre": "Arturo Londono",<br>
    "ciudad": "Zarzal",<br>
    "direccion": "Calle 4",<br>
    "telefono": "55555887"<br>
}
</li>
<li>Actualizar Cliente: http://localhost:8080/api/v1/clientes/update/ID <- Cambiar el ID por el numero de cedula Debe entregar un JSON con los datos Ejemplo: <br>
{ <br>
    "nombre": "Marcela Rios",<br>
    "ciudad": "Bogota",<br>
    "direccion": "Calle 9A",<br>
    "telefono": "8875556"<br>
}</li>
<li>Listar Cliente: http://localhost:8080/api/v1/clientes/getall (Trae una lista de todos lo cliente en la base de datos)</li>  
<li>Eliminar Cliente: http://localhost:8080/api/v1/clientes/delete/ID (Reemplazar el ID por la cedula del cliente a borrar)</li>
</ul>

<h3>Paquetes npm Usados</h3>
<ul>
  <li>Mysql2: Permite conexion a BD</li>
  <li>Colors: Permite usar colores dentro de la terminal</li>
  <li>Morgan: Permite la vizualicion de llamados al servidor en la consola</li>
  <li>Nodemon: reinicia el servidor automaticamente al detectar cambios</li>
</ul>

<h3>Tecnologias Usadas</h3>
<ul>
  <li>Node + Express</li>
  <li>MySQL </li>
</ul>
