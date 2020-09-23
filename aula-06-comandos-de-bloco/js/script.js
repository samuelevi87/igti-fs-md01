console.log('Olá, mundo!');

var title = document.querySelector('h1');
title.textContent = 'Modificado por sl3v1, via text.content';

var num1 = 15;
var num2 = 7;

var soma = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var expo = num1 ** num2;
var mod = num1 % num2;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div.toFixed(2));
console.log(expo);
console.log(mod);

var a1 = 33;
console.log((a1 += 3));
console.log((a1 -= 3));
console.log((a1 *= 3));
console.log((a1 /= 9));

let a = 60;
let b = 6;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

var dia = 5;

switch (dia) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda');
    break;
  case 3:
    console.log('Terça');
    break;
  case 4:
    console.log('Quarta');
    break;
  case 5:
    console.log('Quinta');
    break;
  case 6:
    console.log('Sexta');
    break;
  case 7:
    console.log('Sábado');
    break;
  default:
    console.log('Dia Inválido');
}
a = 7;
b = 70;

//Operador Ternário
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

var diaSemana =
  dia === 1
    ? 'Domingo'
    : dia === 2
    ? 'Segunda'
    : dia === 3
    ? 'Terça'
    : dia === 4
    ? 'Quarta'
    : dia === 5
    ? 'Quinta'
    : dia === 6
    ? 'Sexta'
    : dia === 7
    ? 'Sábado'
    : 'Dia Inválido';

console.log(diaSemana);

// Somatório com While
var numAtual = 1;
var soma = 0;
while (numAtual <= 10) {
  //somatório = somatório + numAtual;
  soma += numAtual;
  numAtual++;
}

console.log('While - A soma é: ' + soma);

var numAtual = 1;
var soma = 0;

do {
  soma += numAtual;
  numAtual++;
} while (numAtual <= 10);

console.log(' DoWhile - A soma é: ' + soma);

var numAtual = 1;
var soma = 0;

for (let numAtual = 1; numAtual <= 10; numAtual++) {
  soma += numAtual;
}
console.log('  For - A soma é: ' + soma);

//Funções


