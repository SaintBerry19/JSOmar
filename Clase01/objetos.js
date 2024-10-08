let usuarios = [
  {
    nombre: "Roberto",
    age: 11,
    budget: 100,
    INE: true,
  },
  {
    nombre: "Omar",
    age: 17,
    budget: 100,
    INE: true,
  },
  {
    nombre: "Huan Luiz",
    age: 17,
    budget: 100,
    INE: true,
  },
  {
    nombre: "EkhaTherina",
    age: 17,
    budget: 100,
    INE: true,
  },
];

for (let usuario of usuarios) {
  console.log(usuario);
  console.log(usuario.nombre);
  if (usuario.age >= 18 && usuario.budget >= 100 && usuario.INE) {
    console.log("Puedes entrar!");
  } else {
    console.log("No puedes entrar!");
  }
  break;
}
