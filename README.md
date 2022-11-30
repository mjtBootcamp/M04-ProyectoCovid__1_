<br />
<div align="center">

  <h2 align="center">Proyecto Grupal</h2>
  <hr>
  <h3 align="center">Consumo de API JWT</h3>

  <p align="center">
    MODULO 04 DESARROLLO DE APLICACIONES WEB FRONTEND
    <hr/>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Para comenzar</a>
      <ul>
        <li><a href="#prerequisites">prerrequisitos</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Participantes</a></li>
    <li><a href="#license">Licencia</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

Poroyecto requerido en BootCamp JS FullStack. Desarrollado Off Line

Requerimientos:
### Hito 1
1. Crear una estructura básica con HTML para el proyecto que incluya:
    * a. Un Menú de navegación con las opciones: Home y USA
    * b. Una sección donde se muestre el gráfico de barras
    * c. CDN de un framework de CSS como Bootstrap o similar
    * d. CDN de jQuery. (1 Punto)
    * e. CDN de alguna librería de gráficas cómo Chart Js o Canvas Js
2. Consumir con fetch o jQuery la API local para obtener los datos de todos los países usando el siguiente endpoint. (2 Puntos) http://localhost:3000/api/total
    Este endpoint te entregará un JSON con:
    * Nombre del país
    * Casos activos
    * Casos confirmados
    * Fallecidos
    * Recuperados
3. Desplegar la información de la API en un gráfico de barra que debe mostrar sólo los 10 países con más casos activos. (3 Puntos)
4. Desplegar debajo del gráfico de barras una tabla con la información de todos los países ordenados alfabéticamente por el nombre del país. (2 Puntos)
5. En cada fila de la tabla se debe incluir un botón “Ver detalles” que abra una ventana Modal muestre los datos del país en un gráfico circular. (2 Puntos)
### Hito 2
1. Crear un nuevo HTML que tenga:
    * a. La misma barra de navegación del hito anterior
    * b. Un formulario que reciba el email y password de un usuario
    * c. Una sección para renderizar la gráfica (1 Punto)
2. Enviar los datos del usuario al servidor para obtener un token JWT. (2 Puntos)
3. Usar el token obtenido para hacer otra consulta al servidor y obtener el historial de datos de Estados Unidos (3 Puntos)
4. Renderizar una gráfica de líneas con los datos del historial usando una librería de gráficas cómo Chart Js o Canvas Js.
5. Persistir el JWT en LocalStorage y utilizarlo al recargar la página para obtener el historial y renderizar la gráfica (Opcional)
6. Agregar un botón “Cerrar sesión” en el Menú de navegación al realizar el login exitosamente. Al presionar este botón se deberá eliminar el JWT de LocalStorage y recargar la página (Opcional)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Construido con

* ExpressJS
* JSonWeb Token
* CanvasJS
* Bootstrap
* Fontawesome
* JQuery 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Para comenzar

El proyecto está desarrollado para el ambiente local. Se recomienda considerar los prerequisitos y seguir las instrucciones indicadas

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Clone the repo
   ```sh
   git clone https://github.com/mjtBootcamp/M04-ProyectoCovid__1_.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Ejecutar `index.js` en la terminal apuntando a la carpeta contenedora
   ```js
   node index.js
   ```
4. Abrir el explorador en http://localhost:3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Definición de tareas
- [x] Asignación de tareas
- [x] Reasignación de tareas
- [x] Construcción de la solución con codigos entregados
- [x] Revisión
- [x] Entrega 
- [x] Presentación
    - [x] Desarrollo de la presentación
    - [x] Exposición

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Participantes

* Angel 
* Denisse Belmar
* Felipe Gacitúa
* Francisca 
* Luis Castillo 
* María José Tolmo

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## Licencia

Distributed under the MIT License. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

<h3>Angel</h3> 

<hr>
<h3>Denisse Belmar</h3>

<hr>
<h3>Felipe Gacitúa</h3>

<hr>
<h3>Francisca </h3>

<hr>
<h3>Luis Castillo </h3>

<hr>
<h3> María José Tolmo </h3>

[linkedin.com/in/mariajosetolmo](https://www.linkedin.com/in/mariajosetolmo)
mariajosetolmo@gmail.com
[github.com/mariajosetolmo](https://github.com/mariajosetolmo)
<hr>
<p align="right">(<a href="#readme-top">back to top</a>)</p>




