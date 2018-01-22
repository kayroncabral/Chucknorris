import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

render(jsx, document.getElementById('root'))
