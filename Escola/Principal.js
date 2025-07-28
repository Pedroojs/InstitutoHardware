const AlunoBase = require('./AlunoBase');
const AlunoIfb = require('./AlunoIfb');

const Pedro = new AlunoBase('Pedro', 17, 'Masculino');
const Carol = new AlunoIfb('Carol', 22, 'Feminino', '2023.1234');

console.log(Carol.showStudent());
console.log(Pedro.showStudent());