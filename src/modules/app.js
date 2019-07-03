import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

// import menu from '../config/menu'

import './app.less'

class App extends Component {

  state = {
    collapsed: false,
    isLogin: true,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { children } = this.props
    // console.log(menu)
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