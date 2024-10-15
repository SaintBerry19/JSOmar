// for es un operador para el control de flujo
// donde defines un inicio y un final de una iteracion.

// for tipo 1 usar el iterador como indice:
// for (let iterando = inicio_de_iteracion, condicion_de_iteracion, paso){codigo a ejecutar}
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let usuarios = [
  { nombreUsuario: "SaintBerry", edad: 28, posicion: ["ADC", "SUP", "MID"] },
  { nombreUsuario: "Blitzcrack", edad: 32, posicion: "JG" },
  { nombreUsuario: "Jitters", edad: 33, posicion: "SUP" },
  { nombreUsuario: "Siulrich", edad: 27, posicion: "MID" },
  { nombreUsuario: "Un Tiktoker Pro", edad: 21, posicion: "TOP" },
];

for (let i = 0; i < usuarios.length; i++) {
  let posicion = usuarios[i].posicion;
  if (Array.isArray(posicion)) {
    for (let elemento of posicion) {
      console.log(elemento);
    }
  }
}

let usuarios2 = [
  { nombreUsuario: "SaintBerry", edad: 28, posicion: "ADC" },
  { nombreUsuario: "Blitzcrack", edad: 32, posicion: "JG" },
  { nombreUsuario: "Jitters", edad: 33, posicion: "SUP" },
  { nombreUsuario: "Siulrich", edad: 27, posicion: "MID" },
  { nombreUsuario: "Un Tiktoker Pro", edad: 21, posicion: "TOP" },
];

// for tipo 2 usa el iterador como elemento del conjunto:
// for (let individuo_del_conjunto of conjunto){codigo a ejecutar}
for (let i of usuarios2) {
  i.camioneta = 35;
}

console.log(usuarios2);
