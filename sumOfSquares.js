const arr = [1, 2, 3, 4, 5]

const sumOfSquares = (arr) =>
  arr.reduce((acc, prevValue) => acc + Math.pow(prevValue, 2))

console.log(sumOfSquares(arr))
