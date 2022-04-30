import Landing from './components/Landing'
import ErrorBoundary from './components/ErrorBoundary'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('')

  return (
    <ErrorBoundary>
      <div
        className='flex flex-col justify-center max-w-7xl py-5 px-2 sm:px-10 mx-auto'
        data-theme={`${!theme ? 'dark' : 'light'}`}
      >
        <Landing theme={theme} setTheme={setTheme} />
      </div>
    </ErrorBoundary>
  )
}

export default App
