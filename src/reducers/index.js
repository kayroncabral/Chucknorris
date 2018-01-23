import { combineReducers } from 'redux'

import categories from './categories'
import joke from './joke'
import user from './user'

export default combineReducers({ user, joke, categories })
