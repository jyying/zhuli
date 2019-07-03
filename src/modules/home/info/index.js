import React from 'react'

import './style.less'

export default class HomeInfo extends React.Component {
  render() {
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

        <div className="option-list">
          <div className="list-item">
            <img />
            <p>赚取贡献值</p>
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
}
