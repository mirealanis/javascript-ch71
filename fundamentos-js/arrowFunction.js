/**
 * *Funciones flecha (arrow function)
 * !Return implicito
 * Es decir, si la función se puede escribir en una sola línea
 *  sin necesidad de llaves, no es necesario poner la palabra return.
 * La expresion a la que apunte la flecha sera retornada. 
 * 
 * Expresiones lambda
 */

const sumarDosNumeros = (a, b) => a + b;
let result = sumarDosNumeros(4, 5);
console.log(`El resultado de sumar 4 + 5 es ${result}`);

const evenOrOdd = (limit) => {
    let total = 0;
    for (let i = 0; i < limit; i++) {
        if (i % 2 == 0) {
            console.log("Es par");
        } else {
            console.log("Es impar");
        }
        total += i;
    }
    return total;
};
console.log(evenOrOdd(50));
