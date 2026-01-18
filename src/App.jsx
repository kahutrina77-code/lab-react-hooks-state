import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css' 

const App = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // State for cart management
  const [cart, setCart] = useState([])

  // State for category filtering
  const [category, setCategory] = useState('all')

  // Function to add items to cart
  const addToCart = (product) => {
  console.log('Adding to cart:', product); // Add this for debugging
  setCart([...cart, product]);
}

  // Function to handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={darkMode ? 'app-dark' : 'app-light'}>
      <h1>Talia's Shopping App</h1>
      <p>
        Welcome to our grocery store. Enjoy shopping!
      </p>

      {/* Render DarkModeToggle with dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category filter dropdown with onChange event */}
      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      <ProductList category={category} addToCart={addToCart} />

      {/* Render Cart component with cart state */}
      <Cart cart={cart} />
    </div>
  )
}

export default App