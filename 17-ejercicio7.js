/*
Tabla de multiplicar de un número introducido por pantalla
*/

let number = parseInt(prompt('Numero', 0));

for(let i = 0; i <= 10; i++) {
    document.write(`${number} x ${i} = ${number * i} <br/>`);
};