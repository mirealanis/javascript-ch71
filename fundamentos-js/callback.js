/**
 * *Callbacks
 * Función que se pasa como argumento a otra función, para
 * ser ejecutada en el momento que la función que recibe el callback lo decida.
 * 
 * ?Funciones ciudadanos de primera clase
 * Todas las funciones son tratadas como si fueran un valor
 */

function procesarPago(nombreCliente, callback, cuenta){
    const saldoAPagar = callback(cuenta);
    console.log(`El cliente ${nombreCliente} debe pagar 
        ${saldoAPagar}
        despues de impuestos`);
};

/**
 * Opciones para la función de callback
 * 1. crear una función aparte y luego mandarla como argumento
 * 2. crear una funcion anonima dentro de los parentesis
 */

function addIVA(cuenta) {
    return cuenta * 1.16;
}

procesarPago("Mireya", addIVA, 2000);
//procesar pago con funcion anonima, 2 ejemplos, uno con function y otro con arrow function

console.log("-------- Callback con funcion anonima --------");
procesarPago(
    "Carlos",
    function (cuenta) {
        return cuenta * 1.2;
    },
    2000,
);

console.log("-------- Callback con arrow function --------");
procesarPago("Javier", (cuenta => cuenta * 1.3, 2000));