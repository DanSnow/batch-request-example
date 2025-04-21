import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import type { Context } from './router-context'

export function WrapComponent({ children, context }: { children: ReactNode; context: Context }) {
  return <QueryClientProvider client={context.queryClient}>{children}</QueryClientProvider>
}
