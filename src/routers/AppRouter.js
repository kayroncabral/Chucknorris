import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import PublicRoute from './PublicRoute'
import NotFound from '../components/NotFound'
import CategoriesView from '../views/CategoriesView'
import JokeView from '../views/JokeView'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/' component={CategoriesView}/>
        <PublicRoute path='/joke' component={JokeView}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
