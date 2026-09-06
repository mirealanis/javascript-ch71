/**
 * do while
 * !El bucle do while siempre se ejecuta por lo menos una vez
 * al ejecutar primero y luego evaluar 
 * Te permite tener una ejecuación garantizada
 * 
 * !Necesita un contador externo para no hacer el bucle infinito
 * !No debemos olvidar actualizar dicho contador
 * 
 */

/**
 let contador = 200;
 do{
     console.log(`iteración ${contador}`)
     console.log(contador);
     //operador de suma y asignación
     contador += 1;
 } while(contador <= 100);
 console.log(contador);
 * 
 */

 let contador = 1;
 
 do {
    if (contador % 2 == 0 ) {
        console.log(`el numero ${contador} es par`);
    } else {
        console.log(`el numero ${contador} es impar`);
    }
    contador ++;
 } while (contador < 100);
