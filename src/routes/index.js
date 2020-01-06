import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Homepage'


export default () => (
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/compute" />
        </Switch>
    )
