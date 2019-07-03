import React from 'react'

import './style.less'

export default class HomeList extends React.Component {
  render() {
    return (
      <div className="list-view">

        <div className="remind">
          <p className="agg">
            点击助力跳转到。。。。。
          </p>
        </div>

        <div className="list-main">
          <div className="list-item special">
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

          <div className="list-item">
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
        </div>

      </div>
    )
  }
}