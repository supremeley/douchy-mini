import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'

import ServiceActiveIcon from '@/assets/imgs/logo-golden.png'

import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class Footer extends Component {
  defaultProps = {
    allSelected: false,
    total: 0,
    onSelectAll: () => {},
    onClickLook: () => {},
    onCheckout: () => {}
  }

  state = {
    navList: [
      {
        text: '客服',
        type: 'service',
        path: '/pages/categroy/index',
        icon: ServiceActiveIcon
      }
      // {
      //   text: '首页',
      //   type: 'home',
      //   path: '/pages/home/index',
      //   icon: HomeActiveIcon
      // },
      // {
      //   text: '购物车',
      //   type: 'cart',
      //   path: '/pages/cart/index',
      //   icon: CartActiveIcon
      // }
    ]
  }

  handleLook = () => {
    const { onClickLook } = this.props

    onClickLook && onClickLook()
  }

  handleCheckout = () => {
    const { onCheckout } = this.props

    onCheckout && onCheckout()
  }

  jumpToPage = (url, type) => () => {
    // if (type === 'home') {
    //   // Taro.switchTab({ url })
    // } else {
    Taro.navigateTo({ url })
    // }
  }

  onSelectAll = () => {
    const { onSelectAll } = this.props

    onSelectAll && onSelectAll()
  }

  render() {
    const { allSelected, total } = this.props
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
      <View className='cart-footer'>
        <View className='footer-left'>{NavList}</View>
        <View className='footer-content'>
          <View className='footer-content__left' onClick={this.onSelectAll}>
            <View className={`circle ${allSelected && 'active'}`}>
              <View className='at-icon at-icon-check'></View>
            </View>
            <View className='footer-content__text'>全选</View>
          </View>
          <View className='footer-content__price'>￥{total}.00</View>
        </View>
        <View className='footer-right'>
          <Button className='footer-btn sub-btn' onClick={this.handleLook}>
            去逛逛
          </Button>
          <Button className='footer-btn try-btn' onClick={this.handleCheckout}>
            去结算
            <View className='at-icon at-icon-chevron-right'></View>
          </Button>
        </View>
      </View>
    )
  }
}

export default Footer
