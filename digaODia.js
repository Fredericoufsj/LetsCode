let hoje = new Date().getDay();
// O comando new Date().getDay() retorna o dia atual como um inteiro, começando em 0 no domingo e indo até 6 para o sábado.
let dia;
switch (hoje) {
    case 0:
        dia = 'Domingo'
        break;
    case 1:
        dia = 'Segunda-feira'
        break;
    case 2:
        dia = 'Terça-feira'
        break;
    case 3:
        dia = 'Quarta-feira'
        break;
    case 4:
        dia = 'Quinta-feira'
        break;
    case 5:
        dia = 'Sexta-feira'
        break;
    case 6:
        dia = 'Sabado'
        break;
}
console.log(dia)