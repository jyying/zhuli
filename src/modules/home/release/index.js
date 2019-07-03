import React from 'react'

import './style.less'

export default class HomeRelease extends React.Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
    }
  }

  render() {
    const { modalVisible } = this.state
    return (
      <div className="release-view">
        <div className="top-explain">被助力1次消耗1贡献值，贡献值为0时，任务自动下架。每人最多同时存在3个任务</div>
        <div className="form-view">
          输入发布
        </div>

        <div className="channel-view">

          <div className="recharge">
            <p className="title">充值得贡献值</p>
            <div className="recharge-method">
              <div className="li">
                <div className="info">
                  <p className="agg">10</p><p className="agg_">贡献值</p>
                </div>
                <p className="explain">增加10次阅读</p>
                <div className="money">支付1元</div>
              </div>
            </div>
          </div>

          <div className="line-view">
            <div className="line" />
          </div>

          <div className="free">
            <p className="title">其他方式获取贡献值</p>
            <div className="ul">
              <div className="li"></div>
            </div>
          </div>

        </div>

        {
          modalVisible &&
          <div className="modal-view">
            <div className="share">分享</div>

            <div className="help">
              <p className="agg">如何获取微信文章链接</p>
              <p>1.打开需要助力的微信文章</p>
            </div>
          </div>
        }

      </div>
    )
  }
}