import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const category = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        }
      }
    }
  })

  return NextResponse.json(category)
}
