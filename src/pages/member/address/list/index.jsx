import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Button } from '@tarojs/components'

import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class AddressList extends Component {
  state = {
    addressList: [
      {
        isDefault: false,
        name: 'xxx',
        mobile: 13700000000,
        addressDetail: 'xxxxx',
        cith: '上海市 / 上海市 / 黄浦区'
      },
      {
        isDefault: true,
        name: 'xxx',
        mobile: 13700000000,
        addressDetail: 'xxxxx',
        cith: '上海市 / 上海市 / 黄浦区'
      }
    ]
  }

  onJump = (id) => () => {
    if (this.type === 'select') {
      Taro.navigateTo({ url: `/pages/checkout/index` })
    } else {
      Taro.navigateTo({ url: `/pages/member/address/editor/index?=${id}` })
    }
  }

  get type() {
    return this.route.params.type
  }

  get route() {
    return getCurrentInstance().router
  }

  render() {
    const { addressList } = this.state

    const Address = addressList.map((item) => {
      return (
        <View key={item.id} className='list-item' onClick={this.onJump(item.id)}>
          <View className={`list-item__top ${item.isDefault && 'active-top'}`}>
            <View className='list-item__top-cir'>
              <View className='at-icon at-icon-check'></View>
            </View>
            <View>设为默认收货地址</View>
          </View>
          <View className='list-item__info'>
            <View className='list-item__info-item'>
              <View className='list-item__info-item__name'>姓名:</View>
              <View>{item.name}</View>
            </View>
            <View className='list-item__info-item'>
              <View className='list-item__info-item__name'>手机号:</View>
              <View>{item.mobile}</View>
            </View>
            <View className='list-item__info-item'>
              <View className='list-item__info-item__name'>城市:</View>
              <View>{item.city}</View>
            </View>
            <View className='list-item__info-item'>
              <View className='list-item__info-item__name'>详细地址:</View>
              <View>{item.addressDetail}</View>
            </View>
          </View>
        </View>
      )
    })

    return (
      <View className='address'>
        {this.type === 'select' && <View className='order-title'>选择地址</View>}

        <View className='header'>
          <View className='header-title'>地址管理</View>
          <View className='header-explain'>您已经有{addressList.length}个收货地址</View>
        </View>
        <View className='list'>{Address}</View>
        <Button className='page-btn' onClick={this.onJump('empty')}>
          添加新地址
        </Button>
      </View>
    )
  }
}

export default AddressList
