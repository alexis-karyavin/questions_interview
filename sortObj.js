var litmir = [
  { author: "Хэленка", title: "Улетела сказка" },
  { author: "Коул Кресли", title: "Восстание Аркан" },
  { author: "Райчел Мид", title: "Золотая лилия" },
]

const sortObj = (arr) =>
  arr.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    } else if (a.title > b.title) {
      return 1
    }
    return 0
  })

console.log(sortObj(litmir))
