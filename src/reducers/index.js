import { combineReducers } from 'redux'

import category from './category'
import joke from './joke'
import user from './user'

export default combineReducers({ user, joke, category })
