import React from 'react'
import { motion } from 'framer-motion'

import Image from './Image'

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

const images = [
  {
    id: 'image-2',
    src: '/images/mngn.jpg',
    variant: item,
  },
  {
    id: 'image-6',
    src: '/images/fbw.jpg',
    variant: item,
  },
  {
    id: 'image-7',
    src: '/images/wffd.jpg',
    variant: item,
  },
  {
    id: 'image-9',
    src: '/images/rjm.jpg',
    variant: item,
  },
  {
    id: 'image-10',
    src: '/images/wdwd.jpg',
    variant: item,
  },
]

export const ProductLoader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        {images.map((image) => (
          <ImageBlock src={image.src} variants={image.variant} id={image.id} />
        ))}
        {/* <motion.div variants={itemMain} className="transition-image">
          <motion.img layoutId="main-image-1" src="/images/ege.jpg" />
        </motion.div> */}
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({ variants, id, src }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      // style={{
      //   top: `${posY}vh`,
      //   left: `${posX}vw `,
      // }}
    >
      <Image
        src={src}
        // fallback="/images/${id}.jpg"
        alt={id}
      />
    </motion.div>
  )
}
