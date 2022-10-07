import React from 'react'
import dynamic from 'next/dynamic'
import { getImages } from '../database/investigation'
import Bubble from '../utils/Bubble'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default function Home() {
  let mouseX = 0
  let mouseY = 0
  const easing = 0.1
  let images = []
  const bubbles = []

  const preload = (p5) => {
    images = getImages(window.innerWidth, window.innerHeight)
    images.forEach((image, index) => {
      p5.loadImage(image.src, (loadedImage) => {
        images[index].src = loadedImage
      })
    })
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef,
    )

    let bubble

    for (let x = 0; x < images.length; x++) {
      const position = mapImagesToGrid(images[x])
      bubble = new Bubble({
        p5,
        src: images[x].src,
        x: -mouseX + position.x,
        y: -mouseY + position.y,
        width: images[x].width,
        height: images[x].height,
      })
      bubbles.push(bubble)
    }
  }

  const mapImagesToGrid = (image) => {
    let offsetX
    let offsetY

    switch (image.grid) {
      case 1:
        offsetX = window.innerWidth - image.width / 2 + image.offsetX
        offsetY = window.innerHeight - image.height / 2 + image.offsetY
        break
      case 2:
        offsetX = window.innerWidth * 2 - image.width / 2 + image.offsetX
        offsetY = window.innerHeight - image.height / 2 + image.offsetY

        break
    }
    return {
      x: offsetX,
      y: offsetY,
    }
  }

  const draw = (p5) => {
    p5.background(255, 254, 242)
    const targetX = p5.mouseX * 2
    const dx = targetX - mouseX
    const targetY = p5.mouseY * 2
    const dy = targetY - mouseY

    mouseX += dx * easing
    mouseY += dy * easing

    for (let x = 0; x < bubbles.length; x++) {
      const position = mapImagesToGrid(images[x])
      bubbles[x].x = -mouseX + position.x
      bubbles[x].y = -mouseY + position.y
      bubbles[x].show()
    }
  }

  const mouseClicked = (p5) => {
    console.log('clicked on')
    for (let x = 0; x < bubbles.length; x++) {
      const clickedOnImage = bubbles[x].clicked(p5.mouseX, p5.mouseY)
      // TODO hide the images that were not clicked if an image was clicked
      // if (clickedOnImage) {
      //   bubbles[x].hide()
      // }
    }
  }

  return (
    <Sketch
      setup={setup}
      draw={draw}
      preload={preload}
      mouseClicked={mouseClicked}
    />
  )
}
