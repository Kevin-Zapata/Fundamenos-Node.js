async function hola(nombre){  //Si tenemos funciones que son promesas solo debemos poner asyn atras de la function para convertirlo
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            console.log("Hola, "+ nombre)
            resolve(nombre); 
        }, 1000);
    })
    
}
async function hablar(nombre){
    return new Promise( function (resolve,reject){
        setTimeout(function(){
            console.log('bla bla bla bla bla ');
            resolve(nombre);
        }, 1000);
    })
    
}

async function adios(nombre){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            console.log('Adios ', nombre);
            resolve();
        },1000);
    })

}
//aca abajo el await funciona asi
async function main(){
    let nombre = await hola('Kevin'); // Los await deben estar dentro de funciones
    await hablar();
    await hablar();             //El await convierte las promesas aqui en procesos sincronos, queremos que una funcion se realice en segundo plano, le quitamos el await, lo que quede por fuera seran procesos asincronos
    await adios(nombre);
}
main();
