import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import LogoCircle from '@/assets/imgs/logo-circle.png'
import LikeLogo from '@/assets/imgs/item/like.png'

import './index.scss'

class GoodsItem extends Component {
  defaultProps = {
    info: null,
    onClick: () => {}
  }

  state = {}

  handleClick = () => {
    const { onClick, info } = this.props

    onClick && onClick(info.id)
  }

  render() {
    const { info } = this.props

    if (!info) return null

    const { pic, name, price } = info

    return (
      <View key={pic} className='goods-item' onClick={this.handleClick}>
        <View className='goods-item__top'>
          <Image src={pic} mode='aspectFit' className='goods-item__img' />
          <Image src={LikeLogo} className='goods-item__top-icon' />
        </View>

        <View className='goods-item__name'>{name}</View>
        <View className='goods-item__info'>
          <View className='goods-item__info-pirce'>￥{price}</View>
          {/* <Image src={LogoCircle} mode='aspectFit' className='goods-item__info-icon' /> */}
        </View>
      </View>
    )
  }
}

export default GoodsItem
