import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Button, ScrollView } from '@tarojs/components'

import IndicatorIcon from '@/assets/imgs/swiper-indicator.png'
// import logoCircle from '@/assets/imgs/logo-circle.png'

import GoodsItem from '@/pages/order/components/goodsItem'

import './index.scss'

class OrderProgress extends Component {
  state = {
    goodsList: [
      {
        name: 'DouchySandquist Dark Goddess 荡领开叉连衣裙',
        desc: '',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '1,680',
        id: 1
      }
    ],
    tryProgressList: [
      {
        title: '确认中',
        status: 1
      },
      {
        title: '正在准备订单',
        status: 1
      },
      {
        title: '已发货',
        status: 1
      },
      {
        title: '已送达',
        status: 1
      },
      {
        title: '已安排退货',
        status: 1
      },
      {
        title: '正在处理退货',
        status: 1
      },
      {
        title: '已退货',
        status: 1
      },
      {
        title: '已退款',
        status: 1
      }
    ],
    customMrogressList: [
      {
        title: '确认中',
        status: 1
      },
      {
        title: '正在准备订单',
        status: 1
      },
      {
        title: '已发货',
        status: 1
      },
      {
        title: '已送达',
        status: 1
      },
      {
        title: '待确认收货',
        status: 1
      },
      {
        title: '已完成',
        status: 1
      }
    ]
  }

  onConfirm = () => {
    Taro.navigateTo({ url: 'goods/list' })
  }

  get type() {
    return this.route.params.type
  }

  get status() {
    return this.route.params.status
  }

  get route() {
    return getCurrentInstance().router
  }

  render() {
    const { goodsList, tryProgressList, customMrogressList } = this.state

    const progressList = this.type == 'custom' ? customMrogressList : tryProgressList

    // debugger
    return (
      <View className='order-progress'>
        <View className='header'>
          <View className='header-title'>订单编号:</View>
          <View className='header-title'>DS2021081600001</View>
          <View className='header-info'>日期： 21年08月16</View>
        </View>
        <View className='plate'>
          <View className='plate-opt'>
            <View className='plate-opt__title'>合计:</View>
            <View className='plate-opt__info'>￥5,760</View>
          </View>
          <View className='plate-opt'>
            <View className='plate-opt__title'>优惠金额:</View>
            <View className='plate-opt__info'>￥1,000</View>
          </View>
          <View className='plate-item'>
            <View className='plate-item__title'>
              <View>运费:</View>
              <View className='plate-item__info'>￥0</View>
            </View>
            <View className='plate-item__title'>
              <View>共2件商品，合计:</View>
              <View className='plate-item__info'>￥4,760</View>
            </View>
          </View>
        </View>
        <View className='content'>
          <View className='content-opt'>
            <View className='content-opt__title'>预约发货时间:</View>
            <View className='content-opt__info'>2021/8/16 星期一 18:00-20:00</View>
          </View>
          <View className='content-opt'>
            <View className='content-opt__title'>预约退货时间:</View>
            <View className='content-opt__info'>2021/8/17 星期二 16:00-20:00</View>
          </View>

          <ScrollView scrollX>
            <View className='progress'>
              {progressList &&
                progressList.map((item, index) => {
                  return (
                    <View key={item.title} className='progress-item'>
                      <View className='progress-item__title'>{item.title}</View>

                      {index == 1 && <Image src={IndicatorIcon} className='progress-item__icon' />}
                      <View className={`progress-item__cir ${index == 0 && 'active-cir'}`}></View>
                      {index != progressList.length - 1 && (
                        <View className='progress-item__line'></View>
                      )}
                    </View>
                  )
                })}
            </View>
          </ScrollView>

          <View className='content-desc'>退货单号：SF297350975945</View>
          <View className='content-desc'>
            我们的质检专员已确认退款，退款将在2个工作日内退还到您的付款账号。
          </View>

          <View className='goods-content'>
            {goodsList &&
              goodsList.map((goods) => {
                return <GoodsItem key={goods.id} info={goods} />
              })}
          </View>

          <Button className='content-btn'>退款</Button>
          <View className='content-explain'>退款将于 2021-8-17 9:16:34 前关闭</View>
        </View>
      </View>
    )
  }
}

export default OrderProgress
