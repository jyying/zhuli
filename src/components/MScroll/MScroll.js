// 移动端容器
import React, { Component } from 'react'
import './MScroll.less'

export default class MScroll extends Component {

  componentDidMount() {
    const view = this.refs.swipeDown
    let clientY = 0
    let touches
    let offSetY
    let scrollTop = 0
    view.addEventListener('touchstart', e => {
      touches = e.targetTouches[0]
      clientY = touches.clientY
      console.log('触碰屏幕', touches.clientY)
    })
    view.addEventListener('touchmove', (e) => {
      touches = e.targetTouches[0]
      offSetY = touches.clientY - clientY
      scrollTop = view.scrollTop
      // console.log('滑动', touches.clientY, offSetY, view.scrollTop)
      if (offSetY > 0 && scrollTop === 0) {
        view.style.transform = `translateY(${offSetY}px)`
      }
    })
    view.addEventListener('touchend', () => {
      view.style.transform = 'translateY(0px)'
      clientY = 0
    })
    console.log(view, this.refs)
  }

  render() {
    return (
      <div className="m-scroll">
        <div className="show-text">松手刷新</div>
        <div className="m-view" ref="swipeDown">
          下拉容器
        </div>
      </div>
    )
  }
}