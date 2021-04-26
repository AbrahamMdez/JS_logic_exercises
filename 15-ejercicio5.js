'use strict'

/*
Mostrar en el navegador todos los números divisores de un número introducido en un prompt.
*/

let number = parseInt(prompt('Numero', 0));

for(let i = 1; i <= number; i++) {

    if(98 % i == 0) {
        document.write(`<h1> El numero es divisible por ${i} <h1>`);
    };
};