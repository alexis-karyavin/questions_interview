const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sumAndMultiplication = (arr) => {
  const sum = arr.reduce((acc, prevValue) => acc + prevValue)
  const multi = arr.reduce((acc, prevValue) => acc * prevValue)

  return " Сумма : " + sum + " Произведение : " + multi
}

console.log(sumAndMultiplication(arr))
