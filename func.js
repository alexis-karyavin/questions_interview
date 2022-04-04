var x = {
  a: 1,
  b: 2,
}

function fn(x) {
  x = 3
}

fn(x)

console.log("x", x)
