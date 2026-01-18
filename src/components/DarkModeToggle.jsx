import React from 'react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  // TODO: Implement dark mode toggle logic
  const handleToggle = () => {
    setDarkMode(!darkMode);

  }

  return (
     <button onClick={handleToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
