# Psious Video Editor

## Instalacion

Instalacion de dependencias: 

```sh
yarn
```

Entorno de desarrollo y previsualizar:

```sh
yarn start
```

## Desarrollo

En un principio el proyecto comenzo siendo en React/TS y basado en hooks.
Esto ha sido un grave error, ya que se necesita que en este caso los componentes sean Clases y no funciones para que tengan una instancia por cada componente generado. A su vez para evitar usar codigo vanilla, intente usar varias librerias de drag and drops y resizes lo cual sumado a TS incremento mucho la complejidad del proyecto.

Finalmente tras 2 reinicios al proyecto decide desarrollar toda la funcionalidad de drags y drops mediante JS plano/Vanilla, junto con [React-rnd](https://github.com/bokuweb/react-rnd) que me facilitaba la funcionalidad para los movimientos horizontales y el resize de los elementos.

Mockup componentes
![image](https://user-images.githubusercontent.com/25077237/114353750-ae1feb00-9b6d-11eb-865a-fd5a592b2c55.png)


El proyecto actual consta de ayuda de las siguientes dependencias: 
- [React-rnd](https://github.com/bokuweb/react-rnd)
- [Material UI](https://material-ui.com/)
- [SASS](https://www.npmjs.com/package/node-sass)
