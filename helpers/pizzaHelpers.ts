import { ProductWithRelations } from '@/@types/prisma'
import {
  PizzaSize,
  PizzaType,
  pizzaSizes,
  pizzaTypes
} from '@/shared/constants'
import { ProductItem } from '@prisma/client'

const getPizzaPriceByTypeAndSize = (
  products: ProductWithRelations,
  type: PizzaType,
  size: PizzaSize
): number =>
  products.items.find((item) => item.pizzaType === type && item.size === size)
    ?.price || 0

const getPizzaTypeName = (type: number | undefined) =>
  pizzaTypes.find((pizza) => pizza.value === type)?.name || 'Unknown type'

const getAvailablePizzaSizes = (items: ProductItem[], type: PizzaType) => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type)

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    )
  }))
}

export { getPizzaTypeName, getPizzaPriceByTypeAndSize, getAvailablePizzaSizes }
