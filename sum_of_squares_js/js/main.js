console.log("connected");
//
// Difference Of Squares
// Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.
//
// The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)² = 55² = 3025.
//
// The sum of the squares of the first ten natural numbers is 1² + 2² + ... + 10² = 385.
//
// Hence the difference between the square of the sum of the first ten natural numbers and the sum of the squares of the first ten natural numbers is 3025 - 385 = 2640.

const difference = {

  nums: [1,2,3,4,5,6,7,8,9,10],

  sum: function(a, b) {
    return (a + b);
  },

  square: function(a) {
    return a ** 2
  },

  squareNums: function() {
    return this.nums.map(this.square)
  },

  sumOfNaturals: function() {
    return this.nums.reduce(this.sum)
  },

  sumOfSquares: function() {
    return this.squareNums().reduce(this.sum)
  },

  squareOfSum: function() {
    return this.square( this.sumOfNaturals() )
  },

  difference: function() {
    return this.squareOfSum() - this.sumOfSquares()
  }
}

a = difference.difference()
console.log(a);
