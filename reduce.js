// O reduce transforma o vetor em um objeto ou um valor.
// O parametro estado funciona como um acumulador enquanto o item são os elementos

const betor = [1, 2, 3, 4, 5, 6];
const soma = betor.reduce((estado, item) => estado + item, 0)
console.log(soma)

// Usando o reducce em objetos


let vetor = [
    { nome: 'nome1', nota1: 5, nota2: 4 },
    { nome: 'nome2', nota1: 4, nota2: 3 },
    { nome: 'nome3', nota1: 7, nota2: 8 },
    { nome: 'nome4', nota1: 2, nota2: 7 },
    { nome: 'nome5', nota1: 9, nota2: 9 },
];
// Vamos usar o reduce para somar todas a notas 1 e 2 dos alunos.Para isso, declaramos primeiro o objeto a ser recebido como estado inicial:

const estadoInicial = {
    somaNota1: 0,
    somaNota2: 0,
    qtdNota1: 0,
    qtdNota2: 0,
};
// Em seguida passamos como parâmetro para o reduce:
const result = vetor.reduce((estado, valor) => {
    return {
        somaNota1: estado.somaNota1 + valor.nota1,
        somaNota2: estado.somaNota2 + valor.nota2,
        qtdNota1: estado.qtdNota1 + 1,
        qtdNota2: estado.qtdNota2 + 1
    };
}, estadoInicial);
console.log(result)


// Reduce em matrizes
const matriz = [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1],
    [6, 1, 5, 2, 3, 4]
];
const somaColuna = (estad, iten) => {
    return [estad[0] + iten[0] + iten[1], estad[1] + iten[2] + iten[3], estad[2] + iten[3] + iten[4]]
};
const vet2 = matriz.reduce(somaColuna, [0, 0, 0]);
console.log(vet2)