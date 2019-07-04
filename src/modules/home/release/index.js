import React from 'react'

import Contribution from '../../../containers/contribution'
import Remind from './../../../containers/remind/index'

import img1 from '../../../../public/static/img/1554257582357.png'
import img2 from '../../../../public/static/img/1554209471510.png'
import img3 from '../../../../public/static/img/1554209483142.png'

import img4 from '../../../../public/static/img/wx-more.png'
import img5 from '../../../../public/static/img/copy-link.png'

import './style.less'

export default class HomeRelease extends React.Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
      roof: false,
    }
  }

  render() {
    const { modalVisible, roof } = this.state
    const { page } = this.props
    return (
      <div className="release-view">
        {
          roof ?
            <Remind>
              置顶时间为2小时，2小时后将自动更换为普通任务
            </Remind>
            :
            <Remind>
              被助力1次消耗1贡献值，贡献值为0时，任务自动下架。每人最多同时存在3个任务
            </Remind>
        }

        <div className="form-view">
          <div className="form-title" onClick={() => this.setState({ modalVisible: true })}>
            <p>微信文章链接</p>
            <div className="img">
              <img src={img1} />
            </div>
          </div>
          <div className="form-group">
            <form>
              <div className="form-input">
                <input placeholder="输入/粘贴文章链接" ref="link" />
              </div>
              <div className="form-input suffix">
                <div className="view-value-content">
                  <div className="value-input">
                    <input placeholder="输入期望阅读量" ref="number" />
                  </div>
                  <div className="vertical-line"></div>
                  <div className="surplus-value">剩余贡献值 1</div>
                </div>
              </div>
              <div className="ex" onClick={() => this.setState({ roof: !this.state.roof })}>
                {
                  roof ?
                    <img src={img3} />
                    :
                    <img src={img2} />
                }
                <p>置顶任务，将额外消耗10贡献值</p>
              </div>
              <div className="form-btn" onClick={this.onSubmit}>发布任务</div>
            </form>
          </div>
        </div>

        <Contribution onClick={() => { window.sessionStorage.tabVisible = "list"; page.setState({ selectedTab: 'list' }) }} />
        {
          modalVisible &&
          <div className="modal-view" onClick={() => this.setState({ modalVisible: false })}>
            <div className="modal-content">
              <div className="title">如何获取微信文章链接？</div>

              <div className="help">
                <p>1.打开需要助力的微信文章</p>
                <p>2. 点击右上角<img src={img4} /></p>
                <p>3. 再点击复制链接<img src={img5} /></p>
                <p>4. 返回本页面，粘贴链接</p>
              </div>
            </div>
          </div>
        }

      </div>
    )
  }

  onSubmit = () => {
    const { link, number } = this.refs
    console.log(link.value, number.value)
  }
}