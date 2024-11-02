'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '../../lib/utils'
import { Dialog, DialogContent } from '../ui'
import { ChoosePizzaForm, ChooseProductForm } from '..'
import { ChooseProductSkeleton } from './ChooseProductSkeleton'
import { ProductWithRelations } from '@/@types/prisma'
import { IProps } from '@/app/types'

interface IProductModalProps extends IProps {
  product: ProductWithRelations | undefined
  isLoading?: boolean
}

export const ChooseProductModal: React.FC<IProductModalProps> = ({
  product,
  className,
  isLoading
}) => {
  const router = useRouter()
  const isVariantExist = !!product?.items[0].pizzaType

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      {isLoading || !product ? (
        <ChooseProductSkeleton />
      ) : (
        <DialogContent
          className={cn(
            'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
            className
          )}
        >
          {isVariantExist ? (
            <ChoosePizzaForm product={product} />
          ) : (
            <ChooseProductForm
              product={product}
              // onSubmit={() => <></>}
              isLoading={isLoading}
            />
          )}
        </DialogContent>
      )}
    </Dialog>
  )
}
