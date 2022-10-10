import { useState } from 'react'
import Cookies from 'js-cookie'
import { useEffect } from 'react/cjs/react.development'

import { Title } from '../components/Title'

export default function Home() {
  const [hasShownAnimation, setHasShownAnimation] = useState(false)

  useEffect(() => {
    setHasShownAnimation(Cookies.get('headerAnimationRun'))
  }, [])
  return (
    <>
      <div className='absolute bg-cover md:bg-cover bg-center bg-no-repeat bg-size h-screen w-screen bg-[url("/images/products/granite-nude-bowls/11.jpg")] md:bg-[url("/images/bg-desktop.jpeg")]'></div>
      <Title hasShownAnimation={hasShownAnimation} />
    </>
  )
}
