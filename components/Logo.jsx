import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export const Logo = ({ showAnimation, className }) => {
  const [hasShownAnimation, setHasShownAnimation] = useState(false)
  const router = useRouter()
  const transition = { duration: 0.5, ease: 'easeInOut' }

  useEffect(() => {
    setHasShownAnimation(
      showAnimation ? true : Cookies.get('headerAnimationRun'),
    )
  }, [])

  return (
    <div className={className}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35.03 12.03"
        className="w-16 md:w-20 mb-auto cursor-pointer"
        onClick={() => router.push('/')}
      >
        <defs>
          <clipPath id="clip-path" transform="translate(-0.48 -0.81)">
            <rect
              style={{ fill: 'none' }}
              className="cls-1"
              width="36"
              height="13.65"
            />
          </clipPath>
        </defs>
        <g className="cls-2" style={{ clipPath: 'url(#clip-path)' }}>
          <motion.path
            style={{ fill: '#333' }}
            className="cls-3"
            d="M4.24,12.84A3.76,3.76,0,0,1,.48,10l.89-.26A2.81,2.81,0,0,0,4.29,12,2.3,2.3,0,0,0,6.85,9.79C6.85,8.23,5.49,7.7,4,7.09S1,5.78,1,3.79a3,3,0,0,1,3.21-3A3.34,3.34,0,0,1,7.31,2.66l-.74.4A2.51,2.51,0,0,0,4.18,1.59,2.11,2.11,0,0,0,1.86,3.68c0,1.46,1.19,2.05,2.45,2.58,1.62.67,3.48,1.24,3.48,3.38a3.28,3.28,0,0,1-3.55,3.2"
            transform="translate(-0.48 -0.81)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={!hasShownAnimation && { ...transition, delay: 0.5 }}
          />

          <motion.path
            style={{ fill: '#333' }}
            d="M27.62,1.79V6.68h3.73a2.48,2.48,0,0,0,2.57-2.54,2.36,2.36,0,0,0-2.61-2.35Zm-.84-.74h4.6c2.33,0,3.46,1.51,3.46,3.06a3.15,3.15,0,0,1-2.56,3.13l3.24,5.34h-1l-3-5.17H27.62v5.17h-.84Z"
            transform="translate(-0.48 -0.81)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={!hasShownAnimation && { ...transition, delay: 1.5 }}
          />

          <motion.path
            style={{ fill: '#333' }}
            d="M19.3,8.86a4,4,0,0,1-2.87-1.19,3.33,3.33,0,0,0-4.72,0l-.51-.51a4.06,4.06,0,0,1,5.74,0,3.34,3.34,0,0,0,4.71,0l.52.51A4,4,0,0,1,19.3,8.86"
            transform="translate(-0.48 -0.81)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={!hasShownAnimation && { ...transition, delay: 1 }}
          />
        </g>
      </svg>
    </div>
  )
}
