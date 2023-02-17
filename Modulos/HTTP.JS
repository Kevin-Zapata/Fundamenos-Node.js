const http = require('http');
http.createServer(function(req, res){
    console.log('nueva peticion');
    console.log(req.url);

    res.end();
})
