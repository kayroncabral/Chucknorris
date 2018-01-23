import axios from 'axios'
import config from '../config'

/*x
  GET CATEGORIES
*/

export const getCategories = (categories) => ({
  type: 'GET_CATEGORIES',
  categories
})

export const getCategoriesRequest = () => ({
  type: 'GET_CATEGORIES_REQUEST'
})

export const getCategoriesFailure = (error) => ({
  type: 'GET_CATEGORIES_FAILURE',
  error: error.message || 'Something went wrong.'
})

export const getCategoriesSuccess = () => ({
  type: 'GET_CATEGORIES_SUCCESS'
})

export const startGetCategories = () => {
  return (dispatch) => {
    dispatch(getCategoriesRequest())

    return axios(`${config.API}/jokes/categories`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
       if (response.status >= 200 && response.status < 300) {
         dispatch(getCategoriesSuccess())
         return response.data
       }
       throw Error('Something went wrong.')
     }).then(categories => {
       dispatch(getCategories(categories))
     }).catch(error => {
       dispatch(getCategoriesFailure(error))
     })
  }
}
