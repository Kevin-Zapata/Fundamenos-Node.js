const http = require('http');
http.createServer(router) .listen(3000); //Instanciamos la funcion y la metemos dentro de la creacion del router
function router(req, res){
    console.log('nueva peticion'); //Aqui nos mandan este mensaje al servidor 
    console.log(req.url);
    switch (req.url){ //Generamos una condicional en donde si el usuario esta ubicado en la url /hola arroja mensaje de lo contrario error 404
        case '/hola': 
            res.write('Hola, que tal');
            res.end();
            break
        default:
        res.write('Error 404: No se lo que quieres');
        res.end();    
    }
    // res.writeHead(201,{ 'Content-Type': 'text/plain' }) - Aqui generamos un codigo de error en el header, solo aparece en el inspencionar
    // res.write('Hola, ya se usar http de NodeJS')
    
    
    // res.end();
}
console.log("Escuchando http en el puerto 3000")