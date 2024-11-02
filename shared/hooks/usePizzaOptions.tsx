'use client'
import React, { useEffect, useState } from 'react'
import { PizzaSize, PizzaType } from '../constants'
import { useSet } from 'react-use'
import { getAvailablePizzaSizes } from '@/helpers/pizzaHelpers'
import { ProductWithRelations } from '@/@types/prisma'
import { IReturnProps } from '@/@types/base'

export const usePizzaOptions = (
  product: ProductWithRelations
): IReturnProps => {
  const [type, setType] = useState<number>(PizzaType.Traditional)
  const [size, setSize] = useState<number>(PizzaSize.Small)
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>()
  )
  const availableSizes = getAvailablePizzaSizes(product.items, type)

  useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    )
    const availableSize = availableSizes?.find((item) => !item.disabled)

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize)
    }
  }, [type])

  return {
    type,
    size,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredient
  }
}
