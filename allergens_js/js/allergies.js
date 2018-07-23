console.log("connected");

// # Allergies Warmup
//
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// * eggs (1)
// * peanuts (2)
// * shellfish (4)
// * strawberries (8)
// * tomatoes (16)
// * chocolate (32)
// * pollen (64)
// * cats (128)
//
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.

const allergies = {
  scores: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawbs",
    16: "tomatoes",
    32: "choclate",
    64: "pollen",
    128: "cats"
  },

  getTheNumbers: function() {
    return Object.keys(this.scores).reverse().map(Number);
  },

  makeIndividualNumberList: function(num) {
    let allNumbers = this.getTheNumbers();
    let list = [];

    // for (var i = 0; i < numbers.length; i++) {
    //   if (num >= numbers[i]) {
    //     num = num - numbers[i];
    //     list.push(numbers[i]);
    //   }
    // }

    allNumbers.forEach( function(element) {
      if (num >= element) {
        num -= element
        list.push(element)
      }
    })
    return list.reverse()
  },

  showWordList: function (num) {
    let list = this.makeIndividualNumberList(num)
    let scores = this.scores

    list = list.map( function(key) {
      // key = +key

      return scores[key]
    })

    return list
  }
};

a = allergies.getTheNumbers();
console.log(a);

b = allergies.makeIndividualNumberList(5);
console.log(b);

c = allergies.showWordList(5);
console.log(c);

d = allergies.showWordList(34);
console.log(d);


//
// function Allergies(num) {
//   let scores = {
//     1: "eggs",
//     2: "peanuts",
//     4: "shellfish",
//     8: "strawbs",
//     16: "tomatoes",
//     32: "choclate",
//     64: "pollen",
//     128: "cats"
//   };
//
//   // let this.scores = this.scores.bind(this)
//   let scoreNumbers = Object.keys(scores).reverse();
//
//   let individualNumbers = scoreNumbers.filter( function () {
//
//   })
//
//
//
//
//   return {
//     list: function () {
//       return individualNumbers
//     }
//   }
// }
//
// module.exports = Allergies;
