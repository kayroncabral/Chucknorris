import axios from 'axios'
import config from '../config'

/*x
  GET RANDOM JOKE BY CATEGORY
*/

export const getRandomJokeByCategory = joke => ({
  type: 'GET_RANDOM_JOKE_BY_CATEGORY',
  joke
})

export const getRandomJokeByCategoryRequest = () => ({
  type: 'GET_RANDOM_JOKE_BY_CATEGORY_REQUEST'
})

export const getRandomJokeByCategoryFailure = error => ({
  type: 'GET_RANDOM_JOKE_BY_CATEGORY_FAILURE',
  error
})

export const getRandomJokeByCategorySuccess = () => ({
  type: 'GET_RANDOM_JOKE_BY_CATEGORY_SUCCESS'
})

export const startGetRandomJokeByCategory = category => {
  return (dispatch) => {
    dispatch(getRandomJokeByCategoryRequest())

    return axios(`${config.API}/jokes/random?category=${encodeURIComponent(category)}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
       if (response.statusText === '') {
         dispatch(getRandomJokeByCategorySuccess())
         return response.data
       }
       throw Error(response.statusText)
     }).then(joke => {
       dispatch(getRandomJokeByCategory(joke))
     }).catch(error => {
       dispatch(getRandomJokeByCategoryFailure(error))
     })
  }
}
