/**
 * ?Diferencia entre tipos de funciones
 * *Hoisting
 * Proceso por el cual las function declaration y las variables
 * escritas con "var", pasan a estar hasta arriba en el proceso de ejecución
 * *Function expression y arrow function no pasan por este proceso
 */

//function expression
const sumarDosNumeros = function(a, b){
    return a + b;
};

//arrow function
const restarDosNumeros = (a, b) => a - b;

//declaration function
function multiplicarDosNumeros(a, b) {
    return a * b;
}