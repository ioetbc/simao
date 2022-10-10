import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import yn from 'yn'

import { Navigation } from './Navigation'
import { Logo } from './Logo'

export const Header = () => {
  const [hasShownAnimation, setHasShownAnimation] = useState(false)

  useEffect(() => {
    setHasShownAnimation(yn(Cookies.get('headerAnimationRun')))
  }, [])

  return (
    <div className="flex fixed z-10 justify-between mr-4 mr-4 md:mr-0 md:ml-0 pt-4 h-14 fixed top-0 pl-4 md:pl-8 pr-4 md:pr-8 md:pt-8 md:mb-8 w-full md:h-28">
      <div>
        <Logo showAnimation={hasShownAnimation} />
      </div>
      <Navigation hasShownAnimation={hasShownAnimation} />
    </div>
  )
}
