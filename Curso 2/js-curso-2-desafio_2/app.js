function calculaIMC(peso,altura){
    let imc = peso / (altura * altura);
    return imc;
}

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);


function calcularReal(valorEmReal, cotacaoDolar){
    let cotacaoDolar = 4.80;
    let valorEmReal = valorReal * cotacaoDolar;
    return valorEmReal.toFixed(2);
}

function calcularAreaEPerimetro(largura, altura){
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);
}

console.log(`A área da sala é ${area} e o perímetro é ${perimetro}`);


function calcularAreaCirculo(raio){
    let PI = 3.14;
    let area = PI * Math.pow(raio, 2);
    let perimetro = 2 * PI * raio;
    return area.toFixed(2);
}

console.log(`A área do circulo é ${area.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}`);


function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}




listaGenerica = [];

listaDeProgamacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
listaDeProgamacao.push('Java','Ruby','GoLang');


listaNomes = ['Heitor', 'Maria', 'Eduarda'];
console.log(listaDeProgamacao[0]);
console.log(listaDeProgamacao[1]);
console.log(listaDeProgamacao[2]);


