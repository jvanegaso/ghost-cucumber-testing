# ghost-cucumber-testing

## Pasos para configurar la aplicación

Modificar el archivo config.js que se encuentra en la raíz del proyecto. 

```javascript
module.exports = {
  ghostBaseUrl3_3_0: 'http://localhost:2368/ghost/',
  ghostBaseUrl3_42_5: 'http://localhost:2369/ghost/',
  usuario: 'sebastian44van@gmail.com',
  clave: 'LtWmSuuj9MhPTUW',
  nuevaClave: 'LtWmSuuj9MhPTU1'
};
```

donde los objetos ghostBaseUrl3_3_0 y ghostBaseUrl3_42_5, tienen las URL de las instancias de Ghost en sus versiones 3.3.0 y 3.42.5

## Pasos para ejecutar:

- Borrar la carpeta node_modules
- Instalar dependencias con `npm install`
- ejecutar utilizando el comando `npm run test-vrt1`


## Repositorio de Cypress:

https://github.com/jvanegaso/ghost-cypress

### Nota: Por favor revisar este documento, donde se encuentran las funcionalidades a probar y los escenarios de prueba: https://github.com/jvanegaso/ghost-cypress/blob/main/README.md

