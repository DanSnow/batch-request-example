import { QueryClient } from '@tanstack/react-query'
import { createStore } from 'jotai'

const HOST_URL = 'http://localhost:3000'

export function createRouterContext() {
  const queryClient = new QueryClient()

  const store = createStore()

  return {
    queryClient,
    store,
  }
}

export type Context = ReturnType<typeof createRouterContext>
