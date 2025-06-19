# Bazar app
Pequeño proyecto backend para mi portafolio. Cuenta con un frontend para pruebas.

### Origen
Este proyecto lo cree para terminar de afianzar mis conocimientos en Spring ademas de aprender a realizar testing unitario y de integración. Cuenta con un pequeño frontend para testear la app de forma mas interactiva.

### Tecnologias :
Para el backend:
* Java
* Spring
* MySQL
* Docker

Para el frontend:
* HTML
* CSS
* JavaScript

Para testing:
* JUnit
* Mockito
* h2 database

### Funciones principales
* Crud clientes
* Crud productos
* Crud ventas
* Filtro de productos con bajo stock
* Filtro de ventas por fecha
* Filtro de mayor venta por cliente
* Validaciones en todos los campos

### Testing
* Posee testing unitario en todas las capas de servicio
* Posee testing de integración para todas las capas de servicio y endpoints

## Instalacion y pruebas

### Instalacion usando docker
1. Crea un nuevo archivo de texto llamado docker-compose.yml
2. Pega el siguiente codigo:

``` yml
version: '3.9'
services:
    bazarfrontend:
        image: gbdev001/bazarfrontend
        ports:
            - "5500:80"
        depends_on:
            - bazarbackend
    bazarbackend:
        image: gbdev001/bazarbackend
        container_name: bazarback
        ports:
            - "8080:8080"
        environment:
            - DB_URL=jdbc:mysql://bazarDB:3306/bazarDB
            - DB_USER=root
            - DB_PASSWORD=1234
        depends_on:
            bazarDB:
                condition: service_healthy
    bazarDB:
        image: mysql:9.2.0
        container_name: bazardb
        ports:
            - "3305:3306"
        environment:
            - MYSQL_ROOT_PASSWORD=1234
            - MYSQL_ROOT_USER=root
            - MYSQL_DATABASE=bazarDB
        healthcheck:
            test: ["CMD", "mysqladmin","ping","-h","localhost"]
            timeout: 10s
            retries: 10
```
3. En el mismo directorio donde creo el .yml, Abra una nueva terminal y ejecute:

``` bash
    docker compose up
```

4. Espere a que el proyecto se despliegue totalmente, esto puede tardar unos minutos. en la consola se vera una linea similar a:

``` bash
Started BazarApplication in 11.955 seconds (process running for 15.246)
```
5. Una vez vea la linea o hayan pasado aproximadamente un minuto, ya puede dirigirse al frontend del proyecto, este se aloja en:
`http://localhost:5500`

## Tests
Como dije antes, la app cuenta con tests de integracion y tests unitarios, para probarlos es necesario clonar el proyecto:

### Aclaracion
Es necesario tener instalado y configurado maven para ejecutar los tests correctamente

1. Clonar el proyecto:
``` bash
https://github.com/GabrielOsOj/bazarBackend.git
```
2. Dentro del directorio creado, iniciamos un nuevo terminal y ejecutamos:
```bash
 mvn test
```
3. Al finalizar los tests, veras un mensaje como este:
![alt text](image.png)

## Detalles adicionales
- En esta app aplique estructura de capas junto con distintos DTOs para manejar los datos entrantes y salientes de mi base de datos.
- En un futuro tengo pensado implementar autenticacion mediante JWT.
- Tiene una estrucura escalable que en un futuro podría ser implementada en un contenedor de microservicios.