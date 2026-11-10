const prompt = require('prompt-sync')()

console.log("Contar ate 10")
console.log("Contar ate 20")
console.log("Contar ate 30")

let opcao = prompt("Digite a opcao abaixo:")

switch (opcao) {
    case "1":
        for (let i = 0; i <= 10; i++) {
            console.log(i)
        }
        break
    case "2":

        for (let i = 0; i <= 20; i++) {
            console.log(i)
        }
        break
    case "3":
        for (let i = 0; i <= 30; i++) {
            console.log(i)
        }
        break
    default:
        console.log("Valor invalido")
}