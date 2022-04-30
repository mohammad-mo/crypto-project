import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessage: '',
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // console.log('Error Boundary', error, errorInfo)
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
      errorMessage: 'Could not fetch data!',
    })
  }

  render() {
    const { hasError, errorMessage } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <p className='flex justify-center items-center h-[100vh] text-3xl'>
          {errorMessage}
        </p>
      )
    } else {
      return children
    }
  }
}

export default ErrorBoundary
