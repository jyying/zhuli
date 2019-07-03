import React, { Component } from 'react'

import img1 from '../../../public/static/img/monkey_step1.png'
import img2 from '../../../public/static/img/monkey_step2.png'

import './style.less'

class WithdrawCash extends Component {
  render() {
    return (
      <div className="withdraw-view">
        <div className="withdraw-cash-bg">
          <div className="withdraw-cash-bg-text">
            <div className="withdraw-cash-bg-text1">可提取人民币</div>
            <div className="withdraw-cash-bg-text2">0</div>
          </div>
          <div className="withdraw-cash-button">去银魔方提现</div>
        </div>

        <div className="withdraw-cash-step">
          <div className="withdraw-cash-step-one">
            <div class="withdraw-cash-step-text1">第一步</div>
            <div class="withdraw-cash-step-text2">下载打开银魔方APP</div>
            <img src={img1} className="withdraw-cash-step-img" />
          </div>
          <div className="withdraw-cash-step-two">
            <div class="withdraw-cash-step-text1">第二步</div>
            <div class="withdraw-cash-step-text2">在“我的”中提现</div>
            <img src={img2} className="withdraw-cash-step-img" />
          </div>
        </div>
      </div>
    )
  }
}

export default WithdrawCash
