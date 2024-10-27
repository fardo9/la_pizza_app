import React, { FC } from 'react'
import { CheckboxFilterGroup, Title } from '..'
import { FilterCheckbox } from '../filter-checkbox'
import { Input } from '../../ui'
import { RangeSlider } from '../range-slider'
import { IProps } from '@/app/types'

export const FilterProducts: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFilterGroup
          title="Dought type"
          name="pizzaTypes"
          className="mb-5"
          // onClickCheckbox={filters.setPizzaTypes}
          // selected={filters.pizzaTypes}
          items={[
            { text: 'Thin', value: '1' },
            { text: 'Traditional', value: '2' },
          ]}
        />

        <CheckboxFilterGroup
          title="Size"
          name="sizes"
          className="mb-5"
          // onClickCheckbox={filters.setSizes}
          // selected={filters.sizes}
          items={[
            { text: '20 см', value: '20' },
            { text: '30 см', value: '30' },
            { text: '40 см', value: '40' },
          ]}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <div className="flex mb-5">
          <RangeSlider min={0} max={1000} step={10} />
        </div>

        <CheckboxFilterGroup
          title="Тип теста"
          name="pizzaTypes"
          className="mb-5"
          // onClickCheckbox={filters.setPizzaTypes}
          // selected={filters.pizzaTypes}
          items={[
            { text: 'Тонкое', value: '1' },
            { text: 'Традиционное', value: '2' },
          ]}
        />
        <CheckboxFilterGroup
          title="Размеры"
          name="sizes"
          className="mb-5"
          // onClickCheckbox={filters.setSizes}
          // selected={filters.sizes}
          items={[
            { text: '20 см', value: '20' },
            { text: '30 см', value: '30' },
            { text: '40 см', value: '40' },
            { text: '90 см', value: '90' },
          ]}
        />
      </div>
    </div>
  )
}
