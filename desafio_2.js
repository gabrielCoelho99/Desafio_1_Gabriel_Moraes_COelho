// Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar. 
// Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número.
// Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, 
// receba os números da lista e imprima na tela o menor número digitado e o maior número digitado. 

let contador = 1
let lista = [];

while (contador < 8) {
    lista.push(prompt(`Digite o ${contador}º número:`))
    contador++
}


lista.sort((a, b) => a - b)
console.log(lista[0]);
console.log(lista[6]);
alert(`O menor número é ${lista[0]} e o maior é ${lista[6]}`)

//Defini a variável contador como 1
//Defini a variável lista
//Defini o loop contador < 8 para que sejam entregues os 7 numeros da sorte propostos
//Defini uma lista dentro do loop para que sejam entregues os numeros da sorte e com issoa variavelcontador ++ para que sejam pedidos os 7 numeros
//Após isso, defini a variavel lista.sort para que fossem organizados os números do menor para o maior e que tambem fossem mostrados no console
//E para finzalizar, defini um alert para mostrar o menor e o maior número da lista 