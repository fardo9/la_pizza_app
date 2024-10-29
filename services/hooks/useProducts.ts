import { useQuery } from '@tanstack/react-query'
import { search } from '../products'

export const useProducts = (query: string, enabled: boolean) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products', query],
    queryFn: () => search(query),
    enabled: enabled,
    staleTime: 1000 * 60 * 5
  })

  return { products: data, isLoading, isError, error }
}
