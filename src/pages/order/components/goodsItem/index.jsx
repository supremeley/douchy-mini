import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import logoCircle from '@/assets/imgs/logo-circle.png'
import './index.scss'

class GoodsItem extends Component {
  defaultProps = {
    info: null,
    handleClick: () => {}
  }

  state = {}

  handleClick = () => {
    const { handleClick, info } = this.props

    handleClick && handleClick(info.id)
  }

  render() {
    const { info } = this.props

    if (!info) return null

    const { pic, name, price } = info

    return (
      <View className='order-goods-item' onClick={this.handleClick}>
        <Image src={pic} mode='aspectFill' className='goods-item__img' />
        <View className='goods-item__info'>
          <View className='goods-item__info-name'>{name}</View>
          <View className='goods-item__info-num'>38</View>
          <View className='goods-item__info-price'>￥2,880</View>
        </View>
        <View className='goods-item__right'>
          <View className='goods-item__right-status'>{/* 已退款 */}</View>
          <View className='goods-item__right-num'>数量1</View>
        </View>
        {/* <View className='goods-item__btn'>
          <View className='goods-item__btn-con'>
            <Image src={logoCircle} mode='aspectFill' className='goods-item__btn-icon' />
            <View>售后咨询</View>
          </View>
          <View>立即定制</View>
        </View> */}
      </View>
    )
  }
}

export default GoodsItem
