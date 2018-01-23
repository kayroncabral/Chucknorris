import { combineReducers } from 'redux'

import joke from './joke'
import user from './user'

export default combineReducers({ user, joke })
