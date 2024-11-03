import { cn } from '@/shared/lib/utils'
import React, { FC } from 'react'

import { Trash2Icon } from 'lucide-react'
import { CountButton } from '../CountButton/CountButton'
import { IItemsProps } from '@/@types/base'
import * as CartItemDetails from '../CartItemDetails'

export const CartDrawerItem: FC<IItemsProps> = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  disabled,
  onClickCountButton,
  onClickRemove,
  className
}) => {
  return (
    <div
      className={cn(
        'flex bg-white p-5 gap-6',
        {
          'opacity-50 pointer-events-none': disabled
        },
        className
      )}
    >
      <CartItemDetails.Image src={imageUrl} />

      <div className="flex-1">
        <CartItemDetails.Info name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItemDetails.Price value={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
