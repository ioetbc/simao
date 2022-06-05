import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { plates } from '../../database/products'

const Plates = () => {
  const router = useRouter()
  const { plate } = router.query
  const product = plates?.find((item) => plate === item.sku)
  console.log(
    'product?.imageCarousel.map((image)',
    product?.imageCarousel.map((image) => console.log(image)),
  )
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
      className="relative grid mt-24 md:gap-10 md:grid-cols-2 m-4 md:mt-0 md:mr-0 md:mb-0 md:ml-16"
    >
      <div className="mt-28 mr-4 md:mt-48 flex gap-4 flex-col max-w-2xl mb-14">
        <div>
          {product?.imageCarousel.map((image) => (
            <Image
              src={image}
              alt={image.sku}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="md:mt-72 sticky top-28 pr-8 max-w-2xl">
          <h1 className="text-2xl ">{product?.pre}</h1>
          <ul className="flex gap-10 mt-10 mb-10 ">
            <div>
              <li>edition</li>

              <li>material</li>

              <li>dimensions</li>
            </div>
            <div>
              <li>1</li>

              <li>ceramic, copper glaze</li>

              <li>w: 15cm h: 10cm</li>
            </div>
          </ul>
          <p>{product?.description}</p>
          <div className="mt-4">
            <a href="mailto:ioetbc@gmail.com">( enquire )</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Plates
