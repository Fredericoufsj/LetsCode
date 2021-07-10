// Métodos de Acesso em linguagens como o Java são métodos que permitem a leitura e/ou escrita(a critério do programador) de atributos privados.
class Quadrado {

    constructor(lado, altura) {
        this._cor = 'blue';
        this.lado = lado;
        this.altura = altura;
    }

    get cor() { return this._cor; }
    set cor(cor) { this._cor = cor; }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado);
//Quadrado { cor: 'blue', lado: 3, altura: 4 }
console.log(quadrado.cor);
//blue
quadrado.cor = 'red';
console.log(quadrado.cor);
//red