'use client'

import React, { FC } from 'react'
import { CheckboxFilterGroup, Title } from '..'
import { Input } from '../../ui'
import { RangeSlider } from '../range-slider'
import { IProps } from '@/app/types'
import { useIngredients } from '@/services/hooks/useIngredients'
import { Ingredient } from '@prisma/client'
import { Skeleton } from '../../ui/skeleton'
import { useFilter, useQueryFilters } from '@/hooks'

export const FilterProducts: FC<IProps> = ({ className }) => {
  const { ingredients, isLoading, isError, error } = useIngredients()
  const filter = useFilter()
  useQueryFilters(filter)

  const items =
    ingredients?.map((item: Ingredient) => ({
      value: String(item.id),
      text: item.name,
    })) || []

  const updatePrices = (prices: number[]) => {
    filter.setPrices('priceFrom', prices[0])
    filter.setPrices('priceTo', prices[1])
  }

  const renderCheckboxFilter = (
    title: string,
    name: string,
    selected: Set<string>,
    items: { text: string; value: string }[],
    onClickCheckbox: (value: string) => void
  ) => (
    <CheckboxFilterGroup
      title={title}
      name={name}
      className="mb-5"
      onClickCheckbox={onClickCheckbox}
      selected={selected}
      isLoading={isLoading}
      items={items}
    />
  )

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        {renderCheckboxFilter(
          'Dought type',
          'pizzaTypes',
          filter.pizzaTypes,
          [
            { text: 'Thin', value: '1' },
            { text: 'Traditional', value: '2' },
          ],
          filter.setPizzaTypes
        )}

        {renderCheckboxFilter(
          'Size',
          'sizes',
          filter.sizes,
          [
            { text: '20 см', value: '20' },
            { text: '30 см', value: '30' },
            { text: '40 см', value: '40' },
          ],
          filter.setSizes
        )}
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to:</p>
        {isLoading ? (
          <div className="flex gap-3 mb-5">
            <Skeleton className="w-20 h-8 rounded-md" />
            <Skeleton className="w-20 h-8 rounded-md" />
          </div>
        ) : (
          <div className="flex gap-3 mb-5">
            <Input
              type="number"
              placeholder="0"
              min={0}
              max={200}
              value={String(filter.prices.priceFrom) ?? 0}
              onChange={(e) =>
                filter.setPrices('priceFrom', Number(e.target.value))
              }
            />
            <Input
              type="number"
              min={100}
              max={300}
              placeholder="300"
              value={String(filter.prices.priceTo) ?? 300}
              onChange={(e) =>
                filter.setPrices('priceTo', Number(e.target.value))
              }
            />
          </div>
        )}

        {isLoading ? (
          <Skeleton className="w-full h-10 rounded-md mb-5" />
        ) : (
          <div className="flex mb-5">
            <RangeSlider
              min={0}
              max={1000}
              step={10}
              value={[
                filter.prices.priceFrom ?? 0,
                filter.prices.priceTo ?? 300,
              ]}
              onValueChange={updatePrices}
            />
          </div>
        )}

        <CheckboxFilterGroup
          title="Ingredients"
          name="ingredients"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          isLoading={isLoading}
          isError={isError}
          error={error}
          onClickCheckbox={filter.setSelectedIngredients}
          selected={filter.selectedIngredients}
        />
      </div>
    </div>
  )
}
