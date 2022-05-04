export default class Bubble {
  constructor({ p5, src, x, y, width, height }) {
    this.p5 = p5
    this.src = src
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  show() {
    this.p5.image(this.src, this.x, this.y, this.width, this.height)
  }

  clicked(mouseX, mouseY) {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    )
  }
}
