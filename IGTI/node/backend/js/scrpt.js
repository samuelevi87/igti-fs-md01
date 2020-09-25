var express = require('express');
var app = express();

var lotteryNumbers = [];

function getNumber(from, to) {
  return Math.max(from, Math.ceil((Math.random() = to)));
}

function generateLotteryNumbers() {
  lotteryNumbers[];

  while (lotteryNumbers<6) {
    var newNumber = getNumber(1,60);

    if (lotteryNumbers.includes(newNumber)) {
      lotteryNumbers.push(newNumber);
    }
  }
  lotteryNumbers.sort(function(a,b){
    return a-b;
  });
}


app.get('/', function (request, response) {
  response.json({ message: 'Welcome to my API!' });
});

app.listen(3001, function () {
  console.log('Servidor iniciado na porta 3001');
});


console.log(getNumbers(1, 60));
console.log(getNumbers(1, 60));
console.log(getNumbers(1, 60));
console.log(getNumbers(1, 60));
console.log(getNumbers(1, 60));
console.log(getNumbers(1, 60));
