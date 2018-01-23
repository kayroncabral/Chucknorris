import {
  getCategories,
  getCategoriesRequest,
  getCategoriesFailure,
  getCategoriesSuccess
} from './categories'
import { categories } from '../seeds/categories'

test('Should setup set orders action object', () => {
  const action = getCategories(categories)
  expect(action).toEqual({
    type: 'GET_CATEGORIES',
    categories: [
      ...categories
    ]
  })
})

test('Should generate action object for order request', () => {
  const action = getCategoriesRequest()
  expect(action).toEqual({ type: 'GET_CATEGORIES_REQUEST' })
})

test('Should generate action object for order request failure', () => {
  const error = Error({ 'message': 'Whoops, looks like something went wrong.' })
  const action = getCategoriesFailure(error)
  expect(action).toEqual({
    type: 'GET_CATEGORIES_FAILURE',
    error
  })
})

test('Should generate action object for order request success', () => {
  const action = getCategoriesSuccess()
  expect(action).toEqual({ type: 'GET_CATEGORIES_SUCCESS' })
})
