import { combineReducers } from 'redux'

import categories from './categories'
import user from './user'

export default combineReducers({ user, categories })
