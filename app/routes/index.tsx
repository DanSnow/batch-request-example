import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

import { useQuery } from '@tanstack/react-query'
import { ofetch } from 'ofetch'

interface Product {
  id: string
  name: string
}

function ProductList() {
  const { data: productList } = useQuery({
    queryKey: ['products'],
    queryFn: () => ofetch<{ products: Product[] }>('/api/products'),
  })

  return (
    <div>
      {productList?.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

function Product({ product }: { product: Product }) {
  const { data: inStock } = useQuery({
    queryKey: ['productStock', product.id],
    queryFn: () => ofetch<{ id: string; amount: number }>(`/api/stocks/${product.id}`),
  })

  return (
    <div>
      <h2>{product.name}</h2>
      <p>In stock: {inStock?.amount}</p>
    </div>
  )
}

function Home() {
  return (
    <div className="p-2">
      <ProductList />
    </div>
  )
}
