const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: {
      f: 4,
    },
  },
}

const get = (obj, path, defaulValue) => {
  const keys = path.split(".")
  let currentObj = obj

  while (keys.length) {
    const currKey = keys.shift()
    if (currentObj[currKey]) {
      currentObj = currentObj[currKey]
    } else {
      return defaulValue
    }
  }

  return currentObj
}

console.log(get(obj, "a.b.c", null))
