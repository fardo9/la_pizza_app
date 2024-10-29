import React from 'react'

const ProductDetails = ({ params: { id } }: { params: { id: string } }) => {
  console.log('params', id) // { id: '123' }

  // Fetch product details from API using the provided ID
  return <div>ProductDetails {id}</div>
}

export default ProductDetails
