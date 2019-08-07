import React, { Component } from 'react'
import MScroll from 'components/MScroll/MScroll'

export default class ScrollDemo extends Component {
  constructor() {
    super()

    this.state = {
      scrollState: 'init'
    }
  }
  render() {
    const { scrollState } = this.state
    return (
      <div style={{ height: '100%' }}>
        <MScroll
          state={scrollState}
          onLoad={this.onLoad}
        >
          gdgds
        </MScroll>
      </div>
    )
  }

  onLoad = () => {
    setTimeout(() => {
      console.log('加载完毕')
      this.setState({
        scrollState: 'load'
      })
    }, 2000)
  }
}