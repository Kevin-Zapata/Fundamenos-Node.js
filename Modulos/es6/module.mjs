function saludar(){
    console.log('hola mundo')
}

//export default saludar;
export default { //Se crea como un objecto
    saludar,
    prop1: "soy un modulo"
}