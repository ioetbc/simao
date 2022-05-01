import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'

import { plates } from '../../database/products'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Plates = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const router = useRouter()
  const { plate } = router.query
  const product = plates?.find((item) => plate === item.sku)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      className="grid mt-24 md:gap-20 md:grid-cols-2 max-w-7xl m-4 md:mt-0 md:mr-0 md:mb-0 md:ml-16"
    >
      <div className="mt-28 md:mt-48">
        {product?.imageCarousel.map((image) => (
          <img src={image} alt={image.sku} />
        ))}
        <p className="text-right mt-2">( {carouselIndex + 1} )</p>
      </div>
      <div className="md:mt-72 sticky top-10">
        <h1 className="text-2xl ">{product?.sku}</h1>
        <ul className="flex gap-10 mt-10 mb-10">
          <div>
            <li>edition</li>

            <li>material</li>

            <li>dimensions</li>

            <li>price</li>
          </div>
          <div>
            <li>1</li>

            <li>ceramic, copper glaze</li>

            <li>w: 15cm h: 10cm</li>

            <li>£50</li>
          </div>
        </ul>
        <p>{product?.description}</p>
        <div className="mt-4">
          <a href="mailto:ioetbc@gmail.com">( enquire )</a>
        </div>
      </div>
    </motion.div>
  )
}

export default Plates
