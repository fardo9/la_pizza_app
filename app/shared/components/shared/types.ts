export interface FilterChecboxProps {
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
  name?: string
}

type Item = FilterChecboxProps

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

export interface IFilters {
  sizes: Set<string>
  pizzaTypes: Set<string>
  selectedIngredients: Set<string>
  prices: IPriceRangeProps
}

export interface IPriceRangeProps {
  priceFrom?: number
  priceTo?: number
}

export interface IReturnFilterProps extends IFilters {
  setPrices: (name: keyof IPriceRangeProps, value: number) => void
  setPizzaTypes: (value: string) => void
  setSizes: (value: string) => void
  setSelectedIngredients: (value: string) => void
}
