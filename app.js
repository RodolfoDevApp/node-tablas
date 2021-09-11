const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

// console.log(argv);

// console.log('base: yargs',argv.b);

crearArchivo(argv.b,argv.l,argv.h)
            .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
            .catch(console.log);

// console.log(process.argv);

// const base=5;

// const[,,arg3 = 'base=5' ] = process.argv;
// const[, base = 5] = arg3.split('=');


// console.log(base);
