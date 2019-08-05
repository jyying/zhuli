// 移动端容器
import React, { Component } from 'react'
import './MScroll.less'

export default class MScroll extends Component {

  constructor() {
    super()
    this.state = {
      scrollState: 'load',
    }
  }

  static defaultProps = {
    state: 'load',
    onLoad: () => { },
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState, '----------------------------')
    const { state } = nextProps
    return { scrollState: state }
  }

  componentDidMount() {
    const view = this.refs.swipeDown
    const downText = this.refs.downText
    let clientY = 0
    let touches
    let offSetY
    let scrollTop = 0

    let setTime = null
    // 开始触碰
    view.addEventListener('touchstart', e => {
      if (this.state.scrollState === 'loading') return
      touches = e.targetTouches[0]
      clientY = touches.clientY
      console.log('触碰屏幕', touches.clientY)
    })
    // 触碰轨迹
    view.addEventListener('touchmove', (e) => {
      if (this.state.scrollState === 'loading') return
      touches = e.targetTouches[0]
      offSetY = touches.clientY - clientY
      scrollTop = view.scrollTop
      if (offSetY > 0 && scrollTop === 0) {
        view.style.transform = `translateY(${offSetY}px)`
        if (offSetY >= 50) {
          downText.innerHTML = '松开刷新'
        } else {
          downText.innerHTML = '下拉刷新'
        }
      }
    })
    // 触碰结束
    view.addEventListener('touchend', () => {
      if (this.state.scrollState === 'loading') return
      console.log(offSetY, scrollTop)
      if (offSetY < 50) {
        view.style.transform = 'translateY(0px)'
        return
      }
      view.style.transform = 'translateY(50px)'
      clientY = 0
      this.state.scrollState = 'loading'
      this.props.onLoad()
    })
    console.log(view, this.refs)
  }

  componentDidUpdate() {
    const { scrollState } = this.state
    let number = 0
    if (scrollState === 'loading') (number = 50)
    this.refs.swipeDown.style.transform = `translateY(${number}px)`
  }

  render() {
    return (
      <div className="m-scroll">
        <div className="show-text" ref="downText"></div>
        <div className="m-view" ref="swipeDown">
          下拉容器
        </div>
      </div>
    )
  }
}