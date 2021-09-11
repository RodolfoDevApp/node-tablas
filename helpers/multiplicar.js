const fs = require('fs');
require('colors');

const crearArchivo = async(base = 5,l,h) =>{
    
    try {
    
    let salida = '', consola = 'd ';

    consola += '==========================\n'.green;
    consola += `        Tabla del ${base}\n`.red;
    consola += '==========================\n'.green;
    
    salida += '==========================\n';
    salida += `        Tabla del ${base}\n`;
    salida += '==========================\n';
    

    for (let index = 1; index <= h; index++) {
        consola += `${base} ${'X'.blue} ${index} ${'='.yellow} ${base*index}\n`;        
        salida += `${base} ${'X'} ${index} ${'='} ${base*index}\n`;        
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    if (l) {
        console.log(consola);
    }

    return `tabla-${base}.txt creado`;
    
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}