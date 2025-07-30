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