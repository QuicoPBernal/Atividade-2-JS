// Atividade 01
// Peça ao usuário para inserir um número e escreva um programa que
// determine se o número é positivo e par.
// var num = prompt(`Digite um número:`)
// if (num > 0 && num % 2 == 0){
//   console.log(`O número é positivo e par`)
// }
// else{
//   console.log(`O número não é positivo e par`)
// }

// Atividade 02
// Crie um programa que solicite ao usuário seu peso (em kg) e altura
// (em metros) e calcule o IMC. Em seguida, informe a categoria de
// acordo com a tabela de IMC (por exemplo, abaixo do peso, peso
// normal, sobrepeso, etc.).

// var peso = prompt(`Digite seu peso:`)
// var altura = prompt(`Digite sua altura:`)
// var imc = peso / (altura * altura)

// if (imc < 16.9){
//   console.log(`Muito abaixo do peso`)
// }
// else if (imc >= 17 && imc <= 18.4){
//   console.log(`Abaixo do peso`)
// }
// else if (imc >= 18.5 && imc <= 24.9){
//   console.log(`Peso normal`)
// }
// else if (imc >= 25 && imc <= 29.9){
//   console.log(`Sobrepeso`)
// }
// else if (imc >= 30 && imc <= 34.9){
//   console.log(`Obesidade grau I`)
// }
// else if (imc >= 35 && imc <= 40){
//   console.log(`Obesidade grau II`)
// }
// else {
//   console.log(`Obesidade grau III`)
// }

// Atividade 03
// Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o
// preço final com desconto, Se o usuário tiver menos de 18 anos, aplique um
// desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.

// var preco = prompt(`Digite o preço do produto:`)
// var idade = prompt(`Digite sua idade:`)
// if (idade < 18){
//   var desconto = preco * 0.1
//   var precoFinal = preco - desconto
//   console.log(`O preço final com desconto é ${precoFinal}`)
// }
// else{
//   console.log(`O preço final é ${preco}`)
// }

// Atividade 04
// Solicite ao usuário que digite uma letra. Crie um programa que determine
// se a letra inserida é uma vogal ou uma consoante. Exiba a mensagem
// correspondente. Utilize estruturas condicionais para realizar essa
// verificação.
// var letra = prompt(`Digite uma letra:`)
// if (letra == `a` || letra == `e` || letra == `i` || letra == `o` || letra == `u`){
//   console.log(`A letra é uma vogal`)
// }
// else{
//   console.log(`A letra é uma consoante`)
// }

// Atividade 05
// Crie um programa que solicite um número de 1 a 7, representando
// o dia da semana. Use uma estrutura switch (ou equivalente) para
// imprimir o nome do dia correspondente.
// var dia = prompt(`Digite um número de 1 a 7:`)
// switch (dia){
//   case `1`:
//     console.log(`Domingo`)
//     break
//   case `2`:
//     console.log(`Segunda-feira`)
//     break
//   case `3`:
//     console.log(`Terça-feira`)
//     break
//   case `4`:
//     console.log(`Quarta-feira`)
//     break
//   case `5`:
//     console.log(`Quinta-feira`)
//     break
//   case `6`:
//     console.log(`Sexta-feira`)
//     break
//   case `7`:
//     console.log(`Sábado`)
//     break
//   default:
//     console.log(`Número inválido`)
// }


// Atividade 06
// Escreva um programa que solicite um número e determine se ele é
// um número primo.
var num = prompt(`Digite um número:`)
var divisores = 0
for (var i = 1; i <= num; i++){
  if (num % i == 0){
    divisores++
  }
}
if (divisores == 2){
  console.log(`O número é primo`)
}
else{
  console.log(`O número não é primo`)
}

