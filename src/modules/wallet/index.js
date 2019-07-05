import React, { Component } from 'react'
import JumpBtn from '../../containers/jumpBtn'
import Contribution from './../../containers/contribution'

import { connect } from 'dva'

import './style.less'

class Wallet extends Component {
  render() {
    return (
      <div className="wallet-view">
        <div className="wallet-my-point">
          <div className="wallet-my-point-box">
            <div className="wallet-my-point-text">
              <div className="wallet-my-point-text-val1">1</div>
              <div className="wallet-my-point-text-val2">我的贡献值</div>
            </div>
          </div>
        </div>
        <Contribution type="solid" onClick={ () => this.props.dispatch({ type: 'app/goPage', payload: { pathname: 'home' } })} />
        <div className="wallet-list">
          <div className="item">
            <div className="item-info">
              <div className="item-title">助力任务[ 2019最in穿法get到吗]</div>
              <div className="item-number">+1</div>
            </div>
            <div className="item-time">2019-07-01 17:19</div>
          </div>
        </div>

        <JumpBtn />
      </div>
    )
  }
}

export default connect(({ app }) => ({ app }))(Wallet)
