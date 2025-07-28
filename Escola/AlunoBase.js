class AlunoBase {
    #nome;
    #idade;
    #sexo;

    constructor(nome, idade, sexo) {
        this.#nome = nome;
        this.#idade = idade;
        this.#sexo = sexo;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get sexo() {
        return this.#sexo;
    }
    showStudent() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nSexo: ${this.sexo}\n`;
    }
}

module.exports = AlunoBase;