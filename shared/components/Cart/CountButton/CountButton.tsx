import { cn } from '@/shared/lib/utils'
import React from 'react'
import { CountIconButton } from '../CountIconButton/CountIconButton'
import { ICountButtonProps } from '@/@types/base'

export const CountButton: React.FC<ICountButtonProps> = ({
  className,
  onClick,
  value = 1,
  size = 'sm'
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-between gap-3',
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.('minus')}
        disabled={value === 1}
        size={size}
        type="minus"
      />

      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>

      <CountIconButton
        onClick={() => onClick?.('plus')}
        size={size}
        type="plus"
      />
    </div>
  )
}
