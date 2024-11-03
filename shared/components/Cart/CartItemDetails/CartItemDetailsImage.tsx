import { ICartItemDetailsImageProps } from '@/@types/base'
import { cn } from '@/shared/lib/utils'
import { FC } from 'react'

export const CartItemDetailsImage: FC<ICartItemDetailsImageProps> = ({
  src,
  className
}) => {
  return <img className={cn('w-[60px] h-[60px]', className)} src={src} />
}
