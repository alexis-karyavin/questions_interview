const arr1 = [1, 2, 3, 4, 4, 5]
const arr2 = [4, 4, 5, 6, 7]

const intersection = (arr1, arr2) => {
  // return arr1.filter((item) => arr2.includes(item))
  const res = []
  const map = arr1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1
    return acc
  }, {})

  arr2.forEach((item) => {
    const count = map[item]
    if (count && count > 0) {
      res.push(item)
      map[item]--
    }
  })

  return res
}

console.log(intersection(arr1, arr2))
