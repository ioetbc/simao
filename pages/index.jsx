import { useState } from 'react'
import { Title } from '../components/Title'
import Cookies from 'js-cookie'
import { useEffect } from 'react/cjs/react.development'

import styled from 'styled-components'

const VideoStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  height: 100vh;

  @media screen and (min-width: '768px') {
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  }
  video {
    width: 100%;
    height: auto;
    max-height: 900px;
    @media screen and (min-width: '768px') {
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .mute-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`

export default function Home() {
  const [hasShownAnimation, setHasShownAnimation] = useState(false)

  useEffect(() => {
    setHasShownAnimation(Cookies.get('headerAnimationRun'))
  }, [])
  return (
    <>
      <div className='absolute bg-cover md:bg-cover bg-center bg-no-repeat bg-size h-screen w-screen bg-[url("/images/products/granite-nude-bowls/11.jpg")] md:bg-[url("/images/bg-desktop.jpeg")]'></div>
      {/* <Title hasShownAnimation={hasShownAnimation} /> */}
    </>
  )
}
