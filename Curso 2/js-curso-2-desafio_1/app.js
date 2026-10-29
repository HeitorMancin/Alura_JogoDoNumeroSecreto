let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botao foi clicado')
}

function botaoAlert() {
    alert('Eu amo JS')
}

function botaoPrompt() {
    let cidade = prompt('Fale o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
    let numero1 = prompt('Digite um número inteiro:');
    let numero2 = prompt('Digite outro número inteiro:');
    let soma = parseInt(numero1) + parseInt(numero2);
    alert(`A soma de ${numero1} + ${numero2} é igual a ${soma}`);
}



