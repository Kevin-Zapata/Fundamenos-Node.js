const os = require('os');

console.log(os.arch()); //Muestra la arquitectura del equipo x64 o x32
console.log(os.platform()); //La plataforma en la que esta trabajando windows o mac
console.log(os.cpus().length); //muestra el procesador y sus nucleos
console.log(os.constants);//Errores que tiene el sistema
console.log(os.freemem()); //Muestra la memoria libre en estos momentos

const SIZE = 1024;
function kb(bytes) {return bytes / SIZE}
console.log(kb(os.freemem())); //Mutesra en KB que tienes libre
console.log(kb(os.totalmem())); // Muestra en Kb los que tienes ocpuados

console.log(os.homedir()); //Muestra cual es la carpeta raiz del usuario
console.log(os.tmpdir()); // Muestra la  carpeta temporal
console.log(os.hostname());