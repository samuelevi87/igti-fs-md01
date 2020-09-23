function sum(a, b) {
  return a + b;
}

console.log(sum(1,2));

function sumPairs(from, upTo) {
  let sumTot = 0;
  for (let i = from; i <= upTo; i++) {
    if (i % 2 == 0) {
      sumTot += i;
    }
  }
  return sumTot;
}

console.log(sumPairs(1,1))

function sumEven(from, upTo) {
  let sumTot = 0;
  for (let i = from; i <= upTo; i++) {
    if (i % 2 == 1) {
      sumTot += i;
    }
  }
  return sumTot;
}

console.log(sumEven(1,1))

function superSum(from, upTo) {
  var sum = 0;
  for (var i = from; i <= upTo; i++) {
    sum += i;
  }
  return sum;
}

console.log(superSum(1,10))