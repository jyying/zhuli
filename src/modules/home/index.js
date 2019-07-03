import React, { Component } from 'react'
import XTabBar from 'components/XTabBar'

import HomeList from './list'
import HomeRelease from './release'
import HomeInfo from './info'

const XTabBarItem = XTabBar.Item

export default class Print extends Component {
  constructor() {
    super()
    this.state = {
      data: 'name',
      selectedTab: 'list',
    }
  }

  onPress = (selectedTab) => {
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
          title="list"
          icon={<div></div>}
          selectedIcon={<div></div>}
          selected={selectedTab === 'list'}
          onPress={() => this.onPress('list')}
        >
          <HomeList />
        </XTabBarItem>
        <XTabBarItem
          key="release"
          title="release"
          icon={<div></div>}
          selectedIcon={<div></div>}
          selected={selectedTab === 'release'}
          onPress={() => this.onPress('release')}
        >
          <HomeRelease />
        </XTabBarItem>
        <XTabBarItem
          key="info"
          title="info"
          icon={<div></div>}
          selectedIcon={<div></div>}
          selected={selectedTab === 'info'}
          onPress={() => this.onPress('info')}
        >
          <HomeInfo />
        </XTabBarItem>
      </XTabBar>
    )
  }
}
