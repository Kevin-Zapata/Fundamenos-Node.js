function hola(nombre,miCallback){ //Las funciones son elementos de primer nivel, puedo utilizarlos como quiera
    setTimeout(function(){
        console.log("Hola, "+ nombre)
        miCallback(nombre); 
    }, 1000);
}
function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla bla bla ')
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
setTimeout(function(){
    console.log('Adios ', nombre);
    otroCallback();
},1000);
}
function conversacion(nombre, veces, callBack){
    if (veces > 0){
    hablar(function(){
        conversacion(nombre, --veces, callBack);
    }) 
}else {
    adios(nombre, callBack);
}
}
console.log("Iniciando proceso...");
hola('Kevin', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});


// -- Aqui es una demostración de mal uso de los callbacks

// console.log("Iniciando proceso...");
// hola('kevin', function(nombre){  //Aqui al ser la funcion "hola" tiene dos parametros nombre y la funcion como tal, no importa si esta primero o ultimo el valor
//   hablar(function(){
//     hablar(function(){
        
//         adios(nombre, function() {
//             console.log("Terminando proceso...");
//            }); 
//     });
     
//   });  
// });
