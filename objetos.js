const pessoa = { nome: "Fred", idade: 32 }
console.log(pessoa.nome)


const quadrado = {
    altura: 10,
    base: 20,
    calculaArea: function() {
        return this.base * this.altura
    }
}
console.log(quadrado.calculaArea())

const agenda = {
    contatos: [{
        nome: "contato1 ",
        telefone: "telefone1",
        email: "email1"
    }, {
        nome: "contato2 ",
        telefone: "telefone2",
        email: "email2"
    }, {
        nome: "contato3 ",
        telefone: "telefone3",
        email: "email3"
    }],
    adicionar: {
        function(contato) {
            this.contatos.push(contato)
        }
    }
}
console.log(agenda.contatos);