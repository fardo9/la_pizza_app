import { Ingredient } from '@prisma/client'
import { create } from 'zustand'

export interface ICartStateItem {
  id: number
  quantity: number
  name: string
  imageUrl: string
  price: number
  pizzaSize?: number | null
  type?: number | null
  ingredients: Ingredient[]
}

export interface ICartState {
  loading: boolean
  error: boolean
  totalAmount: number
  items: ICartStateItem[]

  /* Получение товаров из корзины */
  fetchCartItems: () => Promise<void>

  /* Запрос на обновление количества товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>

  /* Запрос на добавление товара в корзину */
  addCartItem: (values: any) => Promise<void>

  /* Запрос на удаление товара из корзины */
  removeCartItem: (id: number) => Promise<void>
}

export const useCartStore = create<ICartState>()((set) => ({
  items: [],
  loading: false,
  error: false,
  totalAmount: 0,
  fetchCartItems: async () => {},
  updateItemQuantity: async (id, quantity) => {},
  addCartItem: async (values) => {},
  removeCartItem: async (id) => {}
}))
