import categoriesReducer from './category'
import { categories } from '../seeds/categories'

test('Should setup default categories values', () => {
  const state = categoriesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({ categories: [], error: null })
})

test('Should set categories', () => {
  const action = {
    type: 'GET_CATEGORIES',
    categories
  }
  const state = categoriesReducer(categories, action)
  expect(state).toEqual({ error: null, categories })
})

test('Should set category error', () => {
  const error = new Error('Something went wrong.')
  const action = {
    type: 'GET_RANDOM_JOKE_BY_CATEGORY_FAILURE',
    error: error.message
  }
  const state = categoriesReducer(categories, action)

  expect(state).toEqual({ error: error.message, categories: [] })
})
