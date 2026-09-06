/**
 * ?Ejercicio con ciclo while
 */
/**
 //*Fácil (Validación simple)
 let positivo = false;
 while (positivo == false) {
 
     let numero = Number(prompt("Por favor, ingrese un numero positivo"));
 
     if (numero < 0 || numero == 0) {
         alert(`${numero} no es positivo. Intente de nuevo`);
         positivo = false;
     } else {
         alert(`Numero ${numero} aceptado`);
         positivo = true;
     }
 }

 //*Medio (acumulador)
 let suma = 0;
 let cero = false
 
 while (cero == false) {
      numero = Number(prompt(`Ingresa un numero para sumar:
         Ahora, el acumulado es ${suma}.`));
     if (numero != 0) {
         suma += numero;
     }else{
         cero = true;
     }
 }
 console.log(`El total de la suma es ${suma}`);
 * 
 */

//*Difícil (Potencia manual)
let base = Number(prompt(`Ingresa un numero para la base`));
let exponente = Number(prompt(`Ingresa un numero para el exponente`));

if (base > 0 && exponente > 0) {
    let total = 1;
    let c = 0;
    while (c < exponente) {
        total = total * base;
        c++;
    }
    alert(`El resultado de la potencia es:
    ${base}^${exponente} = ${total}`);
} else if(base > 0 && exponente == 0) {
    alert(`El resultado de la potencia es:
    ${base}^${exponente} = 1`);
} else{
    alert("Por favor ingresa solo numeros positivos");
}
