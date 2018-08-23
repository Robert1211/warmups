console.log("connected");


a = [1,2,3,4,5]
b = a.slice();

for (var i = 0; i < a.length; i++) {
 b.push( a[i] );
 // console.log( a[i]);

}

console.log(b);

const fib = function(num) {
  let series = [1,1]
  for (var i = 2; i < num; i++) {
    series[i] = series[i - 1] + series[i - 2]
  }
  console.log(series);
}

console.log( fib(10) );


const fib2 = function(num) {

  if (num <= 2 ) {
    return 1
  } else {
    return ( fib2(num-1) + fib(num-2) )
  }


}

console.log( fib2(12) );


const c = {name: "john", age: 100};
{ n, m } => {c.name, c.age}
