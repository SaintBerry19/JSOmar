// Listas-Arrays: Conjunto de elementos agrupados no ordernados, mutables.
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Las listas tienen indices, empieza a contar desde el 0 y va subiendo de 1 en 1, para acceder al indice se sigue esta
// nomenclatura: lista[indice]

// console.log(lista[0])
// console.log(lista[9])

// Se pueden obtener y referenciar valores especificos de la lista
// let numero_3 = lista[2]
// console.log(numero_3)
// Para asignar algo solo basta con poner el numero del indice que quieres afectar y poner el nuevo valor
// lista[2] = 5
// console.log(lista)

lista = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  [1, 2, 3, 4, 5, 6, 7, ["hola", "perro", "bonito"]],
];
let elemento_8 = lista[8]
console.log(lista)
console.log(elemento_8);

// esto es lo mismo
console.log(lista[8][7]);
console.log(elemento_8[7]);

let elemento_8_7 = elemento_8[7];

console.log(lista[8][7][1])
console.log(elemento_8[7][1])
console.log(elemento_8_7[1])

// Para copiar un objeto a otro con las mismas propiedades, aniadiendole otra se usa la siguiente sintaxis
let lista2 = [...lista,1,2,3]
console.log(lista2)

// Un metodo(funcion) muy importante para las listas es el metodo lenght, esto te dice la 
// longitud de las listas.
let lista3 = [1,2,3,4,5]
console.log(lista3.length)

// Un metodo(funcion) muy importante para las listas es el metodo push,
// esto aniade un elemento al final de la lista.

lista3.push(6)
console.log(lista3,lista3.length)