// Teste para primeiro commit
let sinal = "vermelho"
switch (sinal) {
    case "verde":
        console.log("Avance");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Sinal desconhecido");
}

// Operador Ternário
numero = 10
let paridade = numero % 2 != 0 ? 'impar' : 'par';
console.log(paridade)