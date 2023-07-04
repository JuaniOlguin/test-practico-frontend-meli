# Resolución Test Práctico Frontend Mercado Libre
Resolución para el test práctico para aspirantes al área de front-end de Mercado Libre.
Autor: Juan Ignacio Olguin - JuaniOlguin (GitHub) - juani.olguin@gmail.com

## Consigna
Aplicación web que permita realizar la búsqueda de distintos productos y ver su información y descripción haciendo uso de la API que provee Mercado Libre.

## Tecnologías y Herramientas
### Cliente

 - HTML 5
 - CSS 3
 - Bootstrap 5
 - Typescript (v5.1.3) con React (v18.2.0) y Next.js (v13.4.7) como framework para implementar Server Side Rendering
 
 ### Servidor
 
 - Node.js (v18.16.0)
 - Express (v4.18.2)

### Herramientas

 - Git y GitHub para versionado del código. 
 - Postman para probar la API.

## Puesta en funcionamiento

El proyecto esta dividido en dos carpetas, una para el cliente (client) y otra para el servidor (server).
### Servidor
Al posicionarse en la carpeta "server", es necesario ejecutar el comando "npm install" para realizar la instalacion de las dependencias del proyecto (es necesario tener [Node](https://nodejs.org/es/download) instalado en el sistema). Una vez instaladas todas las dependencias, para poner el servidor en funcionamiento en el puerto 3001, se debe ejecutar el comando "npm run start".
### Cliente
Al posicionarse en la carpeta "client", es necesario ejecutar el comando "npm install" para realizar la instalación de las dependencias del proyecto. Una vez instaladas todas las dependencias, para poder acceder a la interfaz, y poner en funcionamiento el cliente, se debe ejecutar el comando "npm run dev", luego, desde un navegador, se debe ingresar a la dirección http://localhost:3000.

## Pantallas y Endpoints

### Pantallas
Las rutas disponibles son:

 - **Inicio** - http://localhost:3000/
 Al realizar una búsqueda, los resultados se muestran en:
 - **Resultados de búsqueda** - http://localhost:3000/items?search=:query donde "query" representa a la búsqueda realizada.
 Desde la pantalla de los resultados de una búsqueda, al hacer click en un producto, se puede acceder al detalle del mismo en la ruta:
 - **Detalle de un producto** - http://localhost:3000/items/:id donde "id" representa al id del producto seleccionado.

### Endpoints

 - **GET SEARCH RESULTS** - http://localhost:3001/api/items?q=:query&limit=:limit
 Endpoint consumido al realizar una búsqueda, el parámetro "query" es la búsqueda ingresada y se agregó a lo solicitado por la consigna un parámetro llamado "limit", que determina la cantidad de items que devuelve una búsqueda y no limitarlo a sólo 4.
- **GET ITEM BY ID** - http://localhost:3001/api/items/:id 
Endpoint que devuelve el detalle de un producto, haciendo uso del parámetro "id".

## Reportes
Se incluyen en el repositorio resultados de reportes (en formato PDF) realizados por medio de Lighthouse, la herramienta incluída en el navegador Google Chrome, donde se analizaron métricas como:

 - Rendimiento
 - Accesibilidad
 - SEO

Todas las pantallas cuentan con un diseño responsive desarrollado utilizando el sistema de grillas que provee Bootstrap.
