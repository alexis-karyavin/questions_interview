const arr = [3, 5, 7, 8, 5]

const removeItem = (arr, removeItem) =>
  arr.filter((item) => item !== removeItem)

console.log(removeItem(arr, 5))
