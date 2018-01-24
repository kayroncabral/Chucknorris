import {
  getCategories,
  getCategoriesRequest,
  getCategoriesFailure,
  getCategoriesSuccess
} from '../../actions/category'
import { categories } from '../../seeds/categories'

test('Should setup categories action object', () => {
  const action = getCategories(categories)
  expect(action).toEqual({
    type: 'GET_CATEGORIES',
    categories: [
      ...categories
    ]
  })
})

test('Should generate action object for category request', () => {
  const action = getCategoriesRequest()
  expect(action).toEqual({ type: 'GET_CATEGORIES_REQUEST' })
})

test('Should generate action object for cateogory request failure', () => {
  const error = Error({ 'message': 'Whoops, looks like something went wrong.' })
  const action = getCategoriesFailure(error)

  expect(action).toEqual({
    type: 'GET_CATEGORIES_FAILURE',
    error: error.message
  })
})

test('Should generate action object for category request success', () => {
  const action = getCategoriesSuccess()
  expect(action).toEqual({ type: 'GET_CATEGORIES_SUCCESS' })
})
