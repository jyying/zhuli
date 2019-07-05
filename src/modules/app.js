import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

import './app.less'

class App extends Component {

  state = {
    collapsed: false,
    isLogin: true,
  }

  componentDidMount() {
    const isLogin = window.sessionStorage.isLogin
    console.log('是否登录', isLogin)
    if (isLogin) {
      this.props.dispatch({ type: 'app/goPage', payload: { pathname: 'home' } })
    } else {
      this.props.dispatch({ type: 'app/goPage', payload: { pathname: 'login' } })
    }
  }

  render() {
    const { children } = this.props
    return (
      <div className="main">
        {children}
      </div>
    )
  }
}

export default withRouter(connect(
  state => {
    return {
      app: state.app
    }
  }
)(App))