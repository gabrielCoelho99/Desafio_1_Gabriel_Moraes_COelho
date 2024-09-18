// Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos.
// Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque.
// Crie um algoritmo informando quantos pontos de vida restarão após três ataques?

let vida = 100
let ataque = 3
let dano = 20
console.log(`Você recebeu ${ataque * dano} de dano do inimigo seus pontos de vida restante são ${vida - ataque * dano}`);
