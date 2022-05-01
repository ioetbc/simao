import React, { useEffect, useState } from 'react'
import { images } from '../database/investigation'

export default function Home() {
  useEffect(() => {
    const container = document.querySelector('.container')
    const canvas = document.querySelector('.canvas')
    const columnOne = document.querySelector('.one')
    const columnTwo = document.querySelector('.two')
    const columnThree = document.querySelector('.three')
    const columnFour = document.querySelector('.four')

    for (let i = 0; i < images.length; i++) {
      const imageDiv = document.createElement('div')
      const image = document.createElement('img')
      console.log(images[i])
      image.setAttribute('src', `${images[i].src}`)
      imageDiv.appendChild(image)

      if (i < 5) {
        columnOne.appendChild(imageDiv)
      } else if (i < 9) {
        columnTwo.appendChild(imageDiv)
      } else if (i < 13) {
        columnThree.appendChild(imageDiv)
      } else {
        columnFour.appendChild(imageDiv)
      }
    }

    window.addEventListener('mousemove', (e) => {
      const easing = 1.09
      console.log(e.clientX)
      const x = e.clientX * easing
      const y = e.clientY * easing

      // canvas.style.transform = `translate(-${x}px, -${y}px)`
      canvas.style.transform = `translate3d(-${x}px, -${y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
    })
  }, [])
  return (
    <div className="container">
      <div className="canvas">
        <div className="column one"></div>
        <div className="column two"></div>
        <div className="column three"></div>
        <div className="column four"></div>
      </div>
    </div>
  )
}
