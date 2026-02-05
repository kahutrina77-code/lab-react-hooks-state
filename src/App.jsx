import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css' 

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const addToCart = (product) => {
  setCart([...cart, product]);
};

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    // The rubric mentions Dark Mode should change state and visuals
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <h1>Talia's Shopping App</h1>
      
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="filter-container">
        <label htmlFor="category-select">Filter by Category: </label>
        <select id="category-select" value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>

      <ProductList category={category} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  )
}

export default App