'use client'

import React, { FC } from 'react'
import { useProductByID } from '@/services/hooks/useProductID'
import { ChooseProductModal } from '@/shared/components'

const ProductModal: FC<any> = ({ params }: { params: any }) => {
  const { id } = params
  const { product, isLoading, isError } = useProductByID(id)

  return <ChooseProductModal product={product} isLoading={isLoading} />
}

export default ProductModal
