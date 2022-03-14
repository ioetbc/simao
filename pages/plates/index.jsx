import { useRouter } from 'next/router'
import styled from 'styled-components'

import { plates } from '../../database/products'
import { Header } from '../../components/Header'

const Products = () => {
  const router = useRouter()

  const ImageStyles = styled.div`
    width: 50%;
    position: relative;
    left: ${(props) =>
      props?.index % 2 === 0 ? props.product.offsetX : -props.product.offsetX}%;
    margin-left: ${(props) => props?.index % 2 !== 0 && 'auto'};
    margin-top: 100px;
    @media only screen and (min-width: 768px) {
      width: ${(props) => props.product.width}%;
      margin-top: ${(props) => props?.product?.offsetY}px;
    }
  `
  return (
    <>
      <div>
        <Header />
        {plates.map((product, index) => (
          <ImageStyles product={product} index={index}>
            <div
              className={`relative odd:ml-auto relative grayscale hover:filter-none transition duration-2000 ease-in-out cursor-pointer image-position`}
            >
              <img
                key={product.sku}
                onClick={() => router.push(`/plates/${product.sku}`)}
                src={product.thumbnail}
                alt={`${product.skew} plate`}
              />
              <div className="flex gap-20 mt-4">
                <div>
                  <p>{product.sku}</p>
                  <p>{product.pre}</p>
                </div>
                <p>{product.date}</p>
              </div>
            </div>
          </ImageStyles>
        ))}
      </div>
    </>
  )
}

export default Products
