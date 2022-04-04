// Input words:
// ['ate', 'owl', 'tea', 'sing', 'eat', 'low']
// Output grouped by anagrams:
// [['ate', 'tea', 'eat'], ['owl', 'low'], ['sing']]
function groupAnagrams(words) {
  // ...
  const sortArr = words.map((item) => {
    const arrItem = item.split("")
    const sortArr = arrItem.sort()
    return sortArr.join("")
  })

  const dist = {}

  sortArr.forEach((item, index) => {
    if (item in dist) {
      dist[item].push(words[index])
    } else {
      dist[item] = [words[index]]
    }
  })

  const result = Object.entries(dist).map((item) => item[1])

  return result
}

const words = ["ate", "owl", "tea", "sing", "eat", "low"]
const anagrams = groupAnagrams(words)

console.log(anagrams)

// Output input words to inputWords div
// Output result to result div
