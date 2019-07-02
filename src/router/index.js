import React from 'react'
import { Router, Route, Switch, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'

import App from './../modules/app'

import routers from './router'

const { ConnectedRouter } = routerRedux

const Routers = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {
            routers.map(({ path, ...dynamics }, index) =>
              <Route exact key={index} path={path} component={dynamic({ app, ...dynamics })} />
            )
          }
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default Routers
