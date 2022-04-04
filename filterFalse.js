const arr = [NaN, 0, 77, false, -17, "", undefined, 99, null]

const filterFalse = (arr) => arr.filter((item) => !!item)

console.log(filterFalse(arr))
