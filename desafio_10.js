// Desenvolver um programa para contar o número de letras maiúsculas da string abaixo:
// “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

// Definindo a string
let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

// Função para contar letras maiúsculas
function contarLetrasMaiusculas(texto) {
    let count = 0; // Inicializar contador

    // Iterar através de cada caractere na string
    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];

        // Verificar se o caractere é uma letra maiúscula
        if (caractere === caractere.toUpperCase() && caractere !== caractere.toLowerCase()) {
            count++; // Incrementar o contador se for uma letra maiúscula
        }
    }

    return count; // Retornar o total de letras maiúsculas encontradas
}

// Chamar a função para contar letras maiúsculas
var numeroDeMaiusculas = contarLetrasMaiusculas(texto);

// Imprimir o resultado no console
console.log("O número de letras maiúsculas na string é: " + numeroDeMaiusculas);

