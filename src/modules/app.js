import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'

import { NavBar, Icon } from 'antd-mobile'

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
    // const { children } = this.props
    // console.log(menu)
    return (
      <div>
        主入口
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu">
              1
            </IconButton>
            <Typography variant="h6">
              News
          </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          NavBar
        </NavBar>
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