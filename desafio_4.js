// Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. 
// Ele pede sua ajuda para identificar esses números criando um algoritmos. 
// Os números são: 23, 16, 11, 8, 19, 14, 5, 21.


function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
const primos = numeros.filter(numero => isPrime(numero));

console.log("Números primos na array:", primos);


