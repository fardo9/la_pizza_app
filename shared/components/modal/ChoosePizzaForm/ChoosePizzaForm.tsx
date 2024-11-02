'use client'

import React, { FC, useMemo } from 'react'
import { Ingredient } from '@prisma/client'

import { cn } from '../../../lib/utils'
import { GroupVariants, Ingredients, ProductImage, Title } from '../..'
import { Button } from '../../ui'
import { pizzaTypes } from '@/shared/constants'
import { calculateTotalPizzaPrice } from '@/helpers/calculatуHelpers'
import { getPizzaTypeName } from '@/helpers/pizzaHelpers'
import { usePizzaOptions } from '@/shared/hooks'
import { IChoosePizzaFormProps } from '@/@types/base'

export const ChoosePizzaForm: FC<IChoosePizzaFormProps> = ({
  className,
  product,
  onSubmit,
  isLoading
}) => {
  const isVariantExist = !!product.items[0].pizzaType
  const {
    type,
    size,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredient
  } = usePizzaOptions(product)

  const calculateTotalPrice = useMemo(
    () => calculateTotalPizzaPrice(product, type, size, selectedIngredients),
    [product, type, size, selectedIngredients]
  )
  const textDetails = `${size} cm, ${getPizzaTypeName(type)} pizza`

  const handleClickAdd = () => {
    const testSubmit = {
      type: 1,
      size: 1,
      selectedIngredients
    }

    onSubmit?.()
    console.log('Submitting form', testSubmit)
  }

  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <ProductImage
          imageUrl={product.imageUrl}
          size={size}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px]"
          isVariantExist={isVariantExist}
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={product.name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <p className="text-sm text-gray-400">
          Pizza contain ingredients:
          <span>
            {product.ingredients
              .map((ingredient) => ingredient.name)
              .join(', ')}
          </span>
        </p>
        <div className="flex flex-col gap-2 mt-5">
          <GroupVariants
            value={size}
            items={availableSizes}
            onClick={(value: number) => setSize(value)}
          />
          <GroupVariants
            value={type}
            items={pizzaTypes}
            onClick={(value: number) => setType(value)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3 mt-4">
            {product.ingredients?.map((ingredient: Ingredient) => (
              <Ingredients
                key={ingredient.id}
                ingredient={ingredient}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          // loading={isLoading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart {calculateTotalPrice} $
        </Button>
      </div>
    </div>
  )
}
