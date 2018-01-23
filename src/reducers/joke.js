/*
  1. Reducers are pure functions
  2. Never change state or action
*/

const defaultState = {
  categories: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}
