import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
import Default from '@/components/default'
import WishPlate from '@/components/wishPlate'

import DeleteIcon from '@/assets/imgs/delete.png'

import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class Wish extends Component {
  state = {
    goodsList: [
      {
        name: 'DouchySandquist Dark Goddess 荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '1,680',
        id: 1
      },
      {
        name: 'DouchySandquist Dark Goddess 荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '3,680',
        id: 2
      }
    ]
  }

  onJump = (id) => () => {
    Taro.navigateTo({ url: `/pages/address/editor/index?=${id}` })
  }

  render() {
    const { goodsList } = this.state

    return (
      <View className='wish'>
        <View className='content'>
          <View className='header'>
            <View className='header-title'>心愿单</View>
            <View className='header-explain'>您的心愿单里有2件商品</View>
          </View>
          <View className='goods'>
            {goodsList &&
              goodsList.map((item) => {
                return (
                  <View key={item.id} className='goods-item'>
                    <Image src={item.pic} mode='aspectFill' className='goods-item__img' />
                    <View className='goods-item__info'>
                      <View className='goods-item__info-title'>{item.name}</View>
                      <View className='goods-item__info-price'>￥{item.price}</View>
                      <Image src={DeleteIcon} mode='aspectFit' className='goods-item__info-del' />
                    </View>
                    <View className='goods-item__btn'>加入购物车</View>
                  </View>
                )
              })}
          </View>
          {/* <Default msg='您的心愿单里还没有商品' explain='快去逛逛吧～' /> */}
          <Button className='btn'>继续逛逛</Button>
        </View>
        <View className='wish-plate'>
          <WishPlate />
        </View>
      </View>
    )
  }
}

export default Wish
