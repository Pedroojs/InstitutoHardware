const AlunoBase = require('./AlunoBase');

class AlunoIfb extends AlunoBase {
    #matricula;

    constructor(nome, idade, sexo, matricula) {
        super(nome, idade, sexo);
        this.#matricula = matricula;
    }

    showStudent() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nSexo: ${this.sexo}\nMatrícula: ${this.#matricula}\n`;
    }
}

module.exports = AlunoIfb;