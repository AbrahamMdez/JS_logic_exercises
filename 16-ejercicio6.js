'use strict'

/*
Se le pide a un usuario por pantalla (prompt) un número y el programa nos tiene que mostrar si es par o impar.
Si el número introducido no es válido nos pide de nuevo el número.

*/

let number = parseInt(prompt('Numero', 0));

while(isNaN(number)) {
    number = parseInt(prompt('Introduzca un numero', 0));
};

if(number % 2 == 0) {
    document.write(`<h1>El numero es par ${number}</h1>`);
} else {
    document.write(`<h1>El numero es impar ${number}</h1>`);
};