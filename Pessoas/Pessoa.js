class Pessoa {
    #nome;
    #email;

    //estudar o funcionamento desse set 
    //estudar as verificações de tipo e valor
    //estudar o uso de throw e Error
    //estudar o uso de get
    set nome(nome) {
    if (
        typeof nome !== 'string' ||
        nome.trim() === '' ||
        /\d/.test(nome) // verifica se há dígitos
    ) {
        throw new Error('O nome deve ser uma string não vazia e não pode conter números.');
    }
    this.#nome = nome;
}

    get nome() {
        return this.#nome;
    }

    set email(email) {
        this.#email = email;
    }
    get email() {
        return this.#email;
    }
}

module.exports = Pessoa;

