const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        coins: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default Reducer
