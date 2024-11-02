import React from 'react'
import { Categories, Container, SortPopup } from '..'
import { IProps } from '@/app/types'
import { Category } from '@prisma/client'
import { cn } from '@/shared/lib/utils'

interface ITopBarProps extends IProps {
  categories?: Category[]
  isLoading?: boolean
}

export const TopBar: React.FC<ITopBarProps> = ({
  className,
  categories,
  isLoading
}) => {
  console.log('Categories:', categories)
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className="flex justify-between">
        <Categories items={categories} isLoading={isLoading} />
        <SortPopup />
      </Container>
    </div>
  )
}
