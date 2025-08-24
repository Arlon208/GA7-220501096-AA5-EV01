<h1><em> Proyecto CRUD Back-end Node + Express Framework </em></h1><br>
<p>Este proyecto fue desarrollado con Node version 22.18, utilizando el framework Express version 5.1.0 realizando el modulo clientes, es un CRUD con conexion a base de datos MYSQL mediante el paquete MySQL2, por tanto
cuenta con las funciones de Crear, Leer, Modificar y Eliminar, dentro de una BD, Se realizo con el editor de codigo Visual Studio Code version 1.103.2, La base de datos esta realizada en MYSQL ejecutada desde MYSQL WORKBENCH, en los archivos del proyectos encontrara la 
base de datos llamada "cliente.sql" a fin de importala y puedan ejecutar el programa, la base de datos se debe llamar animalcenter o modificar dicha base en el archivo db.js dentro de la caperta config.</p>

<p>Si desea realizar pruebas puede utilizar POSTMAN con el fin de conectarse a la API, las URL de mapeo son:</p>
<ul>
<li>Añadir Usuario: localhost:8080/cliente/add  
  Debe entregarle un JSON con los datos Requeridos Ejemplo
  {
    "idCliente": 1111111,
    "nombre": "Roberto",
    "ciudad": "Cartagena",
    "direccion": "Calle 8c",
    "telefono": "321888795"
} 
</li>
<li>Modificar Cliente: localhost:8080/cliente/update/ID (Para la modificacion debe settear los datos a cambiar dentro del metodo y luego ejecutar la orden en postman) </li>
<li>Listar Cliente: localhost:8080/clientes (Trae una lista de todos lo cliente en la base de datos)</li>  
<li>Eliminar Cliente: localhost:8080/cliente/delete/ID (Reemplazar el ID por la cedula del cliente a borrar</li>
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
