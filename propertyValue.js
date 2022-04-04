var array1 = [
  { author: "Хэленка", title: "Улетела сказка" },
  { author: "Коул Кресли", title: "Восстание Аркан" },
  { author: "Райчел Мид", title: "Золотая лилия" },
]

const propertyValue = (arr, key) => {
  return arr.map((item) => item[key]).join(",")
}

console.log(propertyValue(array1, "title"))
console.log(propertyValue(array1, "author"))
