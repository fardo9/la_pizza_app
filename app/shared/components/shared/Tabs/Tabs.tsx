import React, { FC } from 'react'
import { ITabsProps } from '../types'
import { cn } from '../../lib/utils'

const Tabs: FC<ITabsProps> = ({
  items,
  onClick,
  className,
  value,
  selectedValue
}) => {
  return (
    <div
      className={cn(
        className,
        'flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none'
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow': item.value === selectedValue,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default Tabs
