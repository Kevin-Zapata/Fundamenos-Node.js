//const p = require('process');     
process.on('beforeExit',() =>{
    console.log('El proceso va terminar');
})
process.on('exit',() =>{
    console.log('El proceso acabo');
    setTimeout(()=>{
        console.log('Esto no se va a ver nunca') // No se va haber porque el exit desconecta el eventloop
    },0)
})

process.on('uncaughtException', (err, origen)=>{
    console.error('VVaya se nos ha ovlidado capturar un error')
    console.error(err);
})
//funcionquenoexiste();
