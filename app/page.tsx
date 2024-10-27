import React from 'react'

import {
  Header,
  Container,
  Title,
  FilterProducts,
  TopBar,
  ProductsGroupList,
} from '@/app/shared/components/shared'

const Home = () => {
  return (
    <main className="min-h-screen bg-white rounded-3xl">
      <Header />
      <Container className=" flex justify-between mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <FilterProducts />
          </div>

          {/* Product List */}
          <div>
            <ProductsGroupList
              title={'Pizzas'}
              items={[
                {
                  id: 1,
                  name: 'Pizza 1',
                  imageUrl: '/assets/images/la-pyecz.webp',
                  items: [{ price: 19.99 }],
                  ingredients: [],
                },
                {
                  id: 2,
                  name: 'Pizza 2',
                  imageUrl: '/assets/images/la-pyecz.webp',
                  items: [{ price: 19.99 }],
                  ingredients: [],
                },
                {
                  id: 3,
                  name: 'Pizza 3',
                  imageUrl: '/assets/images/la-pyecz.webp',
                  items: [{ price: 19.99 }],
                  ingredients: [],
                },
              ]}
              categoryId={1}
            />

            <ProductsGroupList
              className="mt-20"
              title={'Appetizer'}
              items={[
                { id: 1, name: 'Pizza 1', imageUrl: '/', ingredients: [] },
                { id: 2, name: 'Pizza 2', imageUrl: '/', ingredients: [] },
                { id: 3, name: 'Pizza 3', imageUrl: '/', ingredients: [] },
              ]}
              categoryId={3}
            />

<ProductsGroupList
              className="mt-20"
              title={'Drinks'}
              items={[
                { id: 1, name: 'Drink 1', imageUrl: '/', ingredients: [] },
                { id: 2, name: 'Drink 2', imageUrl: '/', ingredients: [] },
                { id: 3, name: 'Drink 3', imageUrl: '/', ingredients: [] },
                { id: 4, name: 'Drink 3', imageUrl: '/', ingredients: [] },
              ]}
              categoryId={6}
            />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Home
