import React from 'react'
import { cn } from '@/shared/lib/utils'
import { prisma } from '@/prisma/prisma-client'
import {
  Container,
  Title,
  FilterProducts,
  TopBar,
  ProductsGroupList
} from '@/shared/components'

const Home = async () => {
  // const { categories } = useCategories()
  const categ = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        }
      }
    }
  })

  const filterCategory = categ?.filter(
    (category) => category?.products.length > 0
  )

  return (
    <>
      <Container className=" flex justify-between mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={filterCategory} isLoading={false} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <FilterProducts />
          </div>

          <div className="w-full">
            {filterCategory?.map(
              (category, index) =>
                categ.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    items={category.products}
                    categoryId={category.id}
                    className={cn(index != 0 && 'mt-16')}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
