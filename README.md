# Decameron Multivacaciones Vue

Un template de inicialización sencillo para el desarrollo en Vue, creado con la versión 3.0 de `vue-cli` y aplicando las siguientes opciones:

- **Features**:
    - Babel
    - Router
    - Vuex
    - Preprocesador de CSS
    - Linter
    - i18n
- **Preprocesador de CSS**: SCSS/SASS
- **Linter**: estándarJS
- **i18n**: i18next
- **Manejo de configuración**: Archivos dedicados

## Inicialización del template
El template no se distribuye con los módulos de node ni el archivo `package-lock.json` por lo que deben instalarse las dependencias usando Node. En el directorio de la aplicación ejecutar:

```shell
$ npm install
```

## Convenciones para el manejo de directorios
Se han establecido las siguientes convenciones para el manejo de directorios:

### /views
Contiene aquellas páginas de primer nivel invocadas directamente en el router

### /components
Contiene componentes que son reutilizados en las páginas y que tienen una responsabilidad específica.

### /i18n
Contiene archivos dedicados al manejo de internacionalización de la aplicación.

### /data
Contiene archivos con módulos específicos de acceso a datos, de modo que los componentes hagan siempre hagan uso de los métodos de los módulos y su comportamiento sea independiente de la fuente de datos. Este sería un buen lugar para almacenar los módulos de interacción con el api de datos.

### /store
Almacena módulos de Vuex instanciados en un Store principal. Este esquema de organización facilita el mantenimiento de los módulos del bus.

### /assets
Contiene los recursos de la aplicación tales como estilos e imágenes. Se sugiere seguir la siguiente convención para el manejo de directorios dentro de esta carpeta de recursos.

- **/scss** para almacenar archivos de hojas de estilo *.scss.
- **/img**: para almacenar archivos de imagen y vectores
- **/fonts**: para almacenar fuentes
- **/favicon**: almacenar los íconos de navegador

### /plugins
Contiene plugins de Vue creados empleando las recomendaciones de la documentación oficial. El desarrollo de validadores, filtros, y funcionalidades similares son un buen ejemplo de situaciones que pueden ameritar la escritura de un plugin.

## Ejecución de la aplicación

### Correr en modo de desarrollo
```shell
$ npm run serve
```

### Compilar y minificar para producción
```shell
$ npm run build
```

### Verifica y arregla archivos
```shell
$ npm run lint
```
