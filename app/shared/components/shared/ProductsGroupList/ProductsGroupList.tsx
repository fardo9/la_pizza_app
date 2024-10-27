'use client'

import React, { FC, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { ProductCard, Title } from '..'
import { cn } from '../../lib/utils'
import { IProps } from './types'
import { useCategoryStore } from '@/store/category'

export const ProductsGroupList: FC<IProps> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategory = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = useRef<HTMLDivElement>(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(`Intersection detected with - ${title}, ${categoryId}`)
      setActiveCategory(categoryId)
      // Trigger your action here, for example, fetch more data or update state.
      // Example: fetchMoreData(categoryId)
      // Example: dispatch(updateState({ isLoading: false }))
    }
  }, [intersection?.intersectionRect])

  return (
    <div
      className={className}
      id={title.toLocaleLowerCase()}
      ref={intersectionRef}
    >
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={3}
            // price={product?.items[0]?.price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  )
}
