function Rabbit(name) {
  this.name = name
  this.say = function () {
    console.log("Hello, my name is " + this.name)

    return this
  }

  return this
}

const rabbit = new Rabbit("Buks Bunny")

console.log(rabbit.say().say())
