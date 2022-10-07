export default class Bubble {
  constructor({ p5, src, x, y, width, height }) {
    this.p5 = p5
    this.src = src
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.originalWidth = width
    this.originalHeight = height
    this.image = null
  }

  show() {
    this.image = this.p5.image(
      this.src,
      this.x,
      this.y,
      this.width,
      this.height,
    )
  }

  scale() {
    this.image.resize(0, window.innerHeight)
  }

  clicked(mouseX, mouseY) {
    const mouseover =
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height

    console.log('mouseover', mouseover)
    if (!mouseover) {
      console.log('not over')
      this.width = this.originalWidth
      this.height = this.originalHeight
    }
    if (mouseover) {
      const ratio = Math.min(
        window.innerWidth / this.width,
        window.innerHeight / this.height,
      )
      this.width = this.width * ratio
      this.height = this.height * ratio
    }
    return mouseover
  }
}
