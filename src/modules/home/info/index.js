import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

import imgs1 from '../../../../public/static/img/1554256777791.png'
import imgs2 from '../../../../public/static/img/1554256761590.png'
import imgs3 from '../../../../public/static/img/1554256711701.png'
import imgs4 from '../../../../public/static/img/1554256735113.png'

import './style.less'

class HomeInfo extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="info-view">
        <div className="user-view">
          <div className="bg"></div>
          <div className="user-card">

            <div className="user">
              <img className="avatar" />
              <div className="base-info">
                <p className="mobile">123456789</p>
                <p className="introduce">我为人人，人人为我</p>
              </div>
            </div>
            <div className="line" />
            <ul className="list">
              <li>
                <p className="agg">1</p>
                <p>贡献值</p>
              </li>
              <li>
                <p className="agg">1</p>
                <p>助力</p>
              </li>
              <li>
                <p className="agg">1</p>
                <p>被助力</p>
              </li>
            </ul>

          </div>
        </div>

        <div className="option-list" onClick={this._onClick}>
          <div className="list-item" data-url="wallet">
            <img src={imgs1} />
            <p>赚取贡献值</p>
          </div>
          <div className="list-item" data-url="withdrawCash">
            <img src={imgs2} />
            <p>贡献值提现</p>
          </div>
          <div className="list-item" data-url="task">
            <img src={imgs3} />
            <p>发布的任务</p>
          </div>
          <div className="list-item" data-action="modalShow">
            <img src={imgs4} />
            <p>邀请好友</p>
          </div>
        </div>

        <div className="bi">
          <p>1. 进入阅读量神器平台，初始奖励2贡献值</p>
          <p>2. 助力1次，获取1贡献值</p>
          <p>3. 被助力1次，消耗1贡献值</p>
          <p>4. 每邀请1位好友参与互阅，奖励邀请用户10贡献值，被邀请用户奖励2贡献值（好友至少需要发布1次任务/助力他人1次）</p>
          <p>5. 充值得贡献值，充值1元=10贡献值，10元=100贡献值，40元=1000贡献值</p>
          <p>6. 每天最多阅读120次，超过后微信无法统计</p>
        </div>

        <p className="copyright">更多贡献值，更多阅读量</p>
      </div>
    )
  }

  _onClick = (e) => {
    const data = e.target.dataset || {}
    console.log(data)
    if (data.url) {
      this.props.dispatch(routerRedux.push({
        pathname: data.url,
      }))
    }
    if (data.action) {
      this[data.action]()
    }
  }

  modalShow = () => {
    console.log('弹出窗口')
  }
}

export default connect(({ home }) => ({ home }))(HomeInfo)
