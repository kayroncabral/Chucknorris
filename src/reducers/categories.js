/*
  1. Reducers are pure functions
  2. Never change state or action
*/

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return [
        ...action.categories
      ]
    default:
      return state
  }
}
