function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      array.push(`I am 1 strange loop.`)
	   }
     else if (i>-1 && i <24) {
       array.push(`I am ${i} strange loops.`)
     }
	    else if (i===24) {
		      array.push(`I am ${i} strange loops.`)
		      return array
	 }
     else {
       console.log( "Goodbye." );
     }
   }
}

function whileLoop(x) {
  while (x > 0) {
    console.log(--x)
  }
  if (x === 0) {
    return "done"
  }
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (Math.random() >= 0.5 && array.length > 0);
  return array
}
