'use client'

import React from 'react'

import { cn } from '@/app/shared/components/lib/utils'
import Link from 'next/link'

import { useCategoryStore } from '@/store/category'
import { IProps } from '@/app/types'
import { Skeleton } from '../../ui/skeleton'
import { Category } from '@prisma/client'

interface ICatogories extends IProps {
  items?: Category[]
  isLoading?: boolean
}

export const Categories: React.FC<ICatogories> = ({ className, items, isLoading }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {isLoading ? (
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center font-bold h-11 rounded-2xl px-5"
            >
              <Skeleton className="w-25 h-10 rounded-2xl" />
            </div>
          ))}
        </div>
      ) : (
         items?.map(({ name, id }) => (
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
        ))
      )}
    </div>
  )
}
