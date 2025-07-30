const Pessoa = require('./Pessoa.js');

class PessoaFisica extends Pessoa {
    #cpf;
    constructor(nome, idade) {
        super(nome, idade);
        this.#cpf = cpf;
    }

    get Cpf() {
        return this.cpf;
    }

    set Cpf(cpf) {
        if(!/^\d{11}$/.test(cpf)) {
            throw new Error('CPF deve conter exatamente 11 dígitos.');
        }
        if (this.cpf === cpf) {
            throw new Error('O CPF não pode ser o mesmo que o anterior.');
        }
        if (cpf.trim() === '') {
            throw new Error('CPF não pode ser vazio.');
        }
        if (/\D/.test(cpf)) {
            throw new Error('CPF deve conter apenas dígitos.');
        }
        this.cpf = cpf;
    }
    
}

module.exports = PessoaFisica;