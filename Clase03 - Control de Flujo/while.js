// While es un operador de control de flujo utilizado mayormente cuando no sabes QUE TANTO DEBES DE ITERAR
// while funciona al darle una condicion para controlar la iteracion donde se leeria de la siguiente manera:
// LOGICA DEL WHILE: MIENTRAS ESTE PASANDO ESTO HAREMOS ESTO, CUANDO DEJE DE PASAR YA NO LO HAREMOS.

let a = true;
let contador = 0;
while (a) {
  console.log("Omar es muy buapo");
  a = false;
}

let inputs = ["Perroloco", "nomelase", "holi", "Perroloco21"];
let contrasenia = "Perroloco21";

while (inputs[contador] !== contrasenia) {
  console.log("Contrasenia incorrecta, vuelvela a insertar!");
  contador++;
}
console.log("Contrasenia correcta!")


while (a) {
    if (inputs[contador] !== contrasenia) {
      console.log("Contrasenia incorrecta, vuelvela a insertar!");
      contador ++
    }
    a = false
  }
  console.log("Contrasenia correcta!")
