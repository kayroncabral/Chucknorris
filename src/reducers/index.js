import { combineReducers } from 'redux'

import category from './category'
import joke from './joke'

export default combineReducers({ joke, category })
