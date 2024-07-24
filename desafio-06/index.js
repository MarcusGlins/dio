const prompt = require('prompt-sync')();

let opcao;

do {
  console.log(`
    ************************************
    *  CLASSIFICADOR DE NÍVEL DE HERÓI *
    * ********************************** 
  `);

  const nomeHeroi = prompt('Digite => Nome do Herói: ');
  const xpHeroi = Number(prompt('Digite => XP do Herói: '));
  let nivel;

  if (xpHeroi < 1000) {
    nivel = 'Ferro';
  } else if (xpHeroi < 2001) {
    nivel = 'Bronze';
  } else if (xpHeroi < 5000) {
    nivel = 'Prata';
  } else if (xpHeroi < 7000) {
    nivel = 'Ouro';
  } else if (xpHeroi < 8000) {
    nivel = 'Platina';
  } else if (xpHeroi < 9000) {
    nivel = 'Ascendente';
  } else if (xpHeroi < 10000) {
    nivel = 'Imortal';
  } else {
    nivel = 'Radiante';
  }

  console.log(`
    O Herói ${nomeHeroi.toUpperCase()} está no nível de ${nivel.toUpperCase()}.
  `);

  opcao = Number(prompt('Deseja continuar? 1-SIM 2-NÃO: '));

} while (opcao === 1);