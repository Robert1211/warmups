console.log("connected");

values = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
}

const letterScore = function(letter) {
  for (let key in values) {
    let letters = values[key]
    if ( letters.indexOf(letter) > -1 ) {
      return +key
    }
  }

  return 1
}

const scrabble = function(word) {
  wordScore = 0

  wordArray = word.toUpperCase().split("")

  for (var i = 0; i < wordArray.length; i++) {
    let letter = wordArray[i]
    wordScore = wordScore + letterScore(letter)
  }
  
  return wordScore
}
