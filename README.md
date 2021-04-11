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
Esto ha sido un grave error, ya que se necesita que en este caso los componentes sean Clases y no funciones para que tengan una instancia por cada componente generado.
Tambien dedice mucho tiempo a investigar librerias de drag an drop para react, cuando realmente ha sido mas facil hacerlo todo por eventos en JS plano/vanila.
En cierto punto del desarrollo me di cuenta que mi planteamiento no llegaba a nada y que estaba complicando mucho el proyecto. Lo comence de 0 en Javascript plano y funciones con clases y solo usando [React-rnd](https://github.com/bokuweb/react-rnd) para el resize y movimiento de los files en el editor.
