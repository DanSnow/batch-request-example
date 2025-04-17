import type { Product } from '~/types'

interface ProductItemProps {
  product: Product
  stock: number
}

export function ProductItem({ product, stock }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border">
      <h2 className="font-bold text-xl">{product.name}</h2>
      <p>Stock: {stock}</p>
    </div>
  )
}
