import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtTabs } from 'taro-ui'
import OrderGoodsItem from '@/components/orderGoodsItem'

import t1 from '@/assets/imgs/home/bg1.jpg'
import t2 from '@/assets/imgs/home/bg2.jpg'
import t3 from '@/assets/imgs/home/bg3.jpg'
import t4 from '@/assets/imgs/home/bg4.jpg'

import 'taro-ui/dist/style/components/tabs.scss'
import './index.scss'

class OrderList extends Component {
  state = {
    current: 0,
    barList: [
      { url: '', title: '待支付' },
      { url: '', title: '已支付' },
      { url: '', title: '已发货' },
      { url: '', title: '已签收' }
    ],
    orderList: [
      {
        price: 1,
        pic: t1,
        title: '高定',
        id: 1,
        number: 1
      },
      {
        price: 2,
        pic: t2,
        title: '轻奢',
        id: 1,
        number: 1
      }
    ],
    goodsList: [
      {
        price: 1,
        pic: t1,
        title: '高定',
        id: 1,
        number: 1
      },
      {
        price: 2,
        pic: t2,
        title: '轻奢',
        id: 1,
        number: 1
      }
    ]
  }

  onJump = (id) => () => {
    Taro.navigateTo({ url: `/pages/order/detail/index?id=${id}` })
  }

  handleClick = (e) => {
    this.setState({ current: e })
  }

  render() {
    const { current, barList, orderList, goodsList } = this.state

    const Order =
      orderList &&
      orderList.map((item) => {
        return (
          <View className='order-item' key={item.id} onClick={this.onJump(item.id)}>
            <View className='order-item__header'>
              <View className='order-item__header-name'>namenamenamenamenamename</View>
              <View className='order-item__header-address'>
                addressaddressaddressaddressaddressaddress
              </View>
              <View className='order-item__header-status'>statusstatusstatusstatusstatus</View>
            </View>
            <View className='order-item__content'>
              {goodsList &&
                goodsList.map((goods) => {
                  return <OrderGoodsItem key={goods.url} info={goods} />
                })}
            </View>
            <View className='order-item__total'>
              <Text className='order-item__total-item'>共1件</Text>
              <Text className='order-item__total-item'>合计：32.00</Text>
            </View>
            <View className='order-item__footer'>
              <Button className='order-item__footer-btn'>取消订单</Button>
              <Button className='order-item__footer-btn'>再次购买</Button>
            </View>
          </View>
        )
      })

    return (
      <View className='index'>
        <View className='nav-container'>
          <AtTabs current={current} tabList={barList} onClick={this.handleClick}></AtTabs>
        </View>
        <View className='order-container'>{Order}</View>
      </View>
    )
  }
}

export default OrderList
