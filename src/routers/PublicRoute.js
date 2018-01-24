import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../components/Footer'

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      <div>
        <Component {...props}/>
        <Footer/>
      </div>
    )}
  />
)

export default PublicRoute
