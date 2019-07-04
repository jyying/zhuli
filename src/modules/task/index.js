import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

import Remind from './../../containers/remind'
import XLoadMore from 'components/XLoadMore/XLoadMore'
import JumpBtn from './../../containers/jumpBtn'


import MModal from 'components/MModal'

import './style.less'

const alert = MModal.alert

class Task extends Component {

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
          loadVisible: true,
        })
      }
    })
  }

  cerateItem = (item) => {
    const { index, type } = item
    return (
      <div className={`list-item ${type}`} key={index}>
        <div className="title">百度翻译</div>
        <div className="line" />
        <div className="info-view">
          <div className="info-1">被助 1</div>
          <div className="info-2">剩余被助次数 0</div>
          <div className="info-btn1 btn" onClick={this.goPage}>再次发布</div>
          <div className="info-btn2 btn" onClick={() =>
            alert('删除任务', '删除后贡献值无法退回，是否确认删除', [
              { text: '暂不删除', onPress: () => console.log('cancel') },
              { text: '确认删除', onPress: () => console.log('ok') },
            ])
          }
          >
            删除任务
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { data, loadVisible } = this.state
    return (
      <div className="list-view" ref="view">

        <Remind>
          贡献值为0时,可赚取贡献值后,再次发布任务
        </Remind>

        <div className="list-main1">
          {
            data.map((item, index) => this.cerateItem({ ...item, index }))
          }
          {
            loadVisible &&
            <XLoadMore status="loading" />
          }
        </div>
        <JumpBtn />
      </div>
    )
  }

  goPage = () => {
    window.sessionStorage.tabVisible = "release"
    this.props.dispatch(routerRedux.push({
      pathname: 'home',
    }))
  }
}

export default connect()(Task)
