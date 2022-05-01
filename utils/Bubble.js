let vx = 0
let vy = 0

export default class Bubble {
  constructor(x, y, width, height, img, parallex, id, p5, type, url = false) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.brightness = 0
    this.image = img
    this.parallex = parallex
    this.id = id
    this.p5 = p5
    this.url = url
    this.type = type
  }

  move() {
    this.x += this.p5.random(-5, 5)
    this.y += this.p5.random(-5, 5)
  }

  isProduct() {
    return this.url
  }

  show() {
    this.p5.image(this.image, this.x, this.y, this.width, this.height)
    this.x += vx
    this.y += vy

    if (this.type === 'product') {
      this.move()
    }

    vx *= 0.95
    vy *= 0.95
  }

  contains(mouseX, mouseY) {
    const distance = dist(mouseX, mouseY, this.x, this.y)
    return distance < this.width
  }

  changeColor(color) {
    this.brightness = color
  }

  intersects(otherBubble) {
    const distance = dist(this.x, this.y, otherBubble.x, otherBubble.y)
    return distance < this.width + otherBubble.width
  }

  mouseOver(mouseX, mouseY) {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    )
  }

  clicked(mouseX, mouseY) {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    )
  }

  swiped = (event) => {
    vx += event.velocityX * this.parallex
    vy += event.velocityY * this.parallex
  }
}
