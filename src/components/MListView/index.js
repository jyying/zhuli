import React, { Component } from 'react'

export default class MListView extends Component {
  constructor() {
    super()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}