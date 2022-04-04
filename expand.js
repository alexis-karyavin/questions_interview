var arr1 = [1, [2, [3, [4]]]]
var arr2 = [1, [2], [3, [[4]]], [5, 6]]

const res = []

const expand = (arr) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      expand(item)
    } else {
      res.push(item)
    }
  })
  // var i = 0
  // while (i < arr.length) {
  //   arr = arr.reduce(function (a, b) {
  //     return a.concat(b)
  //   }, [])
  //   i++
  // }
  // return arr
}

console.log(expand(arr2))

// console.log(res)
