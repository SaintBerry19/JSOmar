let equipo = {
    equipo_1: ["Zidane", "Cannavaro", "Makelele", "Ribery"],
    equipo_2: ["Cristiano","Quaresma", "Bruno", "Bernardo"],
}
let equipo_3 = ["Neuer, Lahm, Ballack, Klose"]
let partido = [equipo]
//console.log(partido)
//console.log(partido.length)
partido.push(equipo_3)
//console.log(partido)
console.log(partido[0]["equipo_2"][0])
//quiero un programa que me diga siu si cristiano esta en el equipo
let portugal = equipo["equipo_2"]
portugal.push("Pepe")
console.log(portugal)
console.log(equipo)