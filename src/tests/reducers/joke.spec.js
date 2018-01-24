import jokeReducer from '../../reducers/joke'
import { joke } from '../../seeds/joke'

test('Should setup default joke value', () => {
  const state = jokeReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({ error: null })
})

test('Should set joke', () => {
  const action = {
    type: 'GET_CATEGORIES',
    joke
  }
  const state = jokeReducer(joke, action)
  expect(state).toEqual({ ...joke })
})

test('Should set joke error', () => {
  const error = new Error('Something went wrong.')
  const action = {
    type: 'GET_RANDOM_JOKE_BY_CATEGORY_FAILURE',
    error: error.message
  }
  const state = jokeReducer(joke, action)

  expect(state).toEqual({ error: error.message })
})
