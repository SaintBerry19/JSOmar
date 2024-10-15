// Objetos es un ente que posee propiedades 
// que hacen referencia a un elemento en especifico. Dicho elemento puede tomar cualquier
// valor.

let humano = {
    nombre: 'Omar Bueno',
    nacionalidad: 'Mexicano',
    edad: 31,
    carro: {
        marca: 'Chevrolet',
        anio: 1950,
        anioDeAccidente: [1995,1996,1997],
        dueniosAntiguos: [{nombre:"Roberto",edad:28},{nombre:"Juan Luis",edad:45}]
    }
}

// para acceder a un objeto hay dos maneras objeto.propiedad u objeto["propiedad"]
console.log(humano["nacionalidad"]," - ",humano.nacionalidad)
console.log(humano["carro"].dueniosAntiguos[1]["edad"]," - ",humano.carro.dueniosAntiguos[1]["edad"])
// Para acceder a una lista se utiliza el numero de indice, para un objeto necesitas usar el nombre de la propiedad
// ya sea con el punto o con los corchetes

humano["nacionalidad"] = "Argentino"
console.log(humano.nacionalidad) 
humano.nacionalidad = "Argeliano"
console.log(humano.nacionalidad) 
humano.carro = null
console.log(humano)
humano.camioneta = "Cheyen"
humano["hermano"] = "Juan Luis"
console.log(humano)

// Para copiar un objeto a otro con las mismas propiedades, aniadiendole otra se usa la siguiente sintaxis
let humano2 = {...humano, mascota: "SI"}
console.log(humano2)
humano = {...humano, mascota: "SI"}
console.log(humano)
