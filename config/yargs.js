const { number } = require('yargs');

const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type: 'number',
                        demandOption:true,
                        describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias:'lista',
                        type:'boolean',
                        default:false,
                        describe:'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type:'number',
                        default:10,
                        describe:'limite de la tabla de multiplicar'
                    })
                    .check((argv, options)=>{
                         if (isNaN(argv.b)) {
                             throw 'La base tiene que ser un numero'
                         }
                         if (isNaN(argv.h)) {
                             throw 'El hasta tiene que ser un numero'
                         }
                         return true;
                    })
                    .argv;

module.exports = argv;