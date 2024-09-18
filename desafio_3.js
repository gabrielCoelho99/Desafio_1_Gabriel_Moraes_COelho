// Havia uma antiga guilda de alquimistas que guardava seus segredos em uma série de frascos numerados.
// No entanto, ao longo dos anos, os frascos foram sendo desorganizados e agora os aprendizes alquimistas precisam restaurar a ordem.
// Os números dos frascos representam a idade dos alquimistas que os criaram.
// Eles devem ser ordenados em ordem crescente para revelar um segredo alquímico há muito perdido.
// Mas, para isso, os aprendizes devem usar suas habilidades em algoritmos de ordenação.

// Escreva um programa que faça a ordenação dos frascos: 12, 5, 23, 17, 8, 14, 3, 19.

let aventureiro = prompt('Diga para mim, qual o seu nome aventureiro(a).')
alert('Muito tempo atrás em um continente distante, 8 aprendizes de Alquimistas de uma guilda já esquecida, precisavam resolver um enigma para que fossem salvos ');
alert('Para que fossem descobertos os segredos que um dia foram guardados, os jovens aprendizes de alquimistas,precisavam reorganizar os frascos perdidos para assim então, restaurar a ordem das coisas.');
alert('Os números dos frascos, representam a idade dos antigos Alquimistas que os criaram.');
alert('Sendo assim, veja em seus pergaminhos antigos a solução desse problema, e ajude os jovens Alquimistas da Guilda a resolverem o segredo, e restaurar a ordem!');

let idadeAlquimista = 1
let lista = [];

while (idadeAlquimista < 9) {
    lista.push(prompt(`Seguindo o seu manuscrito antigo, me diga ${idadeAlquimista}º idade do antigo Alquimista da Guilda:`))
    idadeAlquimista++
}


lista.sort((a, b) => a - b)
console.log(lista[0, 1, 2, 3, 4, 5, 6, 7, 8]);
alert(`PARABÉNS!!!!!! Você conseguiu resolver o enigma e a sequência do segredo para restaurar a ordem é ${lista}`)
alert('Obrigado por ajudar os jovens aprendizes a restaurar a ordem e o equilibrio!')
