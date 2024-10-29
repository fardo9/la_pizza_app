import { Plus } from 'lucide-react'
import React, { FC } from 'react'
import { Button } from '../../ui'
import { Title } from '..'
import Link from 'next/link'
import { IProps } from './types'

export const ProductCard: FC<IProps> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  console.log('sddss', ingredients)
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {ingredients
            .map((ingredient) => <li key={ingredient.id}>{ingredient.name}</li>)
            .join(', ')}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} $</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  )
}
