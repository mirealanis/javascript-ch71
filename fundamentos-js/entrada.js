/**
 * Prompt:
 * 1. Hay que asignar su uso a una variable para luego usar el valor que se ingreso. Ese valor se debe usar inmediatamente.
 *  !importante
 *  1. no se recomienda su uso en aplicaciones en producción
 *  2. Bloquea el código, es decir, lo que se escriba despues de prompt no se ejecutará hasta que el usuario ingrese un valor.
 *  3. No se puede personalizar.
 *  4. Todo lo que ingresa a prompt es un String
 * 
 * Nota:
 * ? \n es un caracter deescape que inserta un salto de linea 
 */

/**
 const edad = prompt("Ingresa tu edad", 20);
 console.log(edad);
 const nombre = prompt("Escribe tu nombre", "Fulano");
 console.log(nombre);
 console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
 * Alert -> Metodo para mostrar información
    alert("Hola, soy " + nombre + " y tengo " + edad + " años.");
 */

const seriePeliFav = prompt("¿Cuál es tu serie/pelicula favorita?", "Coraline y la puerta secreta");
const personaje = prompt("De la serie/pelicula \n¿Puedes nombrar un personaje?", "Wybie");
const razon = prompt("¿Por qué te gusta esa serie/pelicula?", "el soundtrack");
console.log("Me gusta mucho " + seriePeliFav + " donde sale " + personaje + ". \nY es mi favorito por " + razon);
