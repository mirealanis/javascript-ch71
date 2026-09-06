/**
 * Loops
 * Son estructuras de control
 * Permiten repetir n cantidad de veces un bloque de codigo {}
 * 
 * ?Tenemos 3 grandes loops
 * *while
 * *Do while
 * *For
 */

/**
 * While
 * Es el loop que se ejecuta mientras una condición sea verdadea
 * En cuanto esta condicion se vulve falsa se detiene
 * !importante
 * !Necesita un contador externo o una forma de parar
 * !No olvidar actualizar el contador
 * !Se puede generar un buble infinito 
 */

/** 
//1. conntador
let counter = 0;

//2. Iniciamos el bucle
while (counter <= 100) {
    console.log(counter);
    counter = counter + 1;
}
*/

/**
 * el operador modulo %
 * regresa el residuo de una división
 * ejemplo
 * 5 % 2 = 1
 * 6 & 2 = 0 
 */
let contador = 1;

while (contador < 100) {
    if (contador % 2 == 0) {
        console.log(`el numero ${contador} es par`);
    } else {
        console.log(`el numero ${contador} es impar`);
    }
    //operador de incremento suma 1 a el valor de la variable
    contador ++;
}
