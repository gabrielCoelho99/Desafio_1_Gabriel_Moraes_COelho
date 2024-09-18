// Crie uma lógica para calcular a idade de uma pessoa.
// Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

// Função para calcular a idade
function calcularIdade(dataNascimento) {
    // Obter a data atual
    var dataAtual = new Date();

    // Obter o ano atual
    var anoAtual = dataAtual.getFullYear();

    // Obter o ano de nascimento da string fornecida
    var anoNascimento = parseInt(dataNascimento.substring(0, 4));

    // Calcular a idade subtraindo o ano de nascimento do ano atual
    var idade = anoAtual - anoNascimento;

    // Verificar se o aniversário deste ano ainda não ocorreu
    // Se não tiver ocorrido, subtraímos um ano da idade
    var mesAtual = dataAtual.getMonth() + 1; // O mês atual começa do zero (janeiro é 0)
    var diaAtual = dataAtual.getDate();
    var mesNascimento = parseInt(dataNascimento.substring(5, 7));
    var diaNascimento = parseInt(dataNascimento.substring(8, 10));

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

// Exemplo de uso da função
var dataNascimento = prompt('Qual seu ano, mês e dia de nascimento?'); // Ano-Mês-Dia
var idade = calcularIdade(dataNascimento);
console.log("A idade da pessoa é: " + idade + " anos.");
