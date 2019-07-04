import React, { Component } from 'react'
import XTabBar from 'components/XTabBar'

import HomeList from './list'
import HomeRelease from './release'
import HomeInfo from './info'

import img1 from '../../../public/static/img/1554208216979.png'
import img1_a from '../../../public/static/img/1554208235221.png'
import img2 from '../../../public/static/img/1554208269063.png'
import img2_a from '../../../public/static/img/1554208597609.png'
import img3 from '../../../public/static/img/1554208156675.png'
import img3_a from '../../../public/static/img/1554208199403.png'

import './style.less'

const XTabBarItem = XTabBar.Item

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      data: 'name',
      selectedTab: window.sessionStorage.tabVisible || 'list',
    }
  }

  onPress = (selectedTab) => {
    window.sessionStorage.tabVisible = selectedTab
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state
    return (
      <XTabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <XTabBarItem
          key="list"
          title="互刷助力"
          icon={<img src={img1} className="img" />}
          selectedIcon={<img src={img1_a} className="img" />}
          selected={selectedTab === 'list'}
          onPress={() => this.onPress('list')}
        >
          <HomeList />
        </XTabBarItem>
        <XTabBarItem
          key="release"
          title="发布任务"
          icon={<img src={img2} className="img" />}
          selectedIcon={<img src={img2_a} className="img" />}
          selected={selectedTab === 'release'}
          onPress={() => this.onPress('release')}
        >
          <HomeRelease page={this} />
        </XTabBarItem>
        <XTabBarItem
          key="info"
          title="个人中心"
          icon={<img src={img3} className="img" />}
          selectedIcon={<img src={img3_a} className="img" />}
          selected={selectedTab === 'info'}
          onPress={() => this.onPress('info')}
        >
          <HomeInfo />
        </XTabBarItem>
      </XTabBar>
    )
  }
}
