console.log ("Helou"); // node ejecuta en su evetnloop este mensaje, se eejcuta "node .\monohilo.js" colocando la carpeta donde esta el codigo que se quiere ejecutar

setInterval(function(){
    console.log("sigo activo")
}, 1000); // Aqui se coloca una setinterval es un argumento que ejecuta una funcion cada x tiempo, lo hace en miligesgundos 1000 son un segundo, el inconveniente 

let i = 0;
setInterval(function(){
    console.log(i);
    i++;
    if ( i === 5){
        var a = 3 + z
    }
}, 1000); // Aqui genera error, el problema con esto es al ser monohilo si no se tiene cuidado cunado se ejecute un error esto va aprar todo el proceso, tenemos que estar pendientes de todo lo que pasa, hay formas de evitar los errores y escucharlos pero luego se mira

console.log("Segunda instrucción") //aunque este codigo este en lo ultimo se ejecuta al mismo tiempo con el resto del codigo por ello el node es asincrono no necesita ir uno por uno, se ejecut todas las instrucciones

