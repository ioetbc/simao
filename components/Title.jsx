import { motion } from 'framer-motion'

const transition = { duration: 0.5, ease: 'easeInOut' }

export const Title = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ...transition, delay: 2 }}
    className="absolute bottom-4 left-4 md:bottom-12 md:left-16 z-10"
  >
    <h1 className="uppercase text-2xl relative">sim&Atilde;o romualdo</h1>
    <p className="mt-2 text-xl">Shaped by emotion, informed by nature</p>
  </motion.div>
)
