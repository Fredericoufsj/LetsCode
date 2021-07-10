// conceito de herança é criar uma nova classe que herda os atributoes e métodos de uma classe pai
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, rg, cpf) {
        // O super é para referenciar a classe superior(classe pai)
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao('Fred', 32, 14368, 085320);
console.log(cidadao);