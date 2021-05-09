# ghost-cucumber-testing

## Pasos para configurar la aplicación

Modificar el archivo config.js que se encuentra en la raíz del proyecto. 

module.exports = {
  ghostBaseUrl: 'http://localhost:2368/ghost/', // URL donde se ejecuta ghost
  usuario: 'sebastian44van@gmail.com', // Usuario previamente registrado en el sistema
  clave: 'LtWmSuuj9MhPTUW',  // Clave actual del usuario registrado en ghost
  nuevaClave: 'LtWmSuuj9MhPTU1'  // Clave que se usará para pruebas de modificación. Las pruebas intentan reiniciar a la contraseña a la propiedad clave.
};

## Pasos para ejecutar:

- Instalar dependencias con npm install
- ejecutar utilizando el comando npx wdio run .\wdio.conf.js