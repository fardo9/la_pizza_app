import { FC } from 'react'

import { ICartItemDetailsPriceProps } from '@/@types/base'
import { cn } from '@/shared/lib/utils'

export const CartItemDetailsPrice: FC<ICartItemDetailsPriceProps> = ({
  value,
  className
}) => {
  return <h2 className={cn('font-bold', className)}>{value} $</h2>
}
