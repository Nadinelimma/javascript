// 1 - pergunte quantas viagens serao registradas
// 2 - utilize for para repetir a solicitacao dos dados
// 3 - em cada viagem, solicite a quantidade de km percorridos
// 4 - solicite a quantidade de listro de combustivel consumidos
// 5 - calcule o consumo da cada viagem (km dividos pelos litros)
// 6 - Acumule os consumos para calcular a media
// 7 - Apresente o consumo medio final


// exemplo
// Quantas viagens deseja registrar? 3

// Quilometros percorridos na viagem: 100
// Litros consumidos na viagem: 10
// console.log(==========================)

const prompt = require('prompt-sync')()

let viagens = Number(prompt('Quantos viagens deseja registrar'))
let somaTotal = 0

for (let i = 1; i <= viagens; i++) {
    // perguntar km percorridos
    let kmPercorridos = Number(prompt("Km percorridos:"))
    // perguntar litros consumidos
    let litrosConsumidos = Number(prompt("Litros consumidos na viagem:"))
    // calculo
    let calculo = kmPercorridos / litrosConsumidos

    somaTotal += calculo

}

let consumoMedio = somaTotal / viagens
console.log(`Consumo medio foi de ${consumoMedio.toFixed(2)}Km/L`)

