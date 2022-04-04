var array1 = [5, 2, 1, -10, 8]
var array2 = [5, 2, 1, -9, 3, 7]

const union = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}

console.log(union(array1, array2))
