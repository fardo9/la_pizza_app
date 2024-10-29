'use client'

import { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const TanStackProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />{' '}
      {/* This is optional. It will display a panel with your queries and mutations. */}
    </QueryClientProvider>
  )
}

export default TanStackProvider
