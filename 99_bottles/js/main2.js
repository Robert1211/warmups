const beer = {

  pluralise: function ( num ) {
    if (num ===1) {
      return "1 bottle of beer"
    } else if ( num === 0 ) {
      return "no more bottles of beer"
    } else {
      return num + " bottles of beer"
    }
  },

  action: function (num) {
    if (num === 1) {
      return "Take one down, pass it around"
    } else if ( num === 0) {
      return "Go to the store, buy some more"
    } else {
      return "Take one down, pass it around"
    }
  },

  getMoreBeer: function (num) {
    if (num === 0) {
      return 99;
    } else {
      return (num - 1);
    }
  },

  makeVerse: function (num) {
    let verse1 = `${ this.pluralise(num) } on the wall, ${ this.pluralise( num)}`
    let verse2 = `${ this.action( num) }, ${ this.pluralise( this.getMoreBeer (num) ) } bottles of beer on the wall`

    return verse1 + "\n" + verse2
  },

  song: function (startNum, endNum) {
    for (var i = startNum; i >= endNum; i--) {
      console.log( this.makeVerse( i ));
    }
  }




};
