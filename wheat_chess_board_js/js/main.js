console.log("connected");

const chess = {

  board: function () {
    return _.range(1,65)
  },

  pow: function(num) {
    return 2 ** (num -1);
  },

  grains: function () {
    return this.board().map(this.pow);
  },

  add: function (a, b) {
    return a + b
  },

  total: function () {
    return this.grains().reduce(this.add)
  }
}
pow
