console.log("connected");

const isPrime = function(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


const getRange = function (num) {
  let range = []
  for (var i = 2; i <= num; i++) {
    range.push(i)
  }
  return range;
}


const getPrimeRange = function ( arr ) {
  let primeRange = [];
  for (var i = 0; i < arr.length; i++) {
    if (isPrime( arr[i] )) {
      primeRange.push( arr[i] )
    }
  }
  return primeRange
}


const getPrimeFactors = function (num) {
  let primeFactors = [];

  let range = getRange(num);
  let primeRange = getPrimeRange(range);

  for (var i = 0; i < primeRange.length; i++) {
    while( num % primeRange[i] === 0 ) {
      primeFactors.push( primeRange[i]);
      num = num / primeRange[i];
    }
  }

  return primeFactors
}

let answer = getPrimeFactors(60)
console.log(answer);
