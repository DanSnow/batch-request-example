import { queryOptions } from '@tanstack/react-query'
import { create, windowScheduler } from '@yornaath/batshit'
import { ofetch } from 'ofetch'
import type { Stock } from '~/types'

const fetcher = create({
  fetcher: (stocks: string[]) =>
    ofetch<{ stocks: Stock[] }>('/api/stocks/batch', {
      method: 'post',
      body: { stocks },
    }),
  resolver: (res, query) => res.stocks.find((stock) => stock.id === query),
  scheduler: windowScheduler(50),
})

export const stockQuery = (id: string) =>
  queryOptions({
    queryKey: ['stocks', id],
    queryFn: () => fetcher.fetch(id),
  })
