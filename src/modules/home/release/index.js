import React from 'react'

import Contribution from '../../../containers/contribution'

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
        <Contribution />
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