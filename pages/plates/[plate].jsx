import { useRouter } from 'next/router'
import { plates } from '../../database/products'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Crumbs } from '../../components/Crumbs'
import { Navigation } from '../../components/Navigation'

const Plates = () => {
  const router = useRouter()
  const { plate } = router.query
  const product = plates?.find((product) => plate === product.sku)

  return (
    <>
      <nav className="relative right-8 top-8">
        <Navigation />
      </nav>
      <Crumbs />
      <div className="grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <Carousel
          autoPlay={true}
          useKeyboardArrows={true}
          showStatus={false}
          stopOnHover={true}
          centerMode={true}
          centerSlidePercentage={90}
          dynamicHeight={true}
          emulateTouch={true}
          infiniteLoop={true}
          interval={1000}
        >
          {product?.imageCarousel.map((image) => (
            <img src={image} />
          ))}
        </Carousel>
        <div>
          <h1>{product?.sku}</h1>
          <p>{product?.description}</p>
        </div>
      </div>
    </>
  )
}

export default Plates
