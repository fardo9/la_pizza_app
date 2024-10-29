import React from 'react'

import {
  Header,
  Container,
  Title,
  FilterProducts,
  TopBar,
  ProductsGroupList,
} from '@/app/shared/components/shared'
import { prisma } from '@/prisma/prisma-client'

const Home = async () => {
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
  console.log(categ)

const filterCategory = categ?.filter((category) => category?.products.length > 0)
  return (
    <main className="min-h-screen bg-white rounded-3xl">
      <Header />
      <Container className=" flex justify-between mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={filterCategory} isLoading={false} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <FilterProducts />
          </div>

          <div className='w-full'>
            {filterCategory?.map((category) => categ.length > 0 && (
              <ProductsGroupList
                key={category.id}
                title={category.name}
                items={category.products}
                categoryId={category.id}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Home
