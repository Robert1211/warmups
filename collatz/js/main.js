// The Collatz conjecture
// The Collatz conjecture is a conjecture in mathematics named after Lothar Collatz, who first proposed it in 1937. It's also known as the 3n + 1 conjecture, the Ulam conjecture, the Kakutani's problem, the Thwaites conjecture, Hasse's problem or the Syracuse problem, the sequence of numbers that results is referred to as the hailstone numbers or the wondrous numbers.
//
// The problem is defined as follows:
//
// Take any positive integer n. If n is even, divide it by 2 to get n / 2.
// If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
// Repeat the process indefinitely.
// The conjecture is that no matter what number you start with, you will always eventually reach 1.
//
// Task
// Write a program that given a number, verifies this conjecture for all positive numbers greater than one. Ideally your program will output when it has completed, how many cycles it ran for and all the steps it took to reach the end.

const collatz = function(num) {

  let collection = [num];
  let currentNum
  let newNum

  while ( collection[ collection.length - 1] > 1) {
    currentNum = collection[ collection.length - 1]

    if ( currentNum % 2 === 0) {
      newNum = currentNum / 2
    } else {
      newNum = (currentNum * 3) + 1
    }

    collection.push( newNum)
    // console.log(collection);
  }

  let steps = collection.length
  console.log(`number of steps ${steps}, collection: ${collection}`);


}






























// const collatz = function(num) {
//
//   let collection = [num]
//   let newNumber
//   let currentNumber
//
//   while (collection[ collection.length - 1 ] > 1) {
//     currentNumber = collection[ collection.length - 1 ]
//     if (currentNumber % 2 === 0) {
//       newNumber = currentNumber / 2
//     } else {
//       newNumber = (currentNumber * 3) + 1;
//     }
//     collection.push(newNumber)
//     console.log(collection);
//   }
//
//   let steps = collection.length
//   let sequence = collection.join(", ")
//
//   console.log(steps, sequence);
// }
//

























// const collatz = function( num ){
//
//   // This collection will be where we store each value for comparison. With each iteration we will add the new value to the end and target that value with `collection[ collection.length - 1 ]`.
//   let collection = [ num ];
//
//   const makeCollection = function(){
//
//     while ( collection[collection.length - 1] > 1 ){
//       // Using debugger to stop the code to show the collection being collated with each iteration.
//       // debugger;
//
//       const currentNum = collection[ collection.length - 1 ];
//
//       // This ternary will do two things for us, it will evaluate if the number give is odd or even then run the corresponding code.
//       const nextIndex = currentNum % 2 === 0 ? ( currentNum / 2 ) : (( currentNum * 3 ) + 1 );
//
//       collection.push( nextIndex );
//
//     }
//
//   };
//
//   // This function will out put the result in the console.
//   const answer = function(){
//     console.log(`The function ran ${ collection.length - 1 } times.`);
//     // We're using join with the delimiter of ', ' to seperate each element.
//     console.log(`The process was: ${ collection.join(', ') }.`);
//   }
//
//   // call both functions otherwise nothing will happen.
//   makeCollection();
//   answer();
//
//   // we have the ability to return an output for a user through the console logs but what about return the data in a format that another programmer might like to use?
//   return {
//     start: num,
//     collection: collection,
//     steps: collection.length - 1
//   }
//
// };
//
// // call the outer function with a console log so we can see what we're returning.
// console.log(collatz(12));
