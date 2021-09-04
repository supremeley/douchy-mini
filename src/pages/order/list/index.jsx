import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import 'taro-ui/dist/style/components/icon.scss'

import GoodsItem from '@/pages/order/components/goodsItem'

import './index.scss'

class OrderList extends Component {
  state = {
    orderList: [{}],
    goodsList: [
      {
        name: 'DouchySandquist Dark Goddess 荡领开叉连衣裙',
        desc: '',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '1,680',
        id: 1
      },
      {
        name: 'DouchySandquist Dark Goddess 荡领开叉连衣裙',
        desc: '',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '1,680',
        id: 1
      }
    ]
  }

  onJumpToDetail = (id) => () => {
    Taro.navigateTo({ url: `/pages/order/detail/index?id=${id}&status=${this.status || 1}` })
  }

  get handleStatusText() {
    switch (this.status) {
      // case '0':
      //   return '全部订单'
      case '1':
        return '待付款'
      case '2':
        return '已付款'
      case '3':
        return '待收货'
    }
  }

  get status() {
    return this.route.params.status
  }

  get route() {
    return getCurrentInstance().router
  }

  render() {
    const { orderList, goodsList } = this.state

    const Order =
      orderList &&
      orderList.map((item) => {
        return (
          <View className='order-item' key={item.id} onClick={this.onJumpToDetail(item.id)}>
            <View className='order-item__header'>
              <View className='order-item__header-name'>2021年8月16日</View>
              <View className='order-item__header-status'>订单编号：DS2021081600001</View>
            </View>
            <View className='order-item__content'>
              {goodsList &&
                goodsList.map((goods) => {
                  return <GoodsItem key={goods.id} info={goods} />
                })}
            </View>
            <View className='order-item__total'>
              <Text className='order-item__total-item'>
                共2件商品,合计：
                <Text className='golden'>￥32.00</Text>
              </Text>
            </View>
            <View className='order-item__footer'>
              <View>
                查看更多信息
                <View className='at-icon at-icon-chevron-right'></View>
              </View>
            </View>
          </View>
        )
      })

    return (
      <View className='order-list'>
        <View className='order-title'>{this.handleStatusText}</View>
        <View className='order-desc'>订单信息</View>
        {Order}
      </View>
    )
  }
}

export default OrderList
