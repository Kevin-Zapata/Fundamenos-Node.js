function hola(nombre){ 
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            console.log("Hola, "+ nombre)
            resolve(nombre); 
        }, 1000);
    })
    
}
function hablar(nombre){
    return new Promise( function (resolve,reject){
        setTimeout(function(){
            console.log('bla bla bla bla bla ');
            resolve(nombre);
        }, 1000);
    })
    
}

function adios(nombre){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            console.log('Adios ', nombre);
            resolve();
        },1000);
    })

}

//--
console.log('Iniciando el proceso...');
hola("Carlos")
    .then(hablar)
    .then(adios)
    .then((nombre )=>{
        console.log('Terminado el proceso... ') //La diferencia entre promesas y callback es que las podemos ir anidando 
    })
    .catch(error =>{
        console.error('Ha habido un error')
        console.error(error)    //Siempre que coloquemos un .then colocamos un catch para capturar esos errores que se nos generan
    })