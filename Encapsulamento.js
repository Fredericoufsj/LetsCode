// Encapsulamento é o conceito de negar o acesso aos atributos de uma classe diretamente, seja para leitura ou escrita.
// variáveis dentro de funções não são acessíveis de fora da função, então poderíamos fazer encapsulamento usando elas.
class Quadrado {
    constructor(lado, altura) {
        this.lado = lado;
        this.altura = altura;
        // Aqui usamos let no lugar de this. para indicar que a cor é uma informação privada da classe Quadrado, de forma que ela não está acessível para leitura ou alteração de fora dessa classe.
        let cor = 'blue'
            // para poder utilizar a variável local fora do escopo é preciso criar a seguinte função:
        this.getCor = () => { return cor }
    }
}
// Criando um novo objeto
const quadrado1 = new Quadrado(5, 4);
// Imprimindo, mas lembrando de usar o get.cor para acessar a variável local
console.log(quadrado1.getCor())