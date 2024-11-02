import { IProps } from '@/app/types'
import { Ingredient } from '@prisma/client'

type Item = FilterChecboxProps

export interface FilterChecboxProps {
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
  name?: string
}

export interface ICheckboxFilterGroupProps {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  isLoading?: boolean
  isError?: boolean
  error?: any
  searchInputPlaceholder?: string
  onClickCheckbox?: (id: string) => void
  defaultValue?: string[]
  selected?: Set<string>
  className?: string
  name?: string
}

export interface IProductImageProps<T> extends IProps {
  imageUrl?: string
  size: T
  alt?: string
  isVariantExist?: boolean
}

export interface IProductsGroupListProps {
  title: string
  items: any[]
  categoryId: number
  listClassName?: string
  className?: string
}

export interface IIngredients extends IProps {
  ingredient: Ingredient
  active?: boolean
  onClick?: () => void
}
