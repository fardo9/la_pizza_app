import { ProductWithRelations } from '@/@types/prisma'
import { Ingredient } from '@prisma/client'
import { getPizzaPriceByTypeAndSize } from './pizzaHelpers'
import { PizzaSize, PizzaType } from '@/shared/constants'

/**
 * Function to calculate the total cost of pizza
 *
 * @param product - list product include variantion nad ingredients
 * @param type - dough type of the selected pizza
 * @param size - size of the selected pizza
 * @param selectedIngredients - selected ingredients
 *
 * @returns number total cost
 */

const calculateTotalPizzaPrice = (
  product: ProductWithRelations,
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<number>
): number => {
  const selectedIngredientsPrice: any = product.ingredients
    ?.filter((ingredient: Ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, next) => acc + next.price, 0)

  return (
    getPizzaPriceByTypeAndSize(product, type, size) + selectedIngredientsPrice
  )
}

const calculateCartItemTotalPrice = () => {}

export { calculateTotalPizzaPrice, calculateCartItemTotalPrice }
