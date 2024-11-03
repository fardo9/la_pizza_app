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

/** BEGIN Interface for a ChoosePizzaForm Component */
export interface IChoosePizzaFormProps extends IProps {
  product: ProductWithRelations
  isLoading?: boolean
  onSubmit?: VoidFunction
}
/** EOF Interface for a ChoosePizzaForm Component */

/** BEGIN Interface for a Group Variant Component Props */
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

/** EOF Interface for a Group Variant Component Props */

/** Begin Interface for Component ProductImage */
export interface IProductImageProps<T> extends IProps {
  imageUrl?: string
  size: T
  alt?: string
  isVariantExist?: boolean
}
/** EOF Interface for Component ProductImage */

/** Begin Interface for Component Cart */

export interface ICountButtonProps {
  value?: number
  size?: 'sm' | 'lg'
  onClick?: (type: 'plus' | 'minus') => void
  className?: string
}

export interface IconButtonProps {
  size?: ICountButtonProps['size']
  disabled?: boolean
  type?: 'plus' | 'minus'
  onClick?: () => void
}

/** EOF Interface for Component Cart */

export interface ICartItemProps {
  id: number
  imageUrl: string
  details: string
  name: string
  price: number
  quantity: number
  disabled?: boolean
}

/** Begin Interface for Component Cart */

/** Begin Interface for Component Cart Item */
export interface ICartItemProps {
  id: number
  imageUrl: string
  details: string
  name: string
  price: number
  quantity: number
  disabled?: boolean
}

export interface IItemsProps extends ICartItemProps {
  onClickCountButton?: (type: 'plus' | 'minus') => void
  onClickRemove?: () => void
  className?: string
}
/** EOF Interface for Component Cart Item */

/** Begin Interface for Component Cart Item Details */

export interface ICartItemInfoProps {
  name: string
  details: string
  className?: string
}

export interface ICartItemDetailsPriceProps {
  value: number
  className?: string
}

export interface ICartItemDetailsImageProps {
  src: string
  className?: string
}
/** EOF Interface for Component Cart Item Details */

/** EOF Interface for Component Cart */
