const bcrypt = require('bcrypt');

const pasword = '1234Segura';

bcrypt.hash(pasword, 5, function(err, hash){ 
    console.log(hash);
    bcrypt.compare(pasword, hash, function(err, res){ //Comprueba si la password puede generar ese hash(el codigo cifrado)
        //console.log(err)
        console.log(res)
    })
});