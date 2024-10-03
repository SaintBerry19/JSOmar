// Tipos de datos
let x = "Hola" // string(cadena de texto)
let y = 3.2 // num(numerico)
let z = false || true // boolean
let n = null // nulo, no confundir con un valor vacio

// Estructura de datos
let arrays = [1,2,3,"hola"] //Listas, conjunto de elementos agrupados sin orden, iterable, y mutable. (puede contener lo que gustes)
let carro = {
    marca: "Ford",
    color: "Rojo",
    anio: 1978,
    accidentes: [1978,1980,1981],
    duenio:{
        nombre: "Omar",
        edad: 32
    }
} // Elemento que posee propiedades, con un valor asignado, dicho valor puede ser lo que gustes, no tienen ordern, son iterables y mutables.
let nueva_lista = [arrays,carro]

// Variable
let variable = "Algo" // palabra que representa un valor asignado previamente, dicho valor es mutable, para declarar una variable usamos la palabra let.
console.log(variable)
const constante = 3// palabra que representa un valor asignado previamente, dicho valor no es mutable, para declarar una variable usamos la palabra const.
console.log(constante)
variable = "Omar"
console.log(variable)
// constante = 4
// console.log(constante) Esto marcaria error porque no se puede reasignar el valor a una constante 

