let suma =0;
console.time('bucle')
for(let i= 0; i < 100000000; i++){
    suma +=1;
}
console.timeEnd('bucle')

let suma2 =0;
console.time('bucle2')
for(let j= 0; j < 100000000; j++){
    suma +=1;
}
console.timeEnd('bucle2')

console.time('Asincrono')
aSincrona()
    .then(()=>{
        console.timeEnd('Asincrono');
    })
function aSincrona(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            console.log('Termina el proceso asincrono'),
            resolve();
        })
    } )
}