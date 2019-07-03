import React, { Component } from 'react'

import img1 from '../../../public/static/img/1554209269603.png'
import img2 from '../../../public/static/img/1554359788074.png'

import './index.less'

export default class Contribution extends Component {
  constructor() {
    super()
    this.state = {
      rList: [
        {
          number: 10,
          explain: 10,
          money: 1,
        },
        {
          number: 100,
          explain: 100,
          money: 10,
        },
        {
          number: 1000,
          explain: 1000,
          money: 40,
        }
      ],
    }
  }
  render() {
    const { rList } = this.state
    return (
      <div className="channel-view">

        <div className="recharge">
          <p className="title">充值得贡献值</p>
          <div className="recharge-method">
            {
              rList.map((item, index) => (
                <div className="li" key={index}>
                  <div className="info">
                    <p className="agg">{item.number}</p><p className="agg_">贡献值</p>
                  </div>
                  <p className="explain">增加{item.explain}次阅读</p>
                  <div className="money">支付{item.money}元</div>
                </div>
              ))
            }

          </div>
        </div>

        <div className="line-view">
          <div className="line" />
        </div>

        <div className="free">
          <p className="title">其他方式获取贡献值</p>
          <div className="ul">
            <div className="li">
              <img src={img1} />
            </div>
            <div className="li">
              <img src={img2} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}