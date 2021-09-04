import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'

// import logoBlack from '@/assets/imgs/logo-black.png'
import logoCircle from '@/assets/imgs/logo-circle.png'

import GoodsItem from '@/pages/order/components/goodsItem'

import './index.scss'

class OrderDetail extends Component {
  state = {
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
    ],
    icon: {
      logoBlack: 'http://121.5.150.116/dist/douchy-imgs/logo-black.png'
    }
  }

  onJumpToProgress = (id) => {
    Taro.navigateTo({ url: `/pages/order/progress/detail/index?id=${id}` })
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
      case '5':
        return '已完成'
    }
  }

  get id() {
    return this.route.params.id
  }

  get status() {
    return this.route.params.status
  }

  get route() {
    return getCurrentInstance().router
  }

  render() {
    const { goodsList, icon } = this.state

    return (
      <View className='order-detail'>
        <View className='order-title'>确认订单</View>
        <View className='plate'>
          <View className='plate-title'>订单信息</View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>订单编号:</View>
            <View className='plate-opt__info'>DS2021081600001</View>
          </View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>下单时间:</View>
            <View className='plate-opt__info'>2021-08-16 21:16:34</View>
          </View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>属性:</View>
            <View className='plate-opt__info'>试衣配送</View>
          </View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>预约发货时间:</View>
            <View className='plate-opt__info'>2021/8/16 星期一 18:00-20:00</View>
          </View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>预约退货时间:</View>
            <View className='plate-opt__info'>2021/8/17 星期二 16:00-20:00</View>
          </View>
        </View>

        <View className='plate'>
          <View className='plate-title'>配送信息</View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>收件人:</View>
            <View className='plate-opt__info'>duci</View>
          </View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>联系电话:</View>
            <View className='plate-opt__info'>13127554665</View>
          </View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>地址:</View>
            <View className='plate-opt__info'>上海市黄浦区淮海中路650弄634号</View>
          </View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>配送方式:</View>
            <View className='plate-opt__info'>顺丰快递</View>
          </View>
        </View>

        <View className='plate'>
          <View className='palte-title'>商品信息</View>
          <View className='goods-content'>
            {goodsList &&
              goodsList.map((goods) => {
                return <GoodsItem key={goods.id} info={goods} handleClick={this.onJumpToProgress} />
              })}
          </View>
        </View>
        <View className='plate'>
          <View className='plate-item'>
            <View className='plate-item__title'>商品金额:</View>
            <View className='plate-item__info'>¥ 5,760</View>
          </View>
          <View className='plate-item'>
            <View className='plate-item__title'>优惠金额:</View>
            <View className='plate-item__info'>¥ 1,000</View>
          </View>
          <View className='plate-item'>
            <View className='plate-item__title'>运费:</View>
            <View className='plate-item__info'>¥0</View>
          </View>
        </View>
        <View className='total'>
          <View className='total-title'>订单总计</View>
          <View className='total-info'>¥ 4,760</View>
        </View>
        <View className='content'>
          <Button className='content-btn'>立即支付</Button>
          <Button className='content-btn cancel-btn'>取消订单</Button>
          <View className='content-explain'>请于 2021-8-16 22:16:34 前完成支付</View>
          <View>
            <Image src={logoCircle} mode='aspectFill' className='content-circle' />
          </View>
          <View>
            <Image src={icon.logoBlack} mode='widthFix' className='content-logo' />
          </View>
        </View>
      </View>
    )
  }
}

export default OrderDetail
