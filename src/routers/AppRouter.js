import React from 'react'
import { Router, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import NotFound from '../components/NotFound'
import CategoriesView from '../views/CategoriesView'
import JokeView from '../views/JokeView'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/' component={CategoriesView}/>
        <PublicRoute path='/joke' component={JokeView}/>
        <PublicRoute component={NotFound}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
