import axios from 'axios'
import config from '../config'

/*x
  GET RANDOM JOKE BY CATEGORY
*/

export const clearJoke = () => ({
  type: 'CLEAR_JOKE'
})

export const getRandomJokeByCategory = joke => ({
  type: 'GET_RANDOM_JOKE_BY_CATEGORY',
  joke
})

export const getRandomJokeByCategoryRequest = () => ({
  type: 'GET_RANDOM_JOKE_BY_CATEGORY_REQUEST'
})

export const getRandomJokeByCategoryFailure = error => ({
  type: 'GET_RANDOM_JOKE_BY_CATEGORY_FAILURE',
  error: error.message || 'Something went wrong.'
})

export const getRandomJokeByCategorySuccess = () => ({
  type: 'GET_RANDOM_JOKE_BY_CATEGORY_SUCCESS'
})

export const startGetRandomJokeByCategory = (category = '') => {
  return (dispatch) => {
    dispatch(getRandomJokeByCategoryRequest())

    return axios(`${config.API}/jokes/random?category=${encodeURIComponent(category)}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
       if (response.status >= 200 && response.status < 300) {
         dispatch(getRandomJokeByCategorySuccess())
         return response.data
       }
       throw new Error('Something went wrong.')
     }).then(joke => {
       dispatch(getRandomJokeByCategory(joke))
     }).catch(error => {
       dispatch(getRandomJokeByCategoryFailure(error))
     })
  }
}
