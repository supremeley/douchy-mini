import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import LogoCircle from '@/assets/imgs/logo-circle.png'

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
      <View key={pic} className='shelves-item' onClick={this.handleClick}>
        <Image
          // src={pic}
          mode='aspectFit'
          className='shelves-item__img'
        />
        <View className='shelves-item__name'>{name}</View>
        <View className='shelves-item__info'>
          <View className='shelves-item__info-pirce'>￥{price}</View>
          <Image src={LogoCircle} mode='aspectFit' className='shelves-item__info-icon' />
        </View>
      </View>
    )
  }
}

export default GoodsItem
