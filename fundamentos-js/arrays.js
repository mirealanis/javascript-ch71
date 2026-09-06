/**
 * Estructuras de datos
 * Qué son? y por qué son importantes?
 * 
 * Son estructuras que nos ayudan a agrupar y/o ordernar datos.
 * Para manipular estos datos de manera más eficiente.
 * Los datos no representan nada por si solos
 * Pero datos juntos y dandoles contexto se vuelven información
 * 
 * *Array
 * Es una estructura de datos ordenada
 * !importante
 * Los datos se identidican por un indice, el indice empieza a contar desde 0. 
 * El tamaño real se cuenta desde el 1.
 * 
 * !importante pero particular de JS
 * Se puede guardar cualquier tipo de dato dentro del array, incluso combinaciones.
 * Tienen tamaño dinámico
 */

//definicion de un array
const arrayVacio = [];
const arrayContenido = ["Alberto", 20, true];

/**
 * *Obtención de un elemento guardado en un array
 * Notación corchete
 */

console.log(arrayContenido[1]);
console.log(arrayContenido[0]);

/**
 * *Ingresar datos al array
 * Metodos:
 * 1. unshift -> para ingresr elementos al comienzo del array
 * 2. push -> para ingresar elementos al final del array
 */
console.log("====Ingresar datos")
console.log("Array antes de unshift");
console.log(arrayContenido);
arrayContenido.unshift("José")
console.log("Array despues de unshift");
console.log(arrayContenido);

console.log("Array antes de push");
console.log(arrayContenido);
arrayContenido.push(false, 0,"Hola")
console.log("Array despues de push");
console.log(arrayContenido);

/**
 * *Eliminar datos
 * 1.shift elimina y devuelve el elemento en la posición 0
 * 2. pop elimina y devuelve el ultimo elemento del array
 * 
 * ?Nota:
 *Lo que va dentro de los parentesis de un metodo o función se conoce como argumento
 */
console.log("====Eliminar datos");
console.log("Array antes de shift");
console.log(arrayContenido);
//arrayContenido.shift();
//otra forma es:
console.log(`elemento eliminado ${arrayContenido.shift()}`);
console.log("Array despues de shift");
console.log(arrayContenido);

console.log("Array antes de pop");
console.log(arrayContenido);
//arrayContenido.pop();
console.log(`elemento eliminado ${arrayContenido.pop()}`);
console.log("Array despues de pop");
console.log(arrayContenido);

/**
 * Reasignar el valor de un indice
 */
console.log("====Reasignar")
arrayContenido[0] = "Jose";
arrayContenido[1] = "Mireya"
arrayContenido[2] = true;
console.log(`resultado de reasignación ${arrayContenido}`);

/**
 * *Splice
 * Elimina o agrea elementos
 */
console.log("====Splice - Eliminar");
console.log("array antes");
console.log(arrayContenido);
arrayContenido.splice(2, 3);
console.log("array despues");
console.log(arrayContenido);
