import { createContext, useState } from 'react'
// Context has been created
export const ThemeContext = createContext(false)
// Provider
const ThemeContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const toggleHandler = () => {
    setToggle(!toggle)
  }
  return (
    <ThemeContext.Provider value={{ toggle, toggleHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
