// O filter irá filtrar valores que não estejam de acordo com a premissa da função
// No caso abaixo, se o elemento quando for divido por 2 não der resto zero será falso.
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = vetor.filter((x) => x % 2 === 0);
console.log(pares)


//  retirar elementos maior do que um valor limite
const vetor2 = vetor.filter(x => x < 8);
console.log(vetor2)