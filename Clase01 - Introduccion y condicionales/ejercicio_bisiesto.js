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
