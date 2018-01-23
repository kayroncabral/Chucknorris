import jokeReducer from './joke'
import { joke } from '../seeds/joke'

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
