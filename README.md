# Task Manager App

## Descripción
Task Manager App es una aplicación de gestión de tareas desarrollada con Electron. Permite a los usuarios crear, asignar y gestionar tareas de manera eficiente.

## Funcionalidades Clave
### Gestión de equipos y usuarios
- Diseña una interfaz para crear equipos y usuarios asociados. Usa formularios simples en HTML para capturar la información.

### Listas de tareas
- Crea un sistema para que los usuarios añadan tareas, seleccionen usuarios o equipos asignados, y definan alarmas.

### Estado de tareas
- Implementa botones o casillas de verificación para marcar tareas como "pendientes" o "finalizadas".

### Asignación de supervisores y valoración
- Agrega una opción para asignar un supervisor a cada tarea. Permite que los supervisores valoren las tareas con los tres niveles definidos: "necesita mejorar", "correcta", "bien".

### Generación de informes
- Usa una biblioteca como Chart.js para generar gráficos o tablas con las tareas completadas y sus valoraciones. Ofrece opciones de filtrado por día, semana, quincena, o mes.

## Instalación
1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd task-manager-app
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso
- Para iniciar la aplicación, ejecuta:
    ```sh
    npm start
    ```

- Para ejecutar las pruebas, usa:
    ```sh
    npm test
    ```

## Estructura del Proyecto
- `src/`: Contiene el código fuente de la aplicación.
  - `assets/`: Archivos estáticos como imágenes y fuentes.
  - `components/`: Componentes reutilizables de la interfaz.
  - `css/`: Archivos de estilos CSS.
  - `database/`: Archivos relacionados con la base de datos.
  - `js/`: Archivos JavaScript.
    - `main.js`: Archivo principal de la aplicación Electron.
    - `renderer.js`: Archivo JavaScript para la renderización en el navegador.
    - `tasks.js`: Lógica de gestión de tareas.
  - `views/`: Archivos HTML.
    - `index.html`: Página principal de la aplicación.
    - `task-list.html`: Página de lista de tareas.

- `test/`: Contiene las pruebas del proyecto.
  - `js/`: Pruebas JavaScript.
    - `tasks.test.js`: Pruebas para la lógica de gestión de tareas.

## Licencia
Este proyecto está licenciado bajo la Licencia ISC.