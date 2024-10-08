// Ejercicio: Entrada al bar
// En un bar, las reglas para entrar son las siguientes:

// Debes ser mayor de 18 años.
// Debes tener al menos $100 para poder comprar algo.
// Debes traer tu INE (tu identificación oficial).
// Tu tarea es escribir un programa que pregunte al usuario por su edad, cuánto dinero tiene, y si trae su INE. Con base en esta información, el programa debe decirle si puede entrar o no, y dar una salida específica dependiendo de la combinación de condiciones.

// Reglas:
// Si cumple con todas las condiciones, el programa debe decir: "Puedes entrar al bar y disfrutar!".
// Si tiene la edad y el dinero, pero no trae la INE, el programa debe decir: "Tienes la edad y el dinero, pero sin INE no puedes entrar.".
// Si tiene la edad y trae la INE, pero no tiene el dinero suficiente, el programa debe decir: "Tienes la edad y la INE, pero necesitas al menos $100 para entrar.".
// Si tiene el dinero y la INE, pero no tiene la edad, el programa debe decir: "Tienes el dinero y la INE, pero no tienes la edad para entrar.".
// Si tiene la edad, pero no tiene ni la INE ni el dinero, el programa debe decir: "Tienes la edad, pero necesitas el dinero y la INE para entrar.".
// Si no cumple con ninguna de las condiciones, el programa debe decir: "No puedes entrar al bar. No cumples ninguna de las condiciones.".

let age = 17;
let budget = 99;
let INE = false;

if (age > 18 && budget > 100 && INE) {
  console.log("Puedes entrar al bar y disfruta!");
}
else if (age > 18 && budget > 100 && !INE) {
  console.log("Tienes la edad y el dinero, pero sin INE no puedes entrar");
}
else if (age > 18 && budget < 100 && INE) {
  console.log(
    "Tienes la edad y la INE pero neceistas al menos $100 para entrar"
  );
}
else if (age < 18 && budget > 100 && INE) {
  console.log("Tienes el dinero y la INE, pero no tienes la edad para entrar");
}
else if (age > 18 && budget < 100 && !INE) {
  console.log(
    "Tienes la edad pero necesitas el dinero y la INE para poder entrar"
  );
}
else if (age<18 && budget<100 && INE) {
    console.log(
        "Tienes el INE pero no tienes la edad y el dinero para entrar"
    );
}
else  {
  console.log(
    "No puedes entrar al bar. No cumples ninguna de las condiciones"
  );
}
