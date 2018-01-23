import categoriesReducer from './categories'
import { categories } from '../seeds/categories'

test('Should setup default orders values', () => {
  const state = categoriesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('Should set orders', () => {
  const action = {
    type: 'GET_CATEGORIES',
    categories
  }
  const state = categoriesReducer(categories, action)
  expect(state).toEqual([ ...categories ])
})
