import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { Category } from '@prisma/client'

export const getAllCategories = async (): Promise<Category[]> => {
  return (await axiosInstance.get<Category[]>(ApiRoutes.CATEGORY)).data
}
