// 移动端容器
import React, { Component } from 'react'
import './MScroll.less'

export default class MScroll extends Component {

  constructor() {
    super()
    this.state = {
      scrollState: 'load',
    }

    this.touchmove = false
  }

  static defaultProps = {
    state: 'load',
    onLoad: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps, prevState, '----------------------------')
    const { state } = nextProps
    return { scrollState: state }
  }

  componentDidMount() {
    const view = this.refs.swipeDown
    const downText = this.refs.downText
    const { onLoad } = this.props
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
      // console.log('触碰屏幕', touches.clientY)
    })
    // 触碰轨迹
    view.addEventListener('touchmove', (e) => {
      if (this.state.scrollState === 'loading') return
      touches = e.targetTouches[0]
      offSetY = touches.clientY - clientY
      scrollTop = view.scrollTop
      this.touchmove = true
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
      if (this.state.scrollState === 'loading' || !this.touchmove) return
      // console.log(offSetY, scrollTop)
      if (offSetY < 50) {
        view.style.transform = 'translateY(0px)'
        return
      }
      this.touchmove = false
      if (onLoad) {
        view.style.transform = 'translateY(50px)'
        clientY = 0
        this.state.scrollState = 'loading'
        this.props.onLoad()
      } else {
        console.warn('请传入onLoad方法来控制')
        view.style.transform = 'translateY(0px)'
      }
    })
    // console.log(view, this.refs)
  }

  componentDidUpdate() {
    if (!this.touchmove) return
    const { scrollState } = this.state
    console.log(scrollState)
    let number = 0
    if (scrollState === 'loading') (number = 50)
    this.refs.swipeDown.style.transform = `translateY(${number}px)`
  }

  render() {
    return (
      <div className="m-scroll">
        <div className="show-text" ref="downText"></div>
        <div className="m-view" ref="swipeDown">
          {this.props.children}
        </div>
      </div>
    )
  }
}