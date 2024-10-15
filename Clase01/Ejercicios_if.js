//Realiza un programa que reciba dos numeros por teclado e indique cual es mayor o si son iguales
let numero_1 = 5;
let numero_2 = 3;
if (numero_1 > numero_2) {
  console.log("El numero " + numero_1 + (" es mayor que el numero" + numero_2));
} else if (numero_2 > numero_1) {
  console.log("El numero " + numero_2 + (" es mayor que el " + numero_1));
} else {
  console.log(
    "El numero " + numero_1 + (" el numero " + numero_2 + " son iguales")
  );
}
//Realiza un programa que pida un número por teclado y nos indique si es par o impar.
let numero = 200;
let residuo_2 = numero % 2;
if (residuo_2 === 0) {
  console.log("El numero " + numero + " es par");
} else {
  console.log("El numero " + numero + " es impar");
}
//Crea un programa que pida al usuario dos números y muestre el resultado de su división. Si el segundo número es 0,
//debe mostrar un mensaje de error.
let numero_5 = 53;
let numero_6 = 8;
let resultado = numero_5 % numero_6;
console.log(resultado);
if (numero_6 === 0) {
  console.log("Error");
}
//Realiza un programa que calcule la potencia de un número, dado este y su exponente. Pueden ocurrir tres casos:
// El exponente sea positivo: imprime resultado en pantalla.
//El exponente sea 0, el resultado es 1.
//El exponente sea negativo, el resultado es 1/potencia con el exponente positivo.
let numero_8 = 5;
let exponente_8 = -2;
let resultado_1 = numero_8 ** exponente_8;
if (exponente_8 > 0) {
    console.log(resultado_1);
} else if (exponente_8 === 0) {
    console.log(1);    
} else (exponente_8 < 0); {
    console.log(1%resultado_1)
}
//Realiza un programa que calcule la aceptación de una solicitud en base a los siguientes parámetros: edad, nota y sexo.
// Mínimo: Nota (5), edad (18), sexo M -> POSIBLE
// Mínimo: Nota (5), edad (18), sexo F -> ACEPTADA
// Otros casos -> NO ACEPTADA
let age = 18
let grade = 7
let male = true 
if(age === 18 && grade >= 5 && male ) {
    console.log("Es posible que seas aceptado");
} else if (age === 18 && grade >= 5 && !male) {
    console.log("Has sido aceptada")
} else {
    console.log("No aceptado")
}
//Realiza un programa que pida por teclado el resultado (dato entero) obtenido al lanzar un dado de seis caras y 
//muestre por pantalla el número en letras (dato cadena) de la cara opuesta al resultado obtenido.
//Nota 1: En las caras opuestas de un dado de seis caras están los números: 1-6, 2-5 y 3-4.
//Nota 2: Si el número del dado introducido es menor que 1 o mayor que 6, se mostrará el mensaje: “ERROR: número incorrecto”.
let tiro = 5
if(tiro === 2){
    console.log("cinco")
}else if(tiro === 5){
    console.log("dos");
} else if(tiro === 1){
    console.log("seis");
}else if(tiro === 6){
    console.log("uno")
}else if(tiro === 4){
    console.log("tres")
}else if(tiro === 3){
    console.log("cuatro")
}else{
    console.log("ERROR: numero incorrecto")
}
