import Taro, { getCurrentPages } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import Tabbar from '@/components/tab-bar'

import t1 from '@/assets/imgs/home/bg1.jpg'

import 'taro-ui/dist/style/components/avatar.scss'

import './index.scss'

class Center extends Component {
  state = {
    navList: [
      { icon: t1, status: 1, title: '待支付' },
      { icon: t1, status: 2, title: '待收货' },
      { icon: t1, status: 3, title: '已签收' },
      { icon: t1, status: 4, title: '退款/售后' }
    ],
    menuList: [
      {
        price: 1,
        pic: t1,
        title: '我的优惠券'
      },
      {
        price: 1,
        pic: t1,
        title: '联系客服'
      },
      {
        price: 1,
        pic: t1,
        title: '关于我们'
      },
      {
        price: 1,
        pic: t1,
        title: '用户协议'
      },
      {
        price: 1,
        pic: t1,
        title: '隐私协议'
      }
    ]
  }

  componentDidShow() {
    // console.log(.getTabBar())
    // const page = getCurrentPages()[0]

    // if (typeof page.getTabBar === 'function' && page.getTabBar()) {
    //   page.getTabBar().setData({
    //     selected: 3
    //   })
    // }
  }

  onJump = (status) => () => {
    Taro.navigateTo({ url: `/pages/order/list/index?status=${status}` })
  }

  render() {
    const { navList, menuList } = this.state

    return (
      <View className='index'>
        <View className='user-container'>
          <AtAvatar circle size='large' image='https://jdc.jd.com/img/200'></AtAvatar>
          <View className='user-info'>
            <View className='user-info__name'>Hi~ 用户123</View>
            <View className='user-info__mobile'>1300****0000</View>
            {/* <View className='user-info__balance'>已赚: ￥20.00</View> */}
          </View>
        </View>
        <View className='nav'>
          <View className='nav-title'>
            我的订单
            <View className='nav-title__more' onClick={this.onJump(0)}>
              全部订单
              <View className='at-icon at-icon-chevron-right'></View>
            </View>
          </View>
          <View className='nav-container'>
            {navList &&
              navList.map((item) => {
                return (
                  <View key={item.url} className='nav-item' onClick={this.onJump(item.status)}>
                    <Image className='nav-icon' src={t1}></Image>
                    <View className='nav-item__title'>{item.title}</View>
                  </View>
                )
              })}
          </View>
        </View>
        <View className='menu-container'>
          {menuList &&
            menuList.map((item) => {
              return (
                <View key={item.url} className='menu-item'>
                  <View>{item.title}</View>
                  <View className='at-icon at-icon-chevron-right'></View>
                </View>
              )
            })}
        </View>
        <Tabbar />

      </View>
    )
  }
}

export default Center
