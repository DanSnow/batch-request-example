import { useQuery } from '@tanstack/react-query'
import { stockQuery } from '~/lib/batch-stock'
import type { Product } from '~/types'

interface ProductItemProps {
  product: Product
}

export function ProductItem({ product }: ProductItemProps) {
  const { data: stock } = useQuery(stockQuery(product.id))
  return (
    <div className="flex flex-col gap-1 rounded-2xl border">
      <h2 className="font-bold text-xl">{product.name}</h2>
      <p>Stock: {stock?.amount ?? 0}</p>
    </div>
  )
}
