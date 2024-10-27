import React from 'react'

import { cn } from '@/app/shared/components/lib/utils'
import Image from 'next/image'
import { Container } from './container'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import { Button } from '../ui'
import { IProps } from '@/app/types'


export const Header: React.FC<IProps> = ({ className }) => {
  return (
    <header className={cn('border-b border-gray-100', className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={35} height={35} alt="Logo" />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              смачніше як ніколи
            </p>
          </div>
        </div>
        <div className="mx-10 flex-1">{/* <SearchInput /> */}</div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} /> Log In
          </Button>

          {/* <CartDrawer> */}
          <Button className="group relative">
            <b>520 UAH</b>
            <span className="h-full w-[1px] bg-white/30 mx-3" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart size={16} className="relative" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight
              size={16}
              className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Button>
          {/* </CartDrawer> */}
        </div>
      </Container>
    </header>
  )
}
