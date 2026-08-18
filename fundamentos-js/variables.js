/** 
 * En javascript hay 3 formas de declarar variables.
 * !Esta forma ya no se recomienda usar: var
 * 
 * Al proceso de crear una variable y darle un valor se le llama asignación.
 * 
 * A las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * ? let nombreVariable = valor;
 * 
 * * el operador " = " se conoce como operador de asignación.
 * 
 * Una vez creada una variable podemos usarla en otros lugares del código, utilizando su nombre; las variables al ser utilizadas no van entre comillas " "
 * 
 * Las variables que no pueden ser reasignadas, es decir, su valor no cambia (constantes), se declaran:
 * ? const nombreVariable = valor;
*/

let nombre = "Mireya"; //Tipo String
console.log(nombre);

const fechaNacimiento = 1999; //Tipo numerico
console.log(fechaNacimiento);

/* Reasignando una variable (cambiando el valor que tiene):
    cuando se reasigna una variable (una variable ya creada)
    !ya no es necesario poner let
*/

nombre = "José";
console.log(nombre);

/*
    reasignación de constante: causa error
    fechaNacimiento = 1997;
    ?Nota: para mover una linea o varias -> Alt + flechas
*/

//*Concatenación
console.log("Hola, soy " + nombre + " y nací en " + fechaNacimiento);

