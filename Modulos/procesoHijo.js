const {exec, spawn } = require('child_process'); //Esto ejecuta un proceso que tiene un proceso interno, osea el proceso principal trae un archivo que ejecuta un proceso de conteo en la consola. Un proceso que trae otro proceso

// exec('dir', (err, stdout, sterr)=>{ //Muestra las dirreciones de la carpeta en la que se encuentra
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout)
// })

// exec('node Modulos/consola.js', (err, stdout, sterr)=>{ // Ejecuta el consola JS qu esta en la carpeta modulos
//     if(err){
//         console.error(err);
//         return false;
//     }
//     console.log(stdout)
// })

// let proceso = spawn('ls', ['-la']) // El la va entre un array ya que si hay un espacio la sintaxis de la funcion requiere que vaya de ese modo aunque esto sirve es para mac
let proceso = spawn('cmd.exe', ['/c', 'dir']);

 console.log(proceso.pid);
 console.log(proceso.connected);
 proceso.stdout.on('data', function(dato){
    console.log('¿Esta muerto?');
    console.log(process.killed);
    console.log(dato.toString())
 })
 proceso.on('exit', function(){
    console.log('el proceso termino');
    console.log(proceso.killed);

 })
