import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { ofetch } from 'ofetch'
import { ProductItem } from '~/components/ProductItem'
import type { Product } from '~/types'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: () => ofetch<{ products: Product[] }>('/api/products'),
  })

  return (
    <div className="p-2 flex flex-col gap-2">
      {products?.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
