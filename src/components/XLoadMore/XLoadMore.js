import './XLoadMore.less';
import React, { Component } from 'react';
import loadmoreImg from '../../../public/static/img/load.png'

export default class XLoadMore extends Component {

  static defaultProps = {
    status: null,
    label: '上拉加载更多',
    loadingLabel: '正在加载',
    loadendLabel: '已经全部加载完成',
    errorLabel: '加载失败，请点击重试',
    emptyLabel: '暂时没有相关内容',
    onLoad: () => { },
  }

  constructor() {
    super(...arguments)
  }

  render() {
    const { status } = this.props
    let primary = this._primary()
    return (
      <div
        className={`load-more ${status || ''}`}
        onClick={this._onLoad}
      >
        {
          status && status !== 'loading' && <span>{primary.label}</span>
        }
        {
          status === 'loading'
            ? (
              <div className="load">
                <img mode="aspectFill" style={{ width: '200rpx', height: '80rpx' }} src={loadmoreImg} />
                <span>{primary.label}</span>
              </div>
            )
            : null
        }
      </div>
    )
  }

  _primary = () => {
    const {
      status,
      label,
      loadingLabel,
      loadendLabel,
      errorLabel,
      emptyLabel,
    } = this.props;

    let primary = {};

    switch (status) {
      case 'loading':
        primary = {
          label: loadingLabel,
          icon: '',
        }
        break;
      case 'error':
        primary = {
          label: errorLabel,
          icon: 'retry',
        }
        break;
      case 'loadend':
        primary = {
          label: loadendLabel,
        }
        break;
      case 'empty':
        primary = {
          label: emptyLabel,
        }
        break;
      default:
        primary = {
          label: label,
        }
        break;
    }

    return primary;
  }

  _onLoad = () => {
    const { status, onLoad } = this.props
    if (status === 'loading' || status === 'loadend' || status === 'empty') {
      return false
    }

    onLoad()
  }
}