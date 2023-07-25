class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const pessoa = new Pessoa('Ana', 28);
pessoa.saudacao(); // Saída: Olá, meu nome é Ana e eu tenho 28 anos.
