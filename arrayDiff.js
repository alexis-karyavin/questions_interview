var arr1 = [1, 2, "a"]
var arr2 = [1, 2, 3, 4, "b"]

const arrayDiff = (arr1, arr2) =>
  arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item))

console.log(arrayDiff(arr1, arr2))
