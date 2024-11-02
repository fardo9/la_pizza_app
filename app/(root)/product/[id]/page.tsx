'use client'

import React, { FC } from 'react'
import {
  Container,
  GroupVariants,
  ProductImage,
  Title
} from '@/shared/components'
import { useProductByID } from '@/services/hooks/useProductID'
import { pizzaSizes, pizzaTypes } from '@/shared/constants'

const ProductDetails: FC<any> = ({ params }: { params: any }) => {
  const { id } = params
  const { product, isLoading, isError } = useProductByID(id)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading product</p>

  return (
    <Container className="flex my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product?.imageUrl} size={40} />
      </div>
      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={product?.name ?? ''} size="lg" className="mb-4" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          provident expedita iusto? Vero sed asperiores error eum id rem, vel
          non consequatur nesciunt quis excepturi repudiandae iste enim
          obcaecati minus.
        </p>
        <GroupVariants value="2" className="mt-5" items={pizzaSizes} />
        <GroupVariants value="2" className="mt-5" items={pizzaTypes} />
      </div>
    </Container>
  )
}

export default ProductDetails
