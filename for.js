let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let numero of vetor) {
    console.log(numero)
}

// Nesse formato do for, acessamos o vetor pelo indice
for (let indice in vetor) {
    console.log(indice, vetor[indice])
}

// O comando pop() remove um elemento do final e o push adiciona.
// vetor.pop();
// Para remover um elemento do começo do vetor - vetor.unshift() Para adicionar vetor.shift();