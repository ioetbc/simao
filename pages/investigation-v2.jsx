import React from 'react'
import dynamic from 'next/dynamic'
// import { images } from '../database/investigation'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default function Home() {
  let mouseX = 0
  let mouseY = 0
  const easing = 0.09

  const images = [
    {
      src: '/images/products/granite-nude-bowls/2.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 100,
    },
    {
      src: '/images/products/granite-nude-bowls/15.jpg',
      width: 326,
      height: 492,
      offsetX: 50,
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
    {
      src: '/images/products/granite-nude-bowls/14.jpg',
      width: 326,
      height: 492,
      offsetX: 120,
      offsetY: 20,
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

  const draw = (p5) => {
    p5.background(255, 254, 242)
    const targetX = p5.mouseX
    const dx = targetX - mouseX
    mouseX += dx * easing
    const targetY = p5.mouseY
    const dy = targetY - mouseY
    mouseY += dy * easing
    for (let y = 0; y < images.length; y++) {
      for (let x = 0; x < images.length; x++) {
        p5.image(
          images[x].src,
          images[x].width * x -
            galleryWidth / 2 +
            mouseX +
            images[x].offsetX * x,
          images[x].height * y -
            galleryHeight / 2 +
            mouseY +
            images[x].offsetY * y,
          images[x].width,
          images[x].height,
        )
      }
    }
  }

  return <Sketch setup={setup} draw={draw} preload={preload} />
}
