import { IndexRoute, Route } from 'react-router'

import DashboardContainer from '../containers/DashboardContainer'
import ForgotPassword from '../pages/forgotPassword/ForgotPassword'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import MainLayout from '../layouts/MainLayout'
import NotFound from '../components/notFound/NotFound'
import React from 'react'
import SignUp from '../pages/signup/SignUp'

const routes = (
  <Route path='/'>
    <Route component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path='/dashboard' component={DashboardContainer} />
      <Route path='/forgotPassword' component={ForgotPassword} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)

export default routes
