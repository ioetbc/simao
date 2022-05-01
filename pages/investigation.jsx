import React from 'react'
import dynamic from 'next/dynamic'
import { images } from '../database/investigation'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default function Home() {
  let canvas
  let y = 0
  let x = 0
  const easing = 0.09

  const preload = (p5) => {
    images.forEach((image, index) => {
      p5.loadImage(image.src, (loadedImage) => {
        images[index].src = loadedImage
      })
    })
  }

  const setup = (p5, canvasParentRef) => {
    canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight)
      .parent(canvasParentRef)

    canvas.mousePressed(() => {
      console.log('mouse clicked')
    })
  }

  const draw = (p5) => {
    p5.background(255, 254, 242)
    const targetX = p5.mouseX
    const dx = targetX - x
    x += dx * easing

    const targetY = p5.mouseY
    const dy = targetY - y
    y += dy * easing

    // const topRowYPosition = images[0].height * 2
    // const middleRowYPosition = y - images[0].height / 2
    // const bottomRowYPosition = y + images[0].height

    // images.forEach((image, index) => {
    //   const prevImage = index === 0 ? 0 : index - 1

    //   let yPosition

    //   if (index <= 4) {
    //     yPosition = images[0].height * 2
    //   } else if (index > 4 && index <= 9) {
    //     yPosition = y - images[0].height / 2
    //   } else {
    //     yPosition = y + images[0].height
    //   }
    //   p5.image(
    //     image.src,
    //     x - prevImage.width - prevImage.width / 2 - 100,
    //     yPosition - image.offsetY,
    //     image.width,
    //     image.height,
    //   )
    // })

    // top
    const topLevelY = y - images[0].height * 2
    // top middle
    p5.image(
      images[0].src,
      x - images[0].width / 2,
      topLevelY - images[0].offsetY,
      images[0].width,
      images[0].height,
    )
    // top middle left
    p5.image(
      images[1].src,
      x - images[0].width - images[0].width / 2 - 100,
      topLevelY - images[1].offsetY,
      images[1].width,
      images[1].height,
    )
    // top far left
    p5.image(
      images[2].src,
      x - images[1].width - images[1].width - images[1].width / 2 - 150 - 150,
      topLevelY - images[2].offsetY,
      images[2].width,
      images[2].height,
    )
    // top middle right
    p5.image(
      images[3].src,
      x + images[2].width - images[2].width / 2 + 200,
      topLevelY - images[3].offsetY,
      images[3].width,
      images[3].height,
    )
    // top far right
    p5.image(
      images[4].src,
      x + images[3].width + images[3].width - images[3].width / 2 + 250 + 250,
      topLevelY - images[4].offsetY,
      images[4].width,
      images[4].height,
    )

    // MIDDLE
    const msiddleYLevel = y - images[0].height / 2
    p5.image(
      images[0].src,
      x - images[0].width / 2,
      msiddleYLevel,
      images[0].width,
      images[0].height,
    )
    // middle left
    p5.image(
      images[1].src,
      x - images[0].width - images[0].width / 2 - 200,
      msiddleYLevel,
      images[1].width,
      images[1].height,
    )
    // middle far left
    p5.image(
      images[2].src,
      x - images[1].width - images[1].width - images[1].width / 2 - 400,
      msiddleYLevel,
      images[2].width,
      images[2].height,
    )
    // middle right
    p5.image(
      images[3].src,
      x + images[2].width - images[2].width / 2 + 300,
      msiddleYLevel,
      images[3].width,
      images[3].height,
    )
    // far right
    p5.image(
      images[4].src,
      x + images[3].width + images[3].width - images[3].width / 2 + 700,
      msiddleYLevel,
      images[4].width,
      images[4].height,
    )

    // BOTOM
    const topYLevel = y + images[0].height
    p5.image(
      images[0].src,
      x - images[0].width / 2,
      topYLevel - 200,
      images[0].width,
      images[0].height,
    )
    // middle left
    p5.image(
      images[1].src,
      x - images[0].width - images[0].width / 2 - 150,
      topYLevel - 100,
      images[1].width,
      images[1].height,
    )
    // middle far left
    p5.image(
      images[2].src,
      x - images[1].width - images[1].width - images[1].width / 2 - 600,
      topYLevel - 150,
      images[2].width,
      images[2].height,
    )
    // middle right
    p5.image(
      images[3].src,
      x + images[2].width - images[2].width / 2 + 350,
      topYLevel,
      images[3].width,
      images[3].height,
    )
    // far right
    p5.image(
      images[4].src,
      x + images[3].width + images[3].width - images[3].width / 2 + 600,
      topYLevel - 250,
      images[4].width,
      images[4].height,
    )
  }

  return <Sketch setup={setup} draw={draw} preload={preload} />
}
