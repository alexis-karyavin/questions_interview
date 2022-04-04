var num = 5
var arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18]

const findCouple = (arr, sumNumber) => {
  const res = []

  arr = arr.filter((item, index) => arr.indexOf(item) === index)

  for (let i = 0; i < arr.length; i++) {
    const curNum = arr[i]

    for (let j = i + 1; j < arr.length; j++) {
      const nextNum = arr[j]
      if (curNum + nextNum === sumNumber) {
        res.push([curNum, nextNum])
      }
    }
  }

  return res
}

console.log(findCouple(arr, num))
