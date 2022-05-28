export default class Bubble {
  constructor({ p5, src, x, y, width, height }) {
    this.p5 = p5
    this.src = src
    this.x = x
    this.y = y
    this.width = width
    this.height = height
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
    // mouseX > this.x &&
    //   mouseX < this.x + this.width &&
    //   mouseY > this.y &&
    //   mouseY < this.y + this.height

    console.log('mouseX', mouseX)
    console.log('this.x', this.x)
    console.log('this.width', this.width)
    console.log('this.x + this.width', this.x + this.width)

    if (true) {
      console.log('clicked')
      const ratio = Math.min(
        window.innerWidth / this.width,
        window.innerHeight / this.height,
      )
      this.width = this.width * ratio
      this.height = this.height * ratio
      // this.src.resize(this.width, this.height)
    }
  }
}
