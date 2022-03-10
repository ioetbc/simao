import { useRouter } from 'next/router'

import { plates } from '../../database/products'
import { Navigation } from '../../components/Navigation'

const Products = () => {
  const router = useRouter()

  return (
    <>
      <div>
        <Navigation />
        {plates.map((product) => (
          <>
            <div
              className={`odd:ml-auto relative w-6/12 grayscale hover:filter-none transition duration-300 ease-in-out cursor-pointer`}
              style={{
                position: 'relative',
                paddingLeft: `${product.offsetX}%`,
                paddingRight: `${product.offsetX}%`,
                paddingTop: `${product.offsetY}%`,
              }}
            >
              <img
                key={product.sku}
                onClick={() => router.push(`/plates/${product.sku}`)}
                src={product.thumbnail}
                alt={`${product.skew} plate`}
              />
              <p>{product.sku}</p>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Products
