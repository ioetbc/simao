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

  const mapImagesToGrid = (image) => {
    switch (image.grid) {
      case 1:
        image.offsetX = window.innerWidth - image.width / 2
        image.offsetY = window.innerHeight - image.height / 2
        break
      case 2:
        image.offsetX = window.innerWidth * 2 - image.width / 2
        image.offsetY = window.innerHeight - image.height / 2

        break
    }
    return {
      x: image.offsetX,
      y: image.offsetY,
    }
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

  const mouseClicked = () => {
    for (let x = 0; x < bubbles.length; x++) {
      const bubbleClicked = bubbles[x].clicked(mouseX, mouseY)
      if (bubbleClicked) {
        bubbles[x].src.resize(1000, 1000)
      }
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
