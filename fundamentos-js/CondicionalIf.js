/**
 * Condicionales:
 * Serie de condiciones para que algo suceda.
 * 
 * En programación para el manejo de estas condiciones tenemos:
 * *El bloque if-else
 * ? Bloque if pregunta por una condición en caso de que esta condición sea verdadera, ejecuta un bloque de código, si es falso no ejecuta nada.
 * ?else maneja la ejecuación de código en caso negativo.
 * Lo que este dentro del if debe ser algo que genere un valor True o False (Tipo de dato boolean).
 * 
 */

//Ejercicio
const anioNAcimiento = Number(prompt("Ingresa tu año de nacimiento"));
let edad = 2026 - anioNAcimiento;
console.log("Tienes " + edad + " años de edad.");

/**
 * todo: Operadores lógicos
 * Sirven para hacer operaciones cuyo resultado es Verdadero o Falso.
 * ?Nota: == simbolo de igualdad en programación
 * 
 * *Mayor que >
 * 2 > 1 == verdadero
 * 1 > 2 == falso
 * 0 > 0 == falso
 * 
 * *Menor que <
 * 2 < 1 = falso
 * 3 < 5 == verdadero
 * 2 < 2 == falso
 * 
 * *comparador de igualdad ==
 * 2 == 2 == Verdadero
 * 3 == 1 == Falso
 * 
 * *Mayor o igual que >=
 * 2 >= 2 == Verdadero
 * 2 >= 1 == verdadero
 * 2 >= 3 == falso
 * 
 * *Menor o igual que <=
 * 4 <= 4 == verdadero
 * 4 <= 5 == verdadero
 * 7 <= 5 == falso
 * 
 * * Diferente de != 
 * 5 != 4 == true
 * 5 != 5 == false
 * 
 * *Negación (not) !
 * !Verdaderp == falso
 * !Falso == verdadero
 * 
 * * AND && -> para rangos
 *  Operador que devuelve:
 *  ? verdadero -> si ambas condiciones se cumplen
 *  ? falso -> si una de las condiciones es falsa
 * 
 * * OR || -> para casos
 *  Operador que devuelve:
 *  ? falso -> si ambas condiciones son falsas
 *  ? verdadero -> si una o ambas condiciones son verdadero
 */

/*
    *if else
    Se puede tener solito al if y no dará error
    if (condición a evaluar){codigo quue se ejecutará en caso de que la condición sea TRUE}else{codigo alternativo}

    *else-if
    permite evaluar más de una condición y va asociado a un if.
*/
if(edad >= 18){
    alert("¡Eres mayor de edad!😸");
}else if(edad >= 12 && edad <=17){
    alert("¡Eres un adolescente!🤗");
}else if(edad >= 6 && edad <=11){
    alert("¡Estas en tu niñez media! 🙈");
}else if(edad >=1){
    alert("¡Estas en tu primera infancia!😊");
}else{
    alert("Estas muy bebe o no haz nacido");
}


