import { createContext, useReducer } from 'react'
import coinReducer from './coinReducer'

export const CoinContext = createContext()

const CoinContextProvider = ({ children }) => {
  const initialState = {
    coins: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(coinReducer, initialState)

  return (
    <CoinContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CoinContext.Provider>
  )
}

export default CoinContextProvider
