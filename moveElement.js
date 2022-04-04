var arr = ["a", "b", "c", "d", "e"]

const moveElement = (arr, from, to) => {
  const copyElem = arr.splice(from, 1)

  return arr
    .slice(0, to === 0 ? 0 : to)
    .concat(copyElem)
    .concat(arr.slice(to))
}

console.log(moveElement(arr, 3, 1))
