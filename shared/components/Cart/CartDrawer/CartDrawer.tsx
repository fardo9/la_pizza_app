'use client'

import React, { FC, PropsWithChildren, useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/shared/components/ui/sheet'
import { cn } from '@/shared/lib/utils'
import { IProps } from '@/app/types'
import Link from 'next/link'
import { Button } from '../../ui'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Title } from '../..'
import { CartDrawerItem } from '..'
import { getCartItemDetails } from '@/helpers'

export const CartDrawer: FC<PropsWithChildren<IProps>> = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0)
  const [items, setItems] = React.useState([])
  const [redirecting, setRedirecting] = useState(false)

  const onClickCountButton = () => {}

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div
          className={cn(
            'flex flex-col h-full'
            // !totalAmount && 'justify-center'
          )}
        >
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                Add <span className="font-bold">{items.length} items</span> to
                cart
              </SheetTitle>
            </SheetHeader>
          )}
          <div className="-mx-6 mt-5 overflow-auto flex-1">
            <CartDrawerItem
              id={1}
              details={getCartItemDetails(
                [
                  {
                    name: 'Test',
                    id: 1,
                    price: 15,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
                  },
                  {
                    name: 'Test2',
                    id: 1,
                    price: 18,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
                  }
                ],
                2,
                30
              )}
              price={90}
              quantity={1}
              imageUrl="https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"
              name="Pepperoni"
              // quantity={2}
            />
          </div>

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Image
                src="/assets/images/empty-box.png"
                alt="Empty cart"
                width={120}
                height={120}
              />
              <Title
                size="sm"
                text="Cart is empty"
                className="text-center font-bold my-2"
              />
              <p className="text-center text-neutral-500 mb-5">
                Add at least one pizza to complete your order
              </p>

              <SheetClose>
                <Button className="w-56 h-12 text-base" size="lg">
                  <ArrowLeft className="w-5 mr-2" />
                  Back
                </Button>
              </SheetClose>
            </div>
          )}
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} $</span>
            </div>

            <Link href="/checkout">
              <Button
                //   onClick={() => setRedirecting(true)}
                //   loading={redirecting}
                type="submit"
                className="w-full h-12 text-base"
              >
                Place an order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
