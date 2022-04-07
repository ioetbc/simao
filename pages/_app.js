import { useEffect, useState } from 'react'
import '../styles/globals.scss'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

const transition = {}

function MyApp({ Component, pageProps }) {
  const [animatePage, setAnimatePage] = useState(false)
  const router = useRouter()

  // useEffect(() => {
  //   if (router.pathname !== '/plates') setAnimatePage(true)
  // }, [router.pathname])

  return animatePage ? (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{ type: 'ease', duration: 2, times: [0, 0.5, 1] }}
        className="left-panel-background"
        onAnimationComplete={() => setAnimatePage(false)}
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        transition={{ type: 'ease', duration: 2, times: [0, 0.5, 1] }}
        className="right-panel-background"
      ></motion.div>
    </>
  ) : (
    <Component {...pageProps} />
  )
}

export default MyApp
