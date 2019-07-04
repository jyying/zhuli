import React, { Component } from 'react'
import { connect } from 'dva'

import './style.less'

import img1 from '../../../public/static/img/1554796431210.png'

class JumpBtn extends Component {
  render() {
    console.log(this.props)
    return (
      <img src={img1} className="jump-btn" onClick={this.onClick} />
    )
  }

  onClick = () => {
    this.props.dispatch({ type: 'app/goPage', payload: { pathname: 'home' } })
  }
}

export default connect(({ app }) => ({ app }))(JumpBtn)
