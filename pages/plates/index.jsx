import { useRouter } from 'next/router'
import Link from 'next/link'

import { plates } from '../../database/products'

const Products = () => {
  const router = useRouter()
  const { plate } = router.query
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {plates.map((product) => (
          <img
            key={product.sku}
            onClick={() => router.push(`/plates/${product.sku}`)}
            src={product.thumbnail}
          />
        ))}
      </div>
    </>
  )
}

export default Products
