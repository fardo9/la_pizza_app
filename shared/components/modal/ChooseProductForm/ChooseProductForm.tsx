import { IProps } from '@/app/types'
import React, { FC } from 'react'
import { cn } from '../../../lib/utils'
import { ProductImage, Title } from '../..'
import { Button } from '../../ui'
import { ProductWithRelations } from '@/@types/prisma'

export interface IChooseForm extends IProps {
  product: ProductWithRelations
  isLoading?: boolean
  onSubmit?: VoidFunction
}

export const ChooseProductForm: FC<IChooseForm> = ({
  className,
  product,
  onSubmit,
  isLoading
}) => {
  const isVariantExist = !!product.items[0].pizzaType

  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <ProductImage
          isVariantExist={isVariantExist}
          imageUrl={product.imageUrl}
          size={20}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] "
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={product.name} size="md" className="font-extrabold mb-1" />

        <Button
          // loading={isLoading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}
