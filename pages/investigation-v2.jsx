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
      offsetX: 0,
      offsetY: 50,
      column: 0,
      row: 1,
    },
    {
      src: '/images/products/granite-nude-bowls/15.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 10,
      column: 1,
      row: 1,
    },
    {
      src: '/images/products/granite-nude-bowls/11.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 150,
      column: 2,
      row: 1,
    },
    {
      src: '/images/products/granite-nude-bowls/17.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 50,
      column: 3,
      row: 1,
    },
    {
      src: '/images/products/granite-nude-bowls/17.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 50,
      column: 4,
      row: 1,
    },
    {
      src: '/images/products/granite-nude-bowls/2.jpg',
      width: 326,
      height: 492,
      offsetX: 200,
      offsetY: 50,
      column: 0,
      row: 2,
    },
    {
      src: '/images/products/granite-nude-bowls/15.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 10,
      column: 1,
      row: 2,
    },
    {
      src: '/images/products/granite-nude-bowls/11.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 150,
      column: 2,
      row: 2,
    },
    {
      src: '/images/products/granite-nude-bowls/17.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 50,
      column: 3,
      row: 2,
    },
    {
      src: '/images/products/granite-nude-bowls/17.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 50,
      column: 4,
      row: 2,
    },
    {
      src: '/images/products/granite-nude-bowls/2.jpg',
      width: 326,
      height: 492,
      offsetX: 200,
      offsetY: 50,
      column: 0,
      row: 3,
    },
    {
      src: '/images/products/granite-nude-bowls/15.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 10,
      column: 1,
      row: 3,
    },
    {
      src: '/images/products/granite-nude-bowls/11.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 150,
      column: 2,
      row: 3,
    },
    {
      src: '/images/products/granite-nude-bowls/17.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 50,
      column: 3,
      row: 3,
    },
    {
      src: '/images/products/granite-nude-bowls/17.jpg',
      width: 326,
      height: 492,
      offsetX: 100,
      offsetY: 50,
      column: 4,
      row: 3,
    },
  ]

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

  let galleryWidth = 0
  let galleryHeight = 0

  const fatReducer = images.reduce((_, currentValue) => {
    if (currentValue.row === 2) {
      galleryWidth = galleryWidth + currentValue.width
      galleryHeight = galleryHeight + currentValue.height
    }
    return {
      width: galleryWidth,
      height: galleryHeight,
    }
  }, 0)

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

      const left = width * column + shiftgalleryX + -mouseXOffset
      const top = height * row + shiftgalleryY + -mouseYOffset

      p5.image(src, left, top, width, height)
    }
  }

  return <Sketch setup={setup} draw={draw} preload={preload} />
}
