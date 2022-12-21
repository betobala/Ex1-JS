let num1 = prompt("Insíra o primeiro número:")
let num2 = prompt("Insíra o segundo número:")

num1 = Number(num1)
num2 = Number(num2) 

const sum = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2
const restDiv = num1 % num2


alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + mult)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + restDiv)

if(sum % 2 == 0) {
  alert("A soma dos dois números é par")
}
else {
  alert("A soma dos dois números é impar")
}

if(num1 == num2) {
  alert("Os números inseridos são iguais")
}
else {
  alert("Os números inseridos são diferentes")
}