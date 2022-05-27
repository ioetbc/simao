import { motion } from 'framer-motion'
import Cookies from 'js-cookie'

const transition = { duration: 0.5, ease: 'easeInOut' }

export const Title = ({ hasShownAnimation }) => {
  const handleAnimationComplete = () => {
    Cookies.set('headerAnimationRun', true, { expires: 1 })
  }
  return hasShownAnimation ? (
    <Content />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ...transition, delay: 2 }}
      className="absolute bottom-4 left-4 md:bottom-12 md:left-8 z-10"
      onAnimationComplete={handleAnimationComplete}
    >
      <Content />
    </motion.div>
  )
}

const Content = () => {
  return (
    <div className="absolute bottom-4 left-4 md:bottom-12 md:left-8 z-10">
      <h1 className="uppercase text-2xl relative">sim&Atilde;o romualdo</h1>
      <p className="mt-2 text-xl">Shaped by emotion, informed by nature</p>
    </div>
  )
}
