import React from 'react'

import './style.less'

import Remind from './../../../containers/remind/index'
import XLoadMore from 'components/XLoadMore/XLoadMore'

export default class HomeList extends React.Component {

  constructor() {
    super()
    this.state = {
      data: [
        {
          type: 'special',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        },
        {
          type: 'normal',
        }
      ],
      loadVisible: false,
    }
  }

  componentDidMount() {
    const view = this.refs.view
    view.addEventListener('scroll', () => {
      // console.log('滚动', view.scrollHeight, view.offsetHeight, view.scrollTop)
      if ((view.scrollHeight - view.scrollTop) <= view.offsetHeight) {
        console.log('触底')
        this.setState({
          loadStatus: 'loading',
        })
      }
    })
  }

  cerateItem = (item) => {
    const { index, type } = item
    return (
      <div className={`list-item ${type}`} key={index}>
        <div className="top">
          <div className="user">
            <img />
            <p>Nicon</p>
          </div>
          <span className="tag">置顶</span>
        </div>

        <p className="title">食物</p>

        <div className="line" />

        <div className="user-list">
          <div className="left">
            <div className="avatar-list">
              <img />
              <img />
              <img />
            </div>
            <span>等100个人助力过</span>
          </div>
          <div className="right">
            点击助力
      </div>
        </div>
      </div>
    )
  }

  render() {
    const { data, loadStatus } = this.state
    return (
      <div className="list-view" ref="view">

        <Remind>
          点击助力跳转到微信文章页面，文末查看当前阅读量，返回大厅填写阅读量即可完成助力。每次助力奖励1贡献值
        </Remind>

        <div className="list-main">
          {
            data.map((item, index) => this.cerateItem({ ...item, index }))
          }
          <XLoadMore status={loadStatus} />
        </div>

      </div>
    )
  }
}