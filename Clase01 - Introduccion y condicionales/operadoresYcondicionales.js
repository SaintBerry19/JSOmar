// Tabla de la verdad
// AND (UNION) &&
// VERDAD AND VERDAD => VERDAD
// VERDAD AND FALSO => FALSO
// FALSO AND FALSO => FALSO

// OR () ||
// VERDAD OR VERDAD => VERDAD
// VERDAD OR FALSO => VERDAD
// FALSO OR FALSO => FALSO

// NOT DA EL RESULTADO DE LO CONTRARIO !

// console.log(!(false || (true && !(false || !true))));
// Para la comparacion entre un tipo de dato no booleano (3) con uno booleano (false) el dato no booleano (que no sea null)
// es true

// Operadores logicos <, >, === Identico, !== No es igual, Diferente, == Parecido, != Diferente al parecido, <=, >=

// console.log(3 == "3");
// console.log(3 === "3");

// IF(condicion){instruccion a ejecutar si la condicion es true} --> ELSE IF(condicion){instruccion a ejecutar si
// la condicion es true} --> ELSE {instruccion a ejecutar si no se cumplieron las condiciones anteriores}

// Vienen en paquete pero no necesariamente necesitas utilizar el else.
// Se ejecuta solo 1 de las condiciones, la que se cumpla primero. Porque vienen EN PAQUETE.

let dinero = 15;
let nombre = "Juan";

if (dinero > 10 && nombre === "Juan") {
  console.log("Me compro unas papitas y soy juan");
  dinero = dinero - 10;
  if (dinero > 10) {
    console.log("Me compre muchos chicles");
  } else {
    console.log("Me compre 2 chicles");
  }
} else if (dinero > 5) {
  console.log("Me compre 2 chicles y no soy juan");
} else {
  console.log("Me compre chicle");
}
