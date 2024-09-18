// Escreva um programa para encontrar o fatorial do número 12.

function calcularFatorial(numero) {
    // Verificar se o número é negativo
    if (numero < 0) {
        return "O fatorial de números negativos não é definido.";
    }

    // Caso base: fatorial de 0 é 1
    if (numero === 0) {
        return 1;
    }

    // Inicializar o fatorial com 1
    var fatorial = 1;

    // Iterar de 1 até o número e multiplicar pelo fatorial
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

// Calcular o fatorial de 12
var numero = 12;
var fatorialDeDoze = calcularFatorial(numero);
console.log("O fatorial de " + numero + " é: " + fatorialDeDoze);
