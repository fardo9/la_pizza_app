'use client'

import { useCategories } from '@/services/hooks/useCategories'
import { FC } from 'react'
import { ProductsGroupList } from '..'

export const RenderProductList: FC = () => {
  const { categories } = useCategories()
  console.log('categories', categories)

  return (
    <>
      {categories?.map((category) => <p>{category.name}</p>)}

      {/* {categories?.map(
        (category, index) =>
          category?.products.length > 0 && (
            <ProductsGroupList
              key={category.id}
              title={category.name}
              products={category?.products}
              categoryId={category.id}
              className={cn(index != 0 && 'mt-16')}
            />
          )
      )} */}
    </>
  )
}
