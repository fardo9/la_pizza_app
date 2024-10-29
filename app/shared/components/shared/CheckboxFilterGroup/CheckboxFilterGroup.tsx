'use client'

import React, { FC, useState } from 'react'
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox'
import { Input } from '../../ui'
import { Skeleton } from '../../ui/skeleton'
import { ICheckboxFilterGroupProps } from '../types'
import { Value } from '@radix-ui/react-select'

export const CheckboxFilterGroup: FC<ICheckboxFilterGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  className,
  isLoading,
  isError,
  error,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(items)

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)

    const updatedFilteredItems = items.filter(
      (item) =>
        item.text.toLowerCase().includes(value.toLowerCase()) ||
        item.value === value
    )
    setFilteredItems(updatedFilteredItems)
  }

  const handleShowHideButton = () => {
    setShowAll(!showAll)
  }

  const list = showAll ? filteredItems : (defaultItems || items).slice(0, limit)

  if (isLoading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
          ))}

        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    )
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            value={searchValue}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item) => (
          <FilterCheckbox
            key={item.value}
            text={item.text}
            value={item.value}
            checked={selected?.has(item.value)}
            name={name}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={handleShowHideButton} className="text-primary mt-3">
            {showAll ? 'Hide' : '+ Show all'}
          </button>
        </div>
      )}
    </div>
  )
}
