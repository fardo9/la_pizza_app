import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants'
import { Ingredient } from '@prisma/client'

const getCartItemDetails = (
  ingredients: Ingredient[],
  pizzaType?: PizzaType,
  pizzaSize?: PizzaSize
): string => {
  const details = []

  if (pizzaSize && pizzaType) {
    const typeName = pizzaTypes.find((type) => type.value === pizzaType)?.name
    console.log('typeName', typeName)
    details.push(`${typeName} ${pizzaSize} см`)
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name))
  }

  return details.join(', ')
}
export { getCartItemDetails }
