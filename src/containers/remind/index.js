import React, { Component } from 'react'

import './style.less'

export default class Remind extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="remind">
        <p className="agg">
          {children}
        </p>
      </div>
    )
  }
}