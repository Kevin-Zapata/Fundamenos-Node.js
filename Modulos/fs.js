const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => { 
        //leido
        cb(data.toString()); //Transformamos el archivo en string ya que sino carga como buffer y no se puede leer, aqui lo guardamos en una funcion que abajo sera llamada para mostrar lo que esta dentro el archivo
    })
}
function escribir (ruta, contenido, cb){ // Esta funcion consta de 3 partes en donde ponemos la ruta, el contenido y el callback, las dos primeras las obtenemos de abajo
    fs.writeFile(ruta, contenido, function(err){ //aqui creamos una funcion donde encerramos al err para ponerlo en un if para saber si se ejecuta la funcion
        if(err){
            console.error('No he podido escribirlo' , err)
        }else {
            console.log('se ha escrito correctamente')
        }
    });
}
function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}
borrar(__dirname + '/archivo1.txt', console.log); // Elimina un archivo, aqui muestra null ya que no se genero ningun mensaje
leer(__dirname + '/archivo.txt', console.log) // TENER CUIDADO AQUI, PONER LA RUTA CORTA YA QUE GENERA ERRO PORQUE NO LO ENCUENTRA, aqui llamamos la funcion en la primera ponemos la ruta del archivo a mostrar, y en la segunda un console.log trayendo la información de arriba para mostrar en console.log
escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log) // Aqui llammos la funcionción la primera parte ponemos la ruta del archivo, luego escribimos su contenidoy por ultimo ponemos un console.log para que nos indique si el proceso fue realizado.