

let aluno = prompt('Digite o nome do aluno');
let qtdNumeros = 3;
let soma = 0;
let contador = 0;

while (contador < qtdNumeros) {
    contador++
    let numero = parseInt(prompt('Digite a nota:'));
    soma += numero;
}

let media = soma / qtdNumeros;

alert(`A nota de ${aluno} é ${media}`);

//Defini a variável contador como 0
//Na condição do while alterei para "contador < qtdNumeros" para que o loop pare assim que a quantidade de notas (3) for preenchida
//Adicionei "contador++" dentro do while, dessa forma com a variável contador iniciando como 0, ele vai ser menor do que o valor informado pelo usuário (que estará armazenado na variável qtdNumeros).
//A cada loop do while é incrementado +1 na variável contador, sendo assim, o loop irá encerrar no momento que o valor de contador for igual ao de qtdNumeros.


