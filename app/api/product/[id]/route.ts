import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 })
  }

  try {
    const product = await prisma.product.findFirst({
      where: { id: Number(id) },
      include: {
        ingredients: true,
        category: {
          include: {
            products: {
              include: {
                items: true
              }
            }
          }
        },
        items: true
      }
    })

    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
