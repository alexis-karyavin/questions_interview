const arr1 = [1, 2, 3, 4, 5]
const arr2 = [4, 5, 6]

const summArr = (arr1, arr2) => {
  const bigArr = arr1.length > arr2.length ? arr1 : arr2
  const smallArr = arr1.length < arr2.length ? arr1 : arr2

  return bigArr.map((item, i) => (smallArr[i] ? item + smallArr[i] : item))
}

console.log(summArr(arr1, arr2))
