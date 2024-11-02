'use client'

import { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const TanStackProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 0, // Set to 0 to disable automatic stale time
        // refetchInterval: 0, // Set to 0 to disable automatic refetching
      },
      mutations: {}
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />{' '}
      {/* This is optional. It will display a panel with your queries and mutations. */}
    </QueryClientProvider>
  )
}

export default TanStackProvider
