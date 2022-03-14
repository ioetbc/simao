import { useState } from 'react'
import { useRouter } from 'next/router'
import { plates } from '../../database/products'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Header } from '../../components/Header'

const Plates = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const router = useRouter()
  const { plate } = router.query
  const product = plates?.find((product) => plate === product.sku)

  return (
    <>
      <Header renderBreadcrumb={true} />

      <div className="grid mt-24 md:gap-20 md:grid-cols-2 max-w-7xl m-4 md:mt-0 md:mr-0 md:mb-0 md:ml-16">
        <div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            stopOnHover={true}
            useKeyboardArrows={true}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={true}
            emulateTouch={true}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            onChange={(index) => setCarouselIndex(index)}
          >
            {product?.imageCarousel.map((image) => (
              <>
                <img src={image} />
              </>
            ))}
          </Carousel>
          <p className="text-right mt-2">( {carouselIndex + 1} )</p>
        </div>
        <div className="md:mt-36">
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
          <button className="mt-4">( enquire )</button>
        </div>
      </div>
    </>
  )
}

export default Plates
