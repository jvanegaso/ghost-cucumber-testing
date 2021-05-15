const { createFolder, createTempTestFile } = require('./util');

const reportsPath = 'reports';

(async () => { 
  try {
    const currentTime = Date.now();
    await createFolder(reportsPath);
    console.info('REPORTS FOLDER WAS CREATED');
    await createFolder(`${reportsPath}/${currentTime}`);
    console.info('TEST FOLDER WAS CREATED');
    await createTempTestFile(currentTime);
    console.info('TEMP FILE WAS CREATED');
  } catch (err) {
    console.error(`An error occurred: ${err}`);
  }
})();









// Crear un archivo para tomar el test activo (current_test.txt)
// Crear una carpeta reports
// Crear carpeta con Date.now()
// Modificar archivo de current_test para guardar el nombre de la carpeta que se debe usar
// 

// Eliminar el archivo para tomar el test activo (current_test.txt)