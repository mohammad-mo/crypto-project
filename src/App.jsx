import Landing from './components/Landing'
import ErrorBoundary from './components/ErrorBoundary'
import SingleCoin from './components/SingleCoin'

import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { ThemeContext } from './context/ThemeContext'

const App = () => {
  const { toggle } = useContext(ThemeContext)

  return (
    <ErrorBoundary>
      <div
        className='py-5 px-2 sm:px-10 min-h-screen'
        data-theme={`${!toggle ? 'dark' : 'light'}`}
      >
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='coins/:name' element={<SingleCoin />} />
        </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default App
