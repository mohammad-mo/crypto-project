import { createContext, useReducer } from 'react'
import Reducer from './Reducer'

export const CoinContext = createContext()

const CoinContextProvider = ({ children }) => {
  const initialState = {
    coins: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <CoinContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CoinContext.Provider>
  )
}

export default CoinContextProvider
