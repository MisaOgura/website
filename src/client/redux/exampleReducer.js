export const defaultMessage = 'You are now connected to the Redux store!'

const initialState = {
  message: defaultMessage
}

export const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
export const changeMessage = message => ({type: CHANGE_MESSAGE, message})

export default (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case CHANGE_MESSAGE:
      newState.message = action.message
      return newState
    default:
      return state
  }
}
