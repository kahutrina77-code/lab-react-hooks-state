import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$0.75', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true },
  { id: 5, name: 'Carrot', price: '$1.25', category: 'Vegetables', inStock: true }
]

const ProductList = ({ category, addToCart }) => {
  // Filter products based on selected category
  const filteredProducts = category === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === category);

  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} 
        product={product} 
        addToCart={addToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
