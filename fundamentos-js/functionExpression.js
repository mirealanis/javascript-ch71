//function expression
/**
 const getTriangleArea = function(base, heigth) {
     return(base * heigth) / 2;
 };
 
 let area = getTriangleArea(20,24);
 console.log(`El área de un triangulo de base 20 y altura 24 es ${area}`);
 * 
 */
//Ejercicio
 const serieNumeros = function(num) {
    console.log(`=== La serie comienza en 1 ===
        y termina en ${num}`);

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(`${i} es par`);
        } else {
            console.log(`   ${i} es impar`);
        }
    }
 };

 let numero = Number(prompt("Ingrese el numero donde termina tu serie"));

serieNumeros(numero);