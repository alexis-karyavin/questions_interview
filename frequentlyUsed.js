var arr1 = [7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 9, 7]

const frequentlyUsed = (arr) => {
  const countElem = {}

  arr.forEach((item) => {
    if (item in countElem) {
      countElem[item]++
    } else {
      countElem[item] = 1
    }
  })

  const maxValue = Object.entries(countElem).sort((a, b) => b[1] - a[1])[0][1]

  return maxValue
}

console.log(frequentlyUsed(arr1))
