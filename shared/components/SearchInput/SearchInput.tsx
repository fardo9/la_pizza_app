'use client'

import { IProps } from '@/app/types'
import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { cn } from '../../lib/utils'
import { Search as SearchIcon } from 'lucide-react'
import { useClickAway } from 'react-use'
import Link from 'next/link'
import { Input } from '../ui'
import { SkeletonItem } from './SkeletonInput'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { useProducts } from '@/services/hooks/useProducts'

export const SearchInput: FC<IProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [focused, setFocused] = useState<boolean>(false)
  const ref = useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
    setSearchQuery('')
  })

  const debounceQuery = useDebounce({ value: searchQuery, delay: 500 })

  const { products, isLoading, isError, error } = useProducts(
    debounceQuery,
    focused || !!searchQuery
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          'flex rounded-2xl flex-1 justify-between relative h-11 z-30',
          className
        )}
      >
        <SearchIcon className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />

        <Input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Search pizza..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={handleInputChange}
        />

        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12'
          )}
        >
          {isLoading ? (
            Array.from({ length: products?.length ?? 5 }).map((_, index) => (
              <SkeletonItem key={index} />
            ))
          ) : (
            <>
              {products && products.length > 0 ? (
                <>
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                    >
                      <img
                        className="rounded-sm h-8 w-8"
                        src={
                          product.imageUrl || '/assets/images/default-pizza.png'
                        }
                        alt={product.name}
                      />
                      {product.name}
                    </Link>
                  ))}
                </>
              ) : (
                <div className="px-3 py-2 text-gray-500">Product not found</div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
