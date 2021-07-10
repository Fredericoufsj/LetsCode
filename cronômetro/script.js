//Passo7 O comando windows.addListener condiciona a execução deste código a um evento. Isso é feito para que o javascript aguarde o html carregar por completo
window.addEventListener("load", () => {
    //Paaso1 Tempo em segundos que queremos
    let sec = 180;

    //Passo2 Div onde os números irão ficar. Estamos pegando o elemento timer lá no html.
    const countDiv = document.getElementById("timer");

    //Passo3 Essa função irá atualizar o contador.
    const secpass = () => {

        //Passo4 Adiciona o "0" na frente dos números menores que 10 para ficar com uma cara melhor.
        let min = Math.floor(sec / 60);
        let segundosRestantes = sec % 60;

        if (segundosRestantes < 10) {
            segundosRestantes = "0" + segundosRestantes;
        }

        if (min < 10) {
            min = "0" + min;
        }
        //Passo5 Vai gerar o formato 02:59
        countDiv.innerHTML = min + ":" + segundosRestantes;

        //Passo3 atualiza o contador
        if (sec > 0) {
            sec = sec - 1;
        } else {
            // o valor"Acabou! será adicionado na countDiv
            countDiv.innerHTML = "Acabou!!!"
        }
    };

    //Passo6 A funcção setInverval executa uma dada funcção em cada intervalo de tempo determinado
    const countDown = setInterval(() => secpass, 1000)
});