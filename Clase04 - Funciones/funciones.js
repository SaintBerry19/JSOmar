// Una funcion es una agrupacion de codigo, la cual puede ser llamada en cualquier parte del codigo utilizando el nombre de la funcion y parentesis:
// funcion()
// existen distantas maneras de definir funciones acontinuacion se mostraran las 2 mas tipicas
// function nombre_de_funcion(parametros) {}
// const nombre_de_funcion = function(parametros) {}
// Para que la funcion ejecute el contenido de su codigo tiene que ser llamada, en caso de tener parametros dichos parametros tienen que ser brindados al
// momento de llamar la funcion
// si quiero regresar un valor se utiliza la palabra return, esto regresara el valor de la varible que desee

// function sumar(a, b) {
//   let suma = a + b;
//   return suma;
// }

// const restar = function (a, b) {
//   return a - b;
// };

// let numero1 = sumar(1, 2);
// let numero2 = restar(2, 1);
// console.log(numero1, numero2);

// Como ejemplo calcularemos el valor con iva de un grupo de precios.

function calculadora_precio_total(lista_precios) {
    let lista_precio_total = []
    for (let precio of lista_precios){
        let importacion_valor = precio * 1.3
        let transporte_valor = importacion_valor * 1.7
        let precio_total = transporte_valor * 1.16
        lista_precio_total.push(precio_total)
    }
return lista_precio_total
}

let precios = [100.54,235,109.86,16]
let nuevos_precios = calculadora_precio_total(precios)
console.log(nuevos_precios)

let precios_2 = [100.54,235,109.86,16,100.12]
let nuevos_precios2 = calculadora_precio_total(precios_2)
console.log(nuevos_precios2)

