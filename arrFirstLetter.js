var str = "Каждый охотник желает знать, где сидит фазан."

const arrFirstLetter = (str) => str.split(" ").map((item) => item[0])

console.log(arrFirstLetter(str))
