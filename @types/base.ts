import { ProductWithRelations } from './prisma'
import { IProps } from '@/app/types'

/** Begin Interface for hook usePizzaOption */
export interface IReturnProps {
  type: number
  size: number
  selectedIngredients: Set<number>
  availableSizes: IVariant<number>[]
  setType: (value: number) => void
  setSize: (value: number) => void
  addIngredient: (ingredient: number) => void
}
/** EOF Interface for hook usePizzaOption */

/** Begin Interface for hook useQueryFilters */
export interface IFilters {
  sizes: Set<string>
  pizzaTypes: Set<string>
  selectedIngredients: Set<string>
  prices: IPriceRangeProps
}
/** EOF Interface for hook useQueryFilters */

/** Begin Interface for hook useFilter */
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
/** EOF Interface for hook useFilter */

/** BEGIN ChoosePizzaForm Component Props */
export interface IChoosePizzaFormProps extends IProps {
  product: ProductWithRelations
  isLoading?: boolean
  onSubmit?: VoidFunction
}
/** EOF ChoosePizzaForm Component Props */

/** BEGIN Group Variant Component Props */
export interface IVariant<T> {
  name: string
  value: T
  disabled?: boolean
}

export interface IVariantsProps<T> extends IProps {
  items: readonly IVariant<T>[]
  onClick?: (value: T) => void
  value?: T
}

/** EOF Group Variant Component Props */
