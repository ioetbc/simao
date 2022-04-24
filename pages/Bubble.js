// export default class Bubble {
//   constructor({ p5, src, x, y, width, height, id }) {
//     this.x = x
//     this.y = y
//     this.width = width
//     this.height = height
//     this.scaledWidth = width * 2
//     this.scaledHeight = height * 2
//     this.originalWidth = width
//     this.originalHeight = height
//     this.brightness = 0
//     this.image = src
//     this.id = id
//     this.p5 = p5
//   }

//   show(pointerX, pointerY) {
//     this.p5.image(this.image, this.x, this.y, this.width, this.height)
//     this.x = pointerX
//     this.y = pointerY
//   }

//   changeColor(color) {
//     this.brightness = color
//   }

//   intersects(otherBubble) {
//     const distance = dist(this.x, this.y, otherBubble.x, otherBubble.y)
//     return distance < this.width + otherBubble.width
//   }

//   mouseOver(mouseX, mouseY) {
//     if (
//       mouseX > this.x &&
//       mouseX < this.x + this.width &&
//       mouseY > this.y &&
//       mouseY < this.y + this.height
//     ) {
//       this.width = this.scaledWidth
//       this.height = this.scaledHeight
//     } else {
//       this.width = this.originalWidth
//       this.height = this.originalHeight
//     }
//   }

//   move(mouseX, mouseY) {
//     // const x = mouseX / 100
//     // const y = mouseY / 100
//     // this.x += this.p5.random(-x, x)
//     // this.y += this.p5.random(-y, y)
//   }

//   scale() {
//     this.width *= 2
//     this.height *= 2
//   }

//   shrink() {
//     this.width /= 2
//     this.height /= 2
//   }

//   clicked(mouseX, mouseY) {
//     return (
//       mouseX > this.x &&
//       mouseX < this.x + this.width &&
//       mouseY > this.y &&
//       mouseY < this.y + this.height
//     )
//   }
// }
