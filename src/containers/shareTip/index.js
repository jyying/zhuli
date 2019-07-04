import React, { Component } from 'react'

import img3 from '../../../public/static/img/share_friends.png'

import './style.less'

export default class ShareTip extends Component {
  render() {
    const { onClick = () => { } } = this.props
    return (
      <div className="modal-view1" onClick={onClick}>
        <div className="modal-content">
          <img src={img3} />
        </div>
      </div>
    )
  }
}