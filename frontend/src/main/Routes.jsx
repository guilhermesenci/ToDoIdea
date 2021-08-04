import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Crud from '../components/user/Crud'

export default (props) =>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={Crud} />
    <Redirect from='*' to='/' />
  </Switch>