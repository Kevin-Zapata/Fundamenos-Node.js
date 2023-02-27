function aSincrona(callback){
    setTimeout(function(){
        try {
            let a = 3 + parseZone;
            callback(null, a)
        }catch(e){
            callback(e);
        }
    }, 1000);
}

    aSincrona(function(err, dato){
        if(err){
            // console.error("Tenemos un error");
            // console.error(err);
            // return false
            //throw err; //NO VA FUNCIONA
        }
        console.log('Todo ha ido bien, mi dato es ', dato)
    })

 
