import Landing from './components/Landing'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
    <ErrorBoundary>
      <div className='flex flex-col justify-center max-w-7xl py-5 px-2 sm:px-10 mx-auto'>
        <Landing />
      </div>
    </ErrorBoundary>
  )
}

export default App
