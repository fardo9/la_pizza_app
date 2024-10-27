'use client'

import React, { FC, useState } from 'react'
import { FilterCheckbox } from '../filter-checkbox'
import { Input } from '../../ui'
import { Skeleton } from '../../ui/skeleton'
import { IProps } from './types'

export const CheckboxFilterGroup: FC<IProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  console.log('searchValue', !!searchValue)
  const handleShowHideButton = () => {
    // setSearchValue('')
    setShowAll(!showAll)
  }

  const list = showAll
    ? items?.filter(
        (item) =>
          item.text.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.value === searchValue
      )
    : (defaultItems || items).slice(0, limit)

  if (loading) {
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

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
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
            checked={false}
            name={name}
            endAdornment={item.endAdornment}
            onCheckedChange={() => {}}
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
