import axios from 'axios'
import config from '../config'

/*
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
  error
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
       if (response.statusText === '') {
         dispatch(getCategoriesSuccess())
         return response.data
       }
       throw Error(response.statusText)
     }).then(order => {
       dispatch(getCategories(order))
     }).catch(error => {
       dispatch(getCategoriesFailure(error))
     })
  }
}
