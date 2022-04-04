const obj = {
  a: 1,
  true: 2,
  exec: function () {
    console.log(this)
  },
}

console.log(obj)
