import React from 'react'

import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import { User } from 'lucide-react'
import { Button } from '../ui'
import { IProps } from '@/app/types'
import { CartButton, Container, SearchInput } from '..'
import Link from 'next/link'

export const Header: React.FC<IProps> = ({ className }) => {
  return (
    <header className={cn('border-b border-gray-100', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" width={35} height={35} alt="Logo" />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                смачніше як ніколи
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} /> Log In
          </Button>

          {/* <CartDrawer> */}
          <CartButton />
          {/* </CartDrawer> */}
        </div>
      </Container>
    </header>
  )
}
