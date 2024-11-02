import { IVariant } from "@/@types/base"

export enum PizzaType {
  Traditional = 1,
  Thin = 2
}

export const pizzaTypes: IVariant<PizzaType>[] = [
  { name: 'Traditional', value: PizzaType.Traditional },
  { name: 'Thin', value: PizzaType.Thin }
]

export enum PizzaSize {
  Small = 20,
  Medium = 30,
  Large = 40
}

export const pizzaSizes: IVariant<PizzaSize>[] = [
  { name: 'Small', value: PizzaSize.Small },
  { name: 'Medium', value: PizzaSize.Medium },
  { name: 'Large', value: PizzaSize.Large }
]
