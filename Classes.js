// Reutilizando objetos usando classes
class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const pessoa1 = new pessoa("Fred", 32)
console.log(pessoa1)

pessoa1.idade = 33;
console.log(pessoa1)
const pessoa2 = new pessoa("Lanna", 33)
console.log(pessoa2)