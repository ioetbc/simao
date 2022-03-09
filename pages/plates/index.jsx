import { useRouter } from 'next/router'

import { plates } from '../../database/products'

const Products = () => {
  const router = useRouter()

  return (
    <>
      <div>
        {plates.map((product) => (
          <>
            <div
              className={`odd:ml-auto relative w-6/12`}
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
                style={{
                  width: '100%',
                  position: 'relative',
                }}
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
