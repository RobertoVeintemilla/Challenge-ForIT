# Challenge-ForIT : Aplicación de Lista de Tareas
Creación de una aplicación básica para listar tarea para el challenge de ingreso a Academia ForIT 2025. La aplicación consta de un backend en Node.js con Express y un frontend en React con Vite, estilizado con Sass.


## Características

* **Backend (Node.js/Express):**
    * API RESTful para gestionar tareas.
    * Almacenamiento de tareas en un array en memoria (datos no persistentes).
    * Endpoints para:
        * `GET /api/tasks`: Obtener todas las tareas.
        * `POST /api/tasks`: Crear una nueva tarea.
        * `PUT /api/tasks/:id`: Actualizar una tarea existente.
        * `DELETE /api/tasks/:id`: Eliminar una tarea.
* **Frontend (React/Vite):**
    * Interfaz de usuario para visualizar, añadir, editar y eliminar tareas.
    * Componentes funcionales con Hooks para el manejo de estado.
    * Estilizado utilizando Sass.
    * Manejo de rutas con React Router DOM.

## Cómo Ejecutar la Aplicación Localmente

Sigue estos pasos para poner la aplicación en marcha en tu máquina local.

### Prerequisitos

Asegúrate de tener instalado lo siguiente:

* Node.js (versión 18 o superior recomendada)
* npm (viene con Node.js)
* Git

### 1. Clonar el Repositorio

```bash
git clone [https://github.com/robertoeintemilla/challenge-forit](https://github.com/robertoveintemilla/challenge-forit)
cd challenge-forit
````

### 2.Configurar y Ejecutar e Backend

```bash
cd backend
npm install
````
#### Crea un archio .env en la carpeta 'backend' con el siguiente contenido
PORT = 5000

#### Levantar el servidor
````
npm start
````
##### El servidor se iniciará en el puerto 'http://localhost:5000'

### 3.Configurar y Ejecutar el Frontend
#### Abre una nueva terminal y navega a la carpeta 'frontend':

````
cd ../frontend
npm install
````
#### Crea un archivo .env en la carpeta 'frontend con el siguiente contenido 
VITE_API_BASE_URL=http://localhost:5000/apo

#### Levantar el aplicación
````
npm run dev
````

#### La aplicación React se iniciará en 'http://localhost:5173'

##Ahora puedes abrir tu navegador y navegar a la URL del frontend para una la aplicación