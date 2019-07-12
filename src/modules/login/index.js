import React, { Component } from 'react'
import { connect } from 'dva'

import img1 from '../../../public/static/img/login_logo.png'

const NAME_SPACE = 'login'

import './style.less'

class Login extends Component {
  render() {
    return (
      <div className="login-view">
        <img src={img1} className="logo" />
        <div className="login-input-content">
          <div className="login-input-title">
            手机号码
          </div>
          <div className="input-flex-content">
            <input placeholder="请输入您的手机号码" className="login-input" ref="phone" />
          </div>
          <div className="login-input-line"></div>
        </div>

        <div className="login-input-content">
          <div className="login-input-title">
            图形验证
          </div>
          <div className="input-flex-content">
            <input placeholder="请输入图形验证码" className="login-input" ref="code" />
            <div className="vertical-line"></div>
            <img className="image-code" />
          </div>
          <div className="login-input-line"></div>
        </div>

        <div className="login-input-content">
          <div className="login-input-title">
            短信验证
          </div>
          <div className="input-flex-content">
            <input placeholder="请输入短信验证码" className="login-input" ref="msg" />
            <div className="vertical-line"></div>
            <div className="msg-code">获取验证码</div>
          </div>
          <div className="login-input-line"></div>
        </div>

        <div className="btn-view" onClick={this.onClick}>
          <div className="btn">一键登录</div>
        </div>
      </div>
    )
  }

  onClick = () => {
    const { msg, phone, code } = this.refs
    console.log('手机号：', phone.value)
    console.log('验证码：', msg.value)
    console.log('短信：', code.value)

    window.sessionStorage.isLogin = 1
    this.props.dispatch({ type: 'app/goPage', payload: { pathname: 'home' } })
    // this.props.dispatch({ type: `${NAME_SPACE}/login`, payload: { mobile: '15623973910', code: '546' } })
    //   .then(res => console.log(res))
  }
}

export default connect((state) => ({ ...state[NAME_SPACE] }))(Login)
