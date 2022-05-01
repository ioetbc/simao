import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

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
    src: 'images/animation/1.jpg',
    variant: item,
    width: 564,
    height: 376,
  },
  {
    id: 'image-6',
    src: 'images/animation/2.jpg',
    variant: item,
    width: 564,
    height: 376,
  },
  {
    id: 'image-7',
    src: 'images/animation/3.jpg',
    variant: item,
    width: 313,
    height: 470,
  },
  {
    id: 'image-9',
    src: 'images/animation/4.jpg',
    variant: item,
    width: 317,
    height: 480,
  },
  {
    id: 'image-10',
    src: 'images/animation/5.jpg',
    variant: item,
    width: 282,
    height: 423,
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
          <motion.div variants={item} className={`image-block ${image.id}`}>
            <Image
              key={image.id}
              src={require(`../../public/${image.src}`)}
              alt={`animating ${image.id}`}
              placeholder="blur"
              width={image.width}
              height={image.height}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
