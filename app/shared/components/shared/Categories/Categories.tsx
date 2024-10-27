'use client'
import React from 'react'

import { cn } from '@/app/shared/components/lib/utils'
import Link from 'next/link'

import { categories } from '../../../constant'
import { useCategoryStore } from '@/store/category'
import { IProps } from '@/app/types'

export const Categories: React.FC<IProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map(({name, id}, i) => (
        <Link
          key={name}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${name.toLowerCase()}`}
        >
          {name}
        </Link>
      ))}
    </div>
  )
}
