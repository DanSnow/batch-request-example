import { QueryClient } from '@tanstack/react-query'

const HOST_URL = 'http://localhost:3000'

export function createRouterContext() {
  const queryClient = new QueryClient()

  return {
    queryClient,
  }
}

export type Context = ReturnType<typeof createRouterContext>
