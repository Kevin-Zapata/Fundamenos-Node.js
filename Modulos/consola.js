var tabla = [
{
    a:1,
    b:'z'
},
{
    a:2,
    b:'Otra'
}
]
console.table(tabla);

console.log('Conversación')
console.group('conver')
console.log('Hola')
console.log('blablbaka')
console.log('adios')
console.groupEnd('conver')

function funcion1 (){
 console.group("funcion 1");
 console.log('esto es de la funcion 1');
 console.log('esto tambien');
 funcion2();
 console.groupEnd("funcion 1");
}
function funcion2 (){
    console.group("funcion 2");
    console.log('Ahora estamos en la funcion 2');
    
   
    console.groupEnd("funcion 2");
}
funcion1();

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')