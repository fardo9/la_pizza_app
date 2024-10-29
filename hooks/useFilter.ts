import {
  IPriceRangeProps,
  IReturnFilterProps,
} from '@/app/shared/components/shared/types'
import { useMemo, useState } from 'react'
import { useSet } from 'react-use'

export const useFilter = (): IReturnFilterProps => {
  let searchParams = new URLSearchParams()

  if (typeof window !== 'undefined') {
    searchParams = new URLSearchParams(window.location.search)
  }

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
    )
  )

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has('pizzaTypes')
        ? searchParams.get('pizzaTypes')?.split(',')
        : []
    )
  )

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(','))
  )

  const [prices, setPrices] = useState<IPriceRangeProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  })

  const handlePriceRangeChange = (
    name: keyof IPriceRangeProps,
    value: number
  ) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      prices,
      setPrices: handlePriceRangeChange,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients,
    }),
    [sizes, pizzaTypes, selectedIngredients, prices],
  );
}
