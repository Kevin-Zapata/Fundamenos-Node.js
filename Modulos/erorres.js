function otraFuncion(){
    return serompe();
}
function serompe() {
    return 3 + z;
}
function seRompeAsincrona(cb) {
    setTimeout(function(){
        try {
        return 3 + z;
        } catch (err){
            console.error('Error en mi funcion asincrona'); //Cuando son asincronas debemos colocar el try cacth dentro de su misma funcion
            cb(err);
        }
    })
}
try {
    //otraFuncion();
    seRompeAsincrona(function(err){ //aqui la invocamos para que se ejecute y muestr el error.
        console.error(err.message)
    });
} catch(err){
    console.error(' Vaya algo ha fallado') // Con el try catch si saca error el node no deja de ejecutarse, en cambio se puede mostrar un mensaje con el problema en cuestion y no parar los procesos
    console.error(err.message) //Aqui muestra especificamente el error

}

console.log('esto de aqui esta al final')