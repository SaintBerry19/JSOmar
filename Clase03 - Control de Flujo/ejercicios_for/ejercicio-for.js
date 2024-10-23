// for (let year = 1; year < 2025; year++) {
//   let residuo_4 = year % 4;
//   let residuo_100 = year % 100;
//   let residuo_400 = year % 400;
//   if ((residuo_4 === 0 && residuo_100 !== 0) || residuo_400 === 0) {
//     console.log( year + " Es bisiesto");
//   } else {
//     console.log( year + " No es bisiesto");
//   }
// }
// //let years = [4, 100, 200, 400, 412]
// for(let i = 0; i < years.length; i++){
//     let year = years[i]
//}
//un programa que reciba dinero y entregue cambio con la menor cantidad de monedas, la maquina puede dar monedas de 10, 5, 2, 1
let money = 98;
let coin10 = Math.floor(money / 10);
let residue_10 = money % 10;
let coin5 = Math.floor(residue_10 / 5);
let residue_5 = residue_10 % 5;
let coin2 = Math.floor(residue_5 / 2);
let residue_2 = residue_5 % 2;
let coin1 = Math.floor(residue_2 / 1);
let residue_1 = residue_2 % 1;
console.log("Ingresaste " + money);
if (money > 0) {
  console.log("Aqui tienes " + coin10 + " monedas de 10");
  console.log("Aqui tienes " + coin5 + " monedas de 5");
  console.log("Aqui tienes " + coin2 + " monedas de 2");
  console.log("Aqui tienes " + coin1 + " monedas de 1");
} else console.log("Para recibir cambio debes ingresar una cantidad");

// let money = 123
// let change = [10, 5, 2, 1]

let coins = [30,20,50,5,10,1,2]
let payment = 977
let total_coins = 0
coins.sort((a, b) => b - a)
let monedero = {}

for (let coin of coins){
    let coins_coin = Math.floor(payment / coin)
    total_coins = total_coins + coins_coin
    payment = payment % coin 
    monedero[coin] = coins_coin
//    console.log(Tenemos ${coins_coin} monedas de la moneda: ${coin})
}

//console.log(El total de monedas es: ${total_coins})