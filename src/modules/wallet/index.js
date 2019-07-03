import React, { Component } from 'react'
import './style.less'

import Contribution from './../../containers/contribution/index'

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
        <Contribution />
        <div className="wallet-list">
          <div className="item">
            <div className="item-info">
              <div className="item-title">助力任务[ 2019最in穿法get到吗]</div>
              <div className="item-number">+1</div>
            </div>
            <div className="item-time">2019-07-01 17:19</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Wallet
