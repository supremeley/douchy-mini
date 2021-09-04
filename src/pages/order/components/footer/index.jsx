import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'

import HomeActiveIcon from '@/assets/imgs/tab-bar/home-active.png'
import ServiceActiveIcon from '@/assets/imgs/logo-golden.png'
import CartActiveIcon from '@/assets/imgs/tab-bar/cart-active.png'

import './index.scss'

class Footer extends Component {
  defaultProps = {
    // keywords: '',
    // onChange: () => {},
    onFree: () => {},
    onCheck: () => {}
  }

  state = {
    navList: [
      {
        text: '客服',
        type: 'service',
        path: '/pages/categroy/index',
        icon: ServiceActiveIcon
      },
      {
        text: '首页',
        type: 'home',
        path: '/pages/home/index',
        icon: HomeActiveIcon
      },
      {
        text: '购物车',
        type: 'cart',
        path: '/pages/cart/index',
        icon: CartActiveIcon
      }
    ]
  }

  jumpToPage = (url, type) => () => {
    // if (type === 'home') {
    //   // Taro.switchTab({ url })
    // } else {
    Taro.navigateTo({ url })
    // }
  }

  handleFree = () => {
    const { onFree } = this.props

    onFree && onFree()
  }

  handleCheck = () => {
    const { onCheck } = this.props

    onCheck && onCheck()
  }

  render() {
    const { navList } = this.state

    const NavList = navList.map((item) => {
      return (
        <View
          key={item.text}
          className='footer-item'
          onClick={this.jumpToPage(item.path, item.type)}
        >
          <Image src={item.icon} className='footer-item__icon' />
          <View className='footer-item__text'>{item.text}</View>
        </View>
      )
    })

    return (
      <View className='footer'>
        <View className='footer-left'>{NavList}</View>
        <View className='footer-right'>
          <Button className='footer-btn sub-btn' onClick={this.handleCheck}>
            立即订制
          </Button>
          <Button className='footer-btn try-btn' onClick={this.handleFree}>
            免费试衣
          </Button>
        </View>
      </View>
    )
  }
}

export default Footer
