const prompt = require('prompt-sync')();

// Função saldoVitorias: retorna a diferena entre a quantidade de vitorias e a quantidade de derrotas
function saldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Função nivelJogador: retorna o nível do jogador com base no Saldo de Vitórias
function nivelJogador(saldoVitorias) {
  let nivel;

  if (saldoVitorias < 10) {
    nivel = 'Ferro';
  } else if (saldoVitorias <= 20) {
    nivel = 'Bronze';
  } else if (saldoVitorias <= 50) {
    nivel = 'Prata';
  } else if (saldoVitorias <= 80) {
    nivel = 'Ouro';
  } else if (saldoVitorias <= 90) {
    nivel = 'Diamante';
  } else if (saldoVitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  return nivel;
}

let opcao;
do {
  console.log(`
    *************************************
    * CALCULADORA DE PARTIDAS RANKEADAS *
    *************************************
  `);
  const qtdVitorias = Number(prompt('Digite a quantidade de vitórias: '));
  const qtdDerrotas = Number(prompt('Digite a quantidade de derrotas: '));

  const saldo = saldoVitorias(qtdVitorias, qtdDerrotas);
  const nivel = nivelJogador(saldo);

  console.log(`O Herói tem saldo de ${saldo} e está no nível ${nivel.toUpperCase()}.\n`);

  opcao = prompt('Deseja analisar a classificação de outro jogador? 1-Sim 2-Não: ');
  console.log('\n\n')
} while (opcao !== '2')