import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import { ProductLoader } from '../../components/loaders/ProductLoader'
import { plates } from '../../database/products'
import { Header } from '../../components/Header'

const Products = () => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading')
  }, [loading])

  const ImageStyles = styled.div`
    width: 50%;
    position: relative;
    left: ${(props) =>
      props.index % 2 === 0 ? props.product.offsetX : -props.product.offsetX}vw;
    margin-left: ${(props) => props.index % 2 !== 0 && 'auto'};
    margin-top: 100px;
    @media only screen and (min-width: 768px) {
      width: ${(props) => props.product.width}px;
      height: ${(props) => props.product.width}px;
      margin-top: ${(props) => props?.product?.offsetY}px;
    }
    .details {
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      padding-left: ${(props) =>
        props.product.offsetX === 0 && props.index % 2 === 0 ? '16px' : 0};
    }
    .image-container:hover {
      .details {
        opacity: 1;
      }
    }
  `
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <ProductLoader setLoading={setLoading} />
          </motion.div>
        ) : (
          <div>
            <Header />
            {plates.map((product, index) => (
              <ImageStyles product={product} index={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                      },
                    },
                  }}
                  className="relative odd:ml-auto relative grayscale hover:filter-none transition duration-2000 ease-in-out cursor-pointer image-position"
                >
                  <div className="image-container">
                    <Image
                      key={product.sku}
                      src={require(`../../public${product.thumbnail}`)}
                      alt={`${product.skew} plate`}
                      placeholder="blur"
                      width={product.width}
                      height={product.height}
                      onClick={() => router.push(`/plates/${product.sku}`)}
                    />
                    <div className="flex gap-20 mt-4 details">
                      <div>
                        <p>{product.pre}</p>
                      </div>
                      {/* <p>{product.date}</p> */}
                    </div>
                  </div>
                </motion.div>
              </ImageStyles>
            ))}
          </div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Products
