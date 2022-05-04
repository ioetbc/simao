import React from 'react'
import dynamic from 'next/dynamic'
import { images } from '../database/investigation'
import Bubble from '../utils/Bubble'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default function Home() {
  let mouseX = 0
  let mouseY = 0
  const easing = 0.04
  const bubbles = []

  const preload = (p5) => {
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
  }

  const fatReducer = images.reduce(
    (prev, current) => {
      const LONGEST_ROW = 2
      if (current.row === LONGEST_ROW) {
        prev.width += current.width + current.offsetX
        prev.height += current.height + current.offsetY
      }
      return {
        width: prev.width,
        height: prev.height,
      }
    },
    { width: 0, height: 0 },
  )

  const mapGridPosition = (image, mouseX) => {
    let position = { positionX: 0, positionY: 0 }
    console.log('image', image)
    switch (image.grid) {
      case 5:
        position.positionX = image.offsetX
        position.positionY = image.offsetY
        break
    }
    return position
  }

  const draw = (p5) => {
    p5.background(255, 254, 242)
    const targetX = p5.mouseX
    const dx = targetX - mouseX
    const targetY = p5.mouseY
    const dy = targetY - mouseY

    mouseX += dx * easing
    mouseY += dy * easing

    const mouseXOffset = mouseX - p5.width / 2
    const mouseYOffset = mouseY - p5.height / 2
    const shiftgalleryX = (p5.width - fatReducer.width) / 2
    const shiftgalleryY = (p5.height - fatReducer.height) / 2

    for (let x = 0; x < images.length; x++) {
      const { src, offsetX, offsetY, width, height, column, row } = images[x]

      const { positionX, positionY } = mapGridPosition(
        images[x],
        mouseX,
        mouseY,
      )
      console.log('positionX', positionX)
      const bubble = new Bubble({
        p5,
        src,
        x: -mouseX + positionX + window.innerWidth / 2,
        y: -mouseY + positionY + window.innerHeight / 2,
        width,
        height,
      })
      bubble.show()
    }
  }

  const mouseClicked = () => {
    for (let b of bubbles) {
      const bubbleClicked = b.clicked(p5.mouseX, p5.mouseY)
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
