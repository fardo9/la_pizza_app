import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../categories'
import { Category } from '@prisma/client'

export const useCategories = () => {
  const { data, isLoading, isError } = useQuery<Category[]>({
    queryKey: ['category'],
    queryFn: async () => getAllCategories(),
    // Enable refetching when the cache expires
    staleTime: 1000 * 60 * 10,
    // refetchInterval: 60 * 60 * 1000, // 1 hour
  })

  return { categories: data, isLoading, isError }
}
