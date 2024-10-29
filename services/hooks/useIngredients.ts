'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllIngredients } from '../ingridients'

export const useIngredients = () => {
  const { data, isSuccess, isLoading, isError, error } = useQuery<any>({
    queryKey: ['ingredients'],
    queryFn: async () => getAllIngredients(),
    staleTime: 1000 * 60 * 10
  })

  return { ingredients: data, isLoading, isError, error }
}
