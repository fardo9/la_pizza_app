import { useQuery } from '@tanstack/react-query'
import { search } from '../products'
import { getProductByID } from '../productID'

export const useProductByID = (id: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => getProductByID(id),
    staleTime: 1000 * 60 * 5
  })

  return { product: data, isLoading, isError, error }
}
