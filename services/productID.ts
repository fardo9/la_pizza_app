import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { ProductWithRelations } from '../@types/prisma'

export const getProductByID = async (id: number) => {
  return (
    await axiosInstance.get<ProductWithRelations>(
      `${ApiRoutes.PRODUCT_BY_ID}/${id}`
    )
  ).data
}
