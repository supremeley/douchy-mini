import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'

import t1 from '@/assets/imgs/home/bg1.jpg'

import 'taro-ui/dist/style/components/input-number.scss'
import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class AddressList extends Component {
  state = {
    goodsList: [
      {
        price: 1,
        pic: t1,
        title: '蔬菜',
        selected: false,
        num: 1
      },
      {
        price: 1,
        pic: t1,
        title: '蔬菜',
        selected: false,
        num: 1
      },
      {
        price: 1,
        pic: t1,
        selected: false,
        title: '蔬菜',
        num: 1
      },
      {
        price: 1,
        pic: t1,
        title: '蔬菜',
        selected: false,
        num: 1
      },
      {
        price: 1,
        pic: t1,
        title: '蔬菜',
        selected: false,
        num: 1
      }
    ]
  }

  onJump = (id) => () => {
    Taro.navigateTo({ url: `/pages/address/editor/index?=${id}` })
  }

  render() {
    const { goodsList } = this.state

    return (
      <View className='index'>
        <View className='address'>
          {goodsList &&
            goodsList.map((item, index) => {
              return (
                <View key={item.id} className='address-item' onClick={this.onJump(item.id)}>
                  <View className='address-option'>
                    <View className='address-option__address'>
                      上海市中心路
                      <Text className='address-option__tag'>默认</Text>
                    </View>
                    <View className='address-option__floor'>1号</View>
                    <View className='address-option__info'>
                      <View className='address-option__info-item'>测试</View>
                      <View className='address-option__info-item'>13788954223</View>
                    </View>
                  </View>
                  <View className='at-icon at-icon-edit'></View>
                </View>
              )
            })}
        </View>

        <Button className='page-btn' onClick={this.onJump('empty')}>
          +添加新地址
        </Button>
      </View>
    )
  }
}

export default AddressList
