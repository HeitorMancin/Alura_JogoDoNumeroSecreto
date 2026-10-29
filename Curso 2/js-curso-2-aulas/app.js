let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if ( quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

 function mensagemInicial() {
    textoNaTela('h1', 'Jogo do Número Secreto');
    textoNaTela('p', 'Escolha um número entre 1 e 10');
}


mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        textoNaTela('h1', 'Parabéns! Você acertou o número secreto!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        textoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        tentativas++;
        limparCampo();
        if (chute > numeroSecreto) {
            textoNaTela('p', 'O número secreto é menor que ' + chute);
        } else {
            textoNaTela('p', 'O número secreto é maior que ' + chute);
        }

    }
}

function reiniciarjogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;   
    mensagemInicial();
    documento.getElementById('reiniciar').setAttribute('disabled', true);
}