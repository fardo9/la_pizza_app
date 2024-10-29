'use client'

import React, { FC } from 'react'
import { Container, ProductImage, Title } from '@/app/shared/components/shared'
import Tabs from '@/app/shared/components/shared/Tabs/Tabs'
import { useProductByID } from '@/services/hooks/useProductID'

const ProductDetails: FC<any> = ({ params }: { params: any }) => {
  const { product } = useProductByID(params.id)

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
        <Tabs
          selectedValue="2"
          items={[
            { name: 'Small', value: '1' },
            { name: 'Medium', value: '2' },
            { name: 'Large', value: '3' }
          ]}
        />
      </div>
    </Container>
  )
}

export default ProductDetails
