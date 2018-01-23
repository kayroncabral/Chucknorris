import {
  getRandomJokeByCategory,
  getRandomJokeByCategoryRequest,
  getRandomJokeByCategoryFailure,
  getRandomJokeByCategorySuccess
} from './joke'
import { joke } from '../seeds/joke'

test('Should setup set orders action object', () => {
  const action = getRandomJokeByCategory(joke)
  expect(action).toEqual({
    type: 'GET_RANDOM_JOKE_BY_CATEGORY',
    joke: {
      ...joke
    }
  })
})

test('Should generate action object for order request', () => {
  const action = getRandomJokeByCategoryRequest()
  expect(action).toEqual({ type: 'GET_RANDOM_JOKE_BY_CATEGORY_REQUEST' })
})

test('Should generate action object for order request failure', () => {
  const error = Error({ 'message': 'Whoops, looks like something went wrong.' })
  const action = getRandomJokeByCategoryFailure(error)
  expect(action).toEqual({
    type: 'GET_RANDOM_JOKE_BY_CATEGORY_FAILURE',
    error
  })
})

test('Should generate action object for order request success', () => {
  const action = getRandomJokeByCategorySuccess()
  expect(action).toEqual({ type: 'GET_RANDOM_JOKE_BY_CATEGORY_SUCCESS' })
})
