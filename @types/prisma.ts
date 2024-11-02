import { Category, Ingredient, Product, ProductItem } from '@prisma/client'

export type ProductWithRelations = Product & {
  items: ProductItem[]
  ingredients: Ingredient[]
}

export type CategortWithRelations = Category & {
  products?: Product[]
}
