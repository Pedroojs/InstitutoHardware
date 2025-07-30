//decorar o uso do export default e module.exports e readçline-sync
// Importar o módulo readline-sync para ler entradas do usuário
const reader = require('readline-sync');
const Pessoa = require('./Pessoa.js');
const PessoaFisica = require('./PessoaFisica.js');
const PessoaJuridica = require('./PessoaJuridica.js');

const pessoaa = new PessoaJuridica();

//estudar aprofundadamente o try/catch
while (true) {
    try {
        pessoaa.nome = reader.question('Digite o nome: ');
        pessoaa.email = reader.question('Digite o email: ');
        //pessoaa.cnpj = reader.question('Digite o CPF (11 dígitos): ');
        pessoaa.cnpj = reader.question('Digite o CNPJ (14 dígitos): ');

        // Exibir os dados da pessoa física
        
        console.log('\nDados da Pessoa Física:');
        console.log('Nome:', pessoaa.nome);
        console.log('Email:', pessoaa.email);
        //console.log('CPF:', pessoaa.cnpj);
        console.log('CNPJ:', pessoaa.cnpj);
const Pessoa = require('./Pessoa.js');
class PessoaJuridica extends Pessoa {
    #cnpj;
    constructor(nome, email) {
        super(nome, email);
    }

    set cnpj(cnpj) {
        if (typeof cnpj !== 'string' || !/^\d{14}$/.test(cnpj)) {
            throw new Error('O CNPJ deve ser uma string com exatamente 14 dígitos.');
        }
        if (cnpj.trim() === '') {
            throw new Error('CNPJ não pode ser vazio.');
        }
        if (this.#cnpj === cnpj) {
            throw new Error('O CNPJ não pode ser o mesmo que o anterior.');
        }
        this.#cnpj = cnpj;
    }

    get cnpj() {
        return this.#cnpj;
    }
}

module.exports = PessoaJuridica;
        //estudar o funcionamento do loop

        break; // Sai do loop se não houver erro
    } catch (e) {
        console.error('Erro:', e.message);
        console.log('Tente novamente.\n');
    }
}