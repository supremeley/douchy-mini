import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'

import cartIcon from '@/assets/imgs/cart.png'

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
    // const { keywords, current, imgList, navList, barList, goodsList } = this.state

    if (!info) return null

    return (
      <View key={info.url} className='order-goods-item' onClick={this.handleClick}>
        <Image src={info.pic} mode='aspectFill' className='goods-img'></Image>
        <View className='goods-info'>
          <View className='goods-info__title'>{info.title}</View>
          <View className='goods-info__detail'>
            {/* <View>
              <Text className='goods-info__tag'>{info.title}</Text>
            </View> */}
            {/* <View className='goods-info__sales'>已售{info.price}</View> */}
          </View>
          <View className='goods-info__bottom'>
            <View className='goods-info__bottom-price'>
              <Text className='goods-info__bottom-price-i'>￥</Text>
              {info.price}
            </View>
            {/* <View className='goods-info__bottom-cart'>
              <Image
                src={cartIcon}
                mode='aspectFit'
                className='goods-info__bottom-cart_icon'
              ></Image>
            </View> */}
          </View>
        </View>
      </View>
    )
  }
}

export default GoodsItem
