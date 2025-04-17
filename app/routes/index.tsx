import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { ofetch } from 'ofetch'
import { useMemo } from 'react'
import { ProductItem } from '~/components/ProductItem'
import type { Product, Stock } from '~/types'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: () => ofetch<{ products: Product[] }>('/api/products'),
  })

  const productIds = useMemo(() => products?.products.map((product) => product.id), [products])
  const { data: stocks } = useQuery({
    queryKey: ['stocks', productIds],
    queryFn: () =>
      ofetch<{ stocks: Stock[] }>('/api/stocks/batch', {
        method: 'post',
        body: { stocks: productIds },
      }),
  })

  const productList = useMemo(() => {
    const stockMap = new Map(stocks?.stocks.map((stock) => [stock.id, stock.amount] as const))

    return (
      products?.products.map((product) => ({
        ...product,
        amount: stockMap.get(product.id) || 0,
      })) ?? []
    )
  }, [products, stocks])

  return (
    <div className="p-2 flex flex-col gap-2">
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} stock={product.amount} />
      ))}
    </div>
  )
}
