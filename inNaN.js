// Para grantir que os valores que forem passados sejam números. Para isso usamos a função IsNaN que verificará se o valor passado é um numero. caso não seja será mostrada a mensagem de erro por meio do throw.
class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}
class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}
class Quadrado {
    constructor(base, altura) {
        // IsNaN = não é um número, e throw exibirá um amensagem de erro.
        if (isNaN(base) || isNaN(altura)) { throw "informação não numérica" }
        this.base = base;
        this.altura = altura;
        // Atributo não essencial
        this.cor = undefined
    }
}

const quadrado1 = new Quadrado("11", "doze")
    // Atribuindo uma cor
quadrado1.cor = "blue";
console.log(quadrado1)