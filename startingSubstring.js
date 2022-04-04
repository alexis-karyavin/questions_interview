var arr1 = ["Капуста", "Капитал"]
var arr2 = ["Репа", "Редиска"]

const startingSubstring = ([text1, text2]) => {
  let res = ""

  for (let i = 0; i < text1.length; i++) {
    if (text1[i] === text2[i]) {
      res += text1[i]
    } else {
      break
    }
  }
  return res
}

console.log(startingSubstring(arr1))
console.log(startingSubstring(arr2))
