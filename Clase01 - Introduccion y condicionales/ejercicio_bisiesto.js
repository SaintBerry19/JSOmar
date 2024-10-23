let anio = 100;
let residuo_4 = anio % 4;
let residuo_100 = anio % 100;
let residuo_400 = anio % 400;

 if (residuo_4 === 0) {
  if (residuo_100 === 0) {
    if (residuo_400 === 0) {
      console.log("Es bisiesto");
    } else {
      console.log("No es bisiesto");
    }
  } else {
    console.log("Es bisiesto");
  }
} else {
  console.log("No es bisiesto ");
}

if ((residuo_4 === 0 && residuo_100 !== 0) || residuo_400 === 0) {
  console.log("Es bisiesto");
} else {
  console.log("No es bisiesto");
}

let years = [1, 4, 100, 200, 400, 404];

for (let year of years) {
  let residuo_4 = year % 4;
  let residuo_100 = year % 100;
  let residuo_400 = year % 400;
  if ((residuo_4 === 0 && residuo_100 !== 0) || residuo_400 === 0) {
    console.log(year + " Es bisiesto");
  } else {
    console.log(year + " No es bisiesto");
  }
}

for (let i = 0; i < years.length; i++) {
  let year = years[i];
  let residuo_4 = year % 4;
  let residuo_100 = year % 100;
  let residuo_400 = year % 400;
  if ((residuo_4 === 0 && residuo_100 !== 0) || residuo_400 === 0) {
    console.log(year + " Es bisiesto");
  } else {
    console.log(year + " No es bisiesto");
  }
}

for (let i = 0; i < 2025; i++) {
  let year = i;
  let residuo_4 = year % 4;
  let residuo_100 = year % 100;
  let residuo_400 = year % 400;
  if ((residuo_4 === 0 && residuo_100 !== 0) || residuo_400 === 0) {
    console.log(year + " Es bisiesto");
  } else {
    console.log(year + " No es bisiesto");
  }
}