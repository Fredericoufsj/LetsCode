// Passamos uma função para o Map, e essa função é aplicada a cada item do vetor.
// O Parseint serve para trasnformar string em numero

const vetor = ["10", "20", "30"];
const stringToInt = (x) => parseInt(x);
const vetor2 = vetor.map(stringToInt);
console.log(vetor2)

const vetor3 = vetor2.map(x => x * x);
console.log(vetor3)

// Função que eleva ao quadrado
// const aoQuadrado = (item, indice, vetor2) => vetor2[indice] * item;


// É possível escrever a função diretamente dentro do map.

// O map exige que seja passado pelo menos um parâmetro para a função.Então para usar métodos de um tipo específico de dado também é necessário fazer a declaração de uma função.

const betor = ["a", "b", "c"];
const toUpper = (str) => str.toUpperCase();
const maiusculas = betor.map(toUpper);
console.log(maiusculas)