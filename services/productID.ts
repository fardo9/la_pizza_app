import { Product } from '.prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'

export const getProductByID = async (id: number) => {
  return (await axiosInstance.get<Product>(`${ApiRoutes.PRODUCT_BY_ID}/${id}`))
    .data
}
