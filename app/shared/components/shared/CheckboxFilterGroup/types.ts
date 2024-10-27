import { FilterChecboxProps } from '../filter-checkbox'

type Item = FilterChecboxProps

export interface IProps {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  loading?: boolean
  searchInputPlaceholder?: string
  onClickCheckbox?: (id: string) => void
  defaultValue?: string[]
  selected?: Set<string>
  className?: string
  name?: string
}
