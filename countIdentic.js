const arr = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]
const arr1 = [15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]

const countIdentic = (arr) => {
  const countNumbers = {}

  arr.forEach((item) => {
    if (item in countNumbers) {
      countNumbers[item] += 1
    } else {
      countNumbers[item] = 1
    }
  })

  return Object.keys(countNumbers).length
}

console.log(countIdentic(arr1))
