/*
  1. Reducers are pure functions
  2. Never change state or action
*/

const defaultState = {
  error: null,
  categories: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        error: null,
        categories: action.categories
      }
    case 'GET_RANDOM_JOKE_BY_CATEGORY_FAILURE':
      return {
        error: action.error,
        categories: []
      }
    default:
      return state
  }
}
