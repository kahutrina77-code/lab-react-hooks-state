import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  // Handle add to cart click
 const handleAddToCart = () => {
  console.log('Button clicked, product:', product); // Add this for debugging
  addToCart(product);
} 
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button data-testid={'product-' + product.id}
       onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        Add to Cart</button>
    </div>
  )
}

export default ProductCard
