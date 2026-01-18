import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in cart: {cart.length}</p>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart