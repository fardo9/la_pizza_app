import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../categories'
import { Category } from '@prisma/client'

export const useCategories = () => {
  const { data, isLoading, isError } = useQuery<Category[]>({
    queryKey: ['category'],
    queryFn: async () => getAllCategories(),
    staleTime: 1000 * 60 * 10
  })

  return { categories: data, isLoading, isError }
}
