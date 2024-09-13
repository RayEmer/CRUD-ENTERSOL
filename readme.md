# CRUD ENTERSOL

Este proyecto es un sistema CRUD de tareas dividido en frontend y backend. Incluye una base de datos de ejemplo con registros iniciales.

## Requisitos

- Node.js v14 o superior (Yo usé la versión actual v20.17.0)
- MySQL (u otro motor compatible con el SQL de la base de datos)
- npm (v6 o superior)

## Instrucciones para ejecutar el proyecto

### 1. Configuración de la base de datos

1. Importa el archivo 'BD.sql' ubicado en la raíz del proyecto para crear la base de datos, la tabla de tareas y los registros de prueba,
En este caso yo usé el comando:
SOURCE C:/Users/Tom/Documents/CRUD-ENTERSOL/BD.sql;  
pero la ruta cambiará dependiendo de donde tengan descargado el proyecto CRUD-ENTERSOL

2. Ve a la carpeta backend con:
cd backend

3. Instalar las dependencias
npm install

4. En este caso para efectos practivos ya incluí el .env tanto del front como del backend para que justamente solo se instale ya que solo es una BD de prueba y el archivo config.js que es donde se editarán las credenciales de SQL, en ese caso, tienen que poner el host, user y pasword de su entorno MySQL en el archivo config.js

5. Ejecutar el servidor:
node server

6. En otra terminal iran a la carpeta del frontend
cd frontend

7. Instalar las dependencias
npm install

8. Ejecutar el frontend:
npm start

9. Abrir el navegador en http://localhost:3001 para visualizar el aplicativo