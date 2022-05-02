import React from 'react'
import dynamic from 'next/dynamic'
// import { images } from '../database/investigation'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default function Home() {
  let mouseX = 0
  let mouseY = 0
  const easing = 0.04

  const images = [
    {
      src: '/images/products/granite-nude-bowls/2.jpg',
      width: 326,
      height: 492,
      offsetX: 200,
      offsetY: 50,
    },
    {
      src: '/images/products/granite-nude-bowls/15.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 10,
    },
    {
      src: '/images/products/granite-nude-bowls/11.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 150,
    },
    {
      src: '/images/products/granite-nude-bowls/17.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 50,
    },
  ]

  const galleryWidth = images.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.width + currentValue.offsetX,
    0,
  )

  const galleryHeight = images.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.height + currentValue.offsetY,
    0,
  )

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
    // p5.noCursor()
  }

  const getRow = ({ index }) => {
    if (index <= 4) {
      return 1
    } else if (index > 4 && index <= 8) {
      return 2
    } else {
      return 3
    }
  }

  const draw = (p5) => {
    p5.background(255, 254, 242)
    const targetX = p5.mouseX
    const dx = targetX - mouseX
    mouseX += dx * easing * 2
    const targetY = p5.mouseY * 3
    const dy = targetY - mouseY
    mouseY += dy * easing * 2
    console.log({ mouseX: p5.mouseX, mouseY: p5.mouseY })
    // const constrainedX = p5.constrain(mouseX, 400, 1200)
    // const constrainedY = p5.constrain(mouseY, 0, 1200)

    for (let y = 0; y < images.length; y++) {
      for (let x = 0; x < images.length; x++) {
        const { src, offsetX, offsetY, width, height } = images[x]

        const left = width * x + -mouseX + offsetX * x + window.innerWidth / 3
        const top = height * y + -mouseY + offsetY * y + window.innerHeight / 3

        p5.image(src, left, top, width, height)
      }
    }
  }

  return <Sketch setup={setup} draw={draw} preload={preload} />
}
