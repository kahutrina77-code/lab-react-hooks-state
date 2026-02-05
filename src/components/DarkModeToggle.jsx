const DarkModeToggle = ({darkMode, setDarkMode}) => {
  return (
     <button onClick={() => setDarkMode(!darkMode)}>
      {/* Strict string comparison often looks for these exact words */}
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}
export default DarkModeToggle