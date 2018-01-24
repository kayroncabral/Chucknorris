import {
  getRandomJokeByCategory,
  getRandomJokeByCategoryRequest,
  getRandomJokeByCategoryFailure,
  getRandomJokeByCategorySuccess
} from '../../actions/joke'
import { joke } from '../../seeds/joke'

test('Should setup joke action object', () => {
  const action = getRandomJokeByCategory(joke)
  expect(action).toEqual({
    type: 'GET_RANDOM_JOKE_BY_CATEGORY',
    joke: {
      ...joke
    }
  })
})

test('Should generate action object for joke request', () => {
  const action = getRandomJokeByCategoryRequest()

  expect(action).toEqual({ type: 'GET_RANDOM_JOKE_BY_CATEGORY_REQUEST' })
})

test('Should generate action object for joke request failure', () => {
  const error = Error({ 'message': 'Whoops, looks like something went wrong.' })
  const action = getRandomJokeByCategoryFailure(error)

  expect(action).toEqual({
    type: 'GET_RANDOM_JOKE_BY_CATEGORY_FAILURE',
    error: error.message
  })
})

test('Should generate action object for joke request success', () => {
  const action = getRandomJokeByCategorySuccess()

  expect(action).toEqual({ type: 'GET_RANDOM_JOKE_BY_CATEGORY_SUCCESS' })
})
