'use strict'

/*
El usuario va introduciendo números por pantalla hasta que introduzca un número negativo,
en ese caso se mostrará el resultado: Mostrar la media y la suma de los números positivos introducidos.
Utilizar un bucle.
*/

/* 
let numberToCalculate = parseInt(prompt('Introduce un numero'));
let numberToCalculate2 = parseInt(prompt('Introduce un numero'));
let numberToCalculate3 = parseInt(prompt('Introduce un numero'));
let numberToCalculate4 = parseInt(prompt('Introduce un numero'));

for(let i; i = 0; i++) {

} */

/* let number;

do {
    number = parseInt(prompt('Introduce un numero'));
} while (number > 0);

 */

let number = 0;

while ( number > 0) {
    number =+ parseInt(prompt('Introduce un numero'));
    document.write(number + "<br>");
};