console.log("connected");


const reverse = (input) => {
  let output = [];
  while (input.length > 0) {
    output.push ( input.pop() )
  }

  return output;
}


const flatten = (input, result = []) => {

  for (var i = 0; i < input.length; i++) {
  let element = input[i]


    // if ( is input[i] an array) ) //
    // else push into resuylts

    if ( Array.isArray ( element )) {
      console.log( `flattening - element: ${element}, result - ${result}`);
      flatten ( element, result )
    } else {
      console.log(`pushing ${element} into ${result}`);
      result.push (element)
    }

  }

  return result
}
