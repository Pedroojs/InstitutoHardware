//decorar o uso do export default e module.exports e readçline-sync
// Importar o módulo readline-sync para ler entradas do usuário
const reader = require('readline-sync');
const Pessoa = require('./Pessoa.js');

const pessoaa = new Pessoa();

//estudar aprofundadamente o try/catch
while (true) {
    try {
        pessoaa.nome = reader.question('Digite o nome: ');
        pessoaa.email = reader.question('Digite o email: ');
        console.log('Nome:', pessoaa.nome);
        console.log('Email:', pessoaa.email);

        //estudar o funcionamento do loop

        break; // Sai do loop se não houver erro
    } catch (e) {
        console.error('Erro:', e.message);
        console.log('Tente novamente.\n');
    }
}