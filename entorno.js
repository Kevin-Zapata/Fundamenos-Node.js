let saludo = 'hola';
console.log(saludo); // muestra el valor

//Variables de entorno, 
let nombre = process.env.NOMBRE; //Aqui se accede a la variables de entorno el codigo es "env"
console.log('Hola '+ nombre); //Fuera del codigo o en la terminal debemos asignarle a NOMBRE un variable para que el lo guarde y lo muestre, en la terminal se debe colocar esto para poder asignar una variable al sistema $env:NOMBRE="Kevin"; el punto y coma al final es esencial

let nombre2 = process.env.NOMBRE || 'Sin nombre' //Aqui ponemos || para darle una condcional si la primera no se cumple entonces mostramos un mensaje de que no tiene nombre
let nombre3 = process.env.NOMBRE || 'Sin nombre'
let web = process.env.web || 'Sin web'
console.log('Hola '+ nombre3);
console.log('Hola '+ web); //Aqui agregamos otra variable de entorno para validar si tiene una web y mostrarlo


