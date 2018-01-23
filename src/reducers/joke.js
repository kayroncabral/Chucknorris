/*
  1. Reducers are pure functions
  2. Never change state or action
*/

const defaultState = {
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_RANDOM_JOKE_BY_CATEGORY':
      return {
        error: null,
        ...action.joke
      }
    case 'GET_RANDOM_JOKE_BY_CATEGORY_FAILURE':
      return {
        error: action.error
      }
    case 'CLEAR_JOKE':
      return defaultState
    default:
      return state
  }
}
