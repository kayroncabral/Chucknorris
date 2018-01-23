import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import PublicRoute from './PublicRoute'
import NotFound from '../components/NotFound'
import CategoriesView from '../views/CategoriesView'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/' component={CategoriesView}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
