// Utilização de arrow function
 const subtrair = (a, b) => a - b;
 console.log(subtrair(4, 2))

// Utilização de uma função dentro de outra função
 const utilizaOperacao = (a, b, operacao) => operacao(a, b)
 console.log(utilizaOperacao(4, 2, subtrair))

// Função que retornaoutra função
const somarX = (x) => (y) => x+y;
const somar2 = somarX(2);
console.log(somar2(9));