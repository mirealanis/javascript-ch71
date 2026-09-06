/**
 * For loop
 * Es una estructura de control repetitiva
 * El bloque de codigo dentro de ella se va a repetir n veces
 * ?El buvle for cuenta con 3 partes dentro de los parentesis
 * *1. Una variable contador
 * *2. La condición, mientras sea verdadera, el bucle se ejecutará
 * *3. Incremento del contador 
 * 
 * Nota: se usa mucho para recorrer arrays
 * Metodo para saber el tamaño de un array: nombreArray.length
 */

const numeros = [
    12, 45, 7, 89, 23, 56, 34, 78, 91, 10,
    67, 32, 4, 76, 54, 21, 98, 43, 65, 11,
    87, 29, 50, 73, 16, 94, 38, 61, 8, 82,
    27, 69, 14, 95, 41, 58, 3, 77, 36, 84,
    19, 63, 47, 90, 25, 71, 6, 53, 80, 31,
    99, 42, 17, 68, 35, 86, 22, 74, 9, 57,
    93, 40, 15, 62, 28, 81, 5, 70, 48, 96,
    24, 59, 33, 88, 13, 66, 44, 79, 2, 55,
    97, 30, 18, 72, 46, 85, 20, 64, 39, 92,
    1, 52, 26, 75, 49, 83, 37, 60, 51, 100
];

/**
 * 
console.log("======mostrar indices y elementos");
for(let i = 0; i < numeros.length; i++){
    console.log(`El numero en la posición ${i} es ${numeros[i]}`);
}

console.log("======Sumar elementos");
let total = 0;
for (let c = 0; c < numeros.length; c++) {
    //sintaxis tradicional
    total = total + numeros[c];
    console.log(`El valor actual del acumulado es ${total}`);
    //sintaxis abreviada: total += numeros[c];
}
console.log(`La summa de los 100 elementos del array es ${total}`);
 * 
 */

/**
 * 1. Usar un for para recorrer el array de numeros
 * 2. En cada iteración mostrar en consola si el numero es par o impar.
 */

let par = 0;
let impar = 0;

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0) {
        console.log(`El numero ${numeros[i]} es par`);
        par ++;
    } else {
        console.log(`El numero ${numeros[i]} es impar`);
        impar++;
    }
} 
console.log(`El total de numeros pares es ${par}`);
console.log(`El total de numeros impares es ${impar}`);

