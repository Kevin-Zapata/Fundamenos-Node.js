function hola(nombre,miCallback){ //Las funciones son elementos de primer nivel, puedo utilizarlos como quiera
    setTimeout(function(){
        console.log("Hola, "+ nombre)
        miCallback(nombre); 
    }, 1000);
}
function adios (nombre, otroCallback){
setTimeout(function(){
    console.log('Adios ', nombre);
    otroCallback();
},1000);
}
console.log("Iniciando proceso...");
hola('kevin', function(nombre){  //Aqui al ser la funcion "hola" tiene dos parametros nombre y la funcion como tal, no importa si esta primero o ultimo el valor
    
   adios(nombre, function(){
    console.log("Terminando proceso...");
   });                     
    
});
