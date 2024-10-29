import { cn } from '@/app/shared/components/lib/utils'
import { IProps } from '@/app/types'
import React from 'react'

export const Container: React.FC<React.PropsWithChildren<IProps>> = ({
  className,
  children
}) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
  )
}
