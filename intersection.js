var array1 = [5, 2, 1, -10, 8]
var array2 = [5, 2, 1, -9, 3, 7]

const union = (arr1, arr2) => {
  // const res =
  // return [...arr1, ...arr2]
  return arr1.filter((item) => arr2.includes(item))
}

console.log(union(array1, array2))
