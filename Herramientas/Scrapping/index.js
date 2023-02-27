const puppeteer = require('puppeteer');

(async() =>{ //lo que esta despues del parentesis  es una funcion asyncrona, se coloca dentro de un parentesis para convertirla en expresion
    console.log ('Lanzamos navegador');
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js'); 
    var titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });
    console.log(titulo1);
    console.log('Cerramos navegador');
    browser.close();
    console.log('Navegador cerrado' );

})();//Aqui colocamos doble parentesis para que se ejecute