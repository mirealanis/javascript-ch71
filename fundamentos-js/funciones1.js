//declarar función
function saludar() {
    console.log("Hola");
}

//usar la función (invocar o llamar)
saludar();
saludar();
saludar();

//Funcion con parametros
function saludarConNombre(nombre, edad) {
    console.log(`Hola ${nombre} mucho gusto en conocerte
        No sabia que tenias ${edad} años`);
}

//pasando argumentos a una función
saludarConNombre("José", 26);
saludarConNombre("Mireya", "casi 27");
saludarConNombre(29, "Juan");

/**
 * Funcion que retorna algo
 * !Importante
 * Cuando usamos return
 * 1. Termina la ejecución 
 * 2. El valor retornado debe ser ocupado o nunca lo vamos a ver
 */

function multiplyToNumbers(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a * b;// finaliza ejecución
    } else {
        return "Por favor envía dos numeros"; //Finaliza ejecución
    }
    console.log("Nunca me vas a ver :p");
}

//aqui no voy a ver nada
multiplyToNumbers(2, 3);

//imprimiendo el valor de retorno en consola
console.log(multiplyToNumbers(3, 5));
console.log(multiplyToNumbers(3, "José"));