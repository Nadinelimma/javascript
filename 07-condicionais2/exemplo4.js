// Criar duas variaveis numerico
let valor1 = 20
let valor2 = 40
// criar a variavel operador
let operador = "+"

switch (operador) {
    case "+":
        let soma = valor1 + valor2
        console.log(`A soma de ${valor1} + ${valor2} é ${soma}`)
        break
    case "-":

        let sub = valor1 - valor2
        console.log(`A subtração de ${valor1} - ${valor2} é ${sub}`)
        break
    case "*":
        let multiplicacao = valor1 * valor2
        console.log(` A multiplicação de ${valor1} + ${valor2} é ${multiplicacao}`)
        break
    case "/":
        let div = valor1 / valor2
        console.log(`A divisão de ${valor1} / ${valor2} é ${div}`)
        break
    default:
        console.log("valor invalido")






}