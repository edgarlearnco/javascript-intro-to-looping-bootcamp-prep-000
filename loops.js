function forLoop (arr) {
  for (var i = 0; i < 25; i++) {
    arr.push(`I am a ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return arr
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
  return "done"
}


function doWhileLoop (arr) {
  do {
    //delete arr[0]
    arr = arr.splice(1)
  } while (arr.length > 0 && Math.random() >= 0.5)
  return arr
}
