/**
 * Estructura de control condicional
 * *switch 
 * Estrucutra de conteol condicional.
 * A diferencia de If no se basa en valores de verdad o de falso, sino que se basa en opciones.
 * ? Nos permite tener multiples opciones y con base en la opción seleccionada ejecuta un bloque de código. Tiene una respuesta default, por si la opción ingresada no esta en la lista.
 * 
 * ?Se divide en casos, cada caso lleva su bloque de codigo y debe llevar al finalizar la palabra break 
 * 
 * todo NOTA:
 * *Expresiones (expression): es todo aquello (operación) que genera o retorna un valor.
 * ?Ejemplo: una suma, una variable, usar una funcion, texto, numero.
 * 
 * *Declaraciones (statement): no genera valor y por lo general son estructuras de control o bucles.
 * ?Ejemplos: if, switch, for, while
 */

/**
 * let mes = prompt("Escribe el mes que te gustaría ver");
switch(mes){
    case "Enero":
        alert("El mes de Enero es el primer mes del año");
        break;
    case "Febrero":
        alert(`El mes ${mes} es el segundo mes del año`); //template string con `` (alt + 95)
        //"El mes " + mes + es el segundo mes del año
        break;
    case "Marzo":
        alert(`El mes ${mes} es el tercer mes del año`);
    case "Abril":
    case "Mayo":
        console.log("Abril y mayo");
        break;
    default:
        alert("El mes selecionado no aplica");
}
 */

let pais = prompt(`Ingresa un país de la siguiente lista:
    1. Mexico
    2. Canada
    3. Belice
    4. Costa Rica
    5. El Salvador`);

switch (pais) {
    case "Mexico":
        alert(`La capital de ${pais} es CDMX`);
        break;
    case "Canada":
        alert(`La capital de ${pais} es Ottawa`);
        break;
    case "Belice":
        alert(`La capital de ${pais} es Belmopán`);
        break;
    case "Costa Rica":
        alert(`La capital de ${pais} es San José`);
        break;
    case "El Salvador":
        alert(`La capital de ${pais} es San salvador`);
        break;
    default:
        alert(`${pais} no está en la lista`);
        break;
}
