import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Swiper, SwiperItem, Button } from '@tarojs/components'

import t1 from '@/assets/imgs/home/bg1.jpg'
import t2 from '@/assets/imgs/home/bg2.jpg'
import t3 from '@/assets/imgs/home/bg3.jpg'
import t4 from '@/assets/imgs/home/bg4.jpg'

import 'taro-ui/dist/style/components/button.scss'
import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class itemDetail extends Component {
  state = {
    info: {
      name: '高定'
    },
    imgList: [{ url: t1 }, { url: t2 }, { url: t3 },{ url: t4 }],
    tagList: [
      { icon: t1, url: '', title: '高定' },
      { icon: t2, url: '', title: '高定' },
      { icon: t3, url: '', title: '高定' }
    ]
  }

  onConfirm = () => {
    Taro.navigateTo({ url: 'goods/list' })
  }

  render() {
    const { info, imgList, tagList } = this.state

    const SwiperList =
      imgList &&
      imgList.map((item) => {
        return (
          <SwiperItem key={item.url}>
            <Image className='swiper-img' src={t1} mode='aspectFill'></Image>
          </SwiperItem>
        )
      })

    const ImgsList =
      imgList &&
      imgList.map((item) => {
        return <Image className='swiper-img' src={t1} key={item.url} mode='widthFix'></Image>
      })

    return (
      <View className='index'>
        <Swiper
          className='swiper-content'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {SwiperList}
        </Swiper>
        <View className='detail-container'>
          <View className='detail-price'>$600.00</View>
          <View className='detail-info'>
            <View className='detail-info__title'>高定</View>
            <View className='detail-info__desc'>绿色高定</View>
          </View>
          <View className='detail-tag'>
            <View className='detail-tag__item'>高定</View>
            <View className='detail-tag__item'>高定</View>
          </View>
        </View>
        <View className='server-container'>
          <View className='server-item'>
            <Text className='server-item__title'>服务</Text>
            <View className='server-item__content'>
              <View className='server-item__content-info'>
                <Image src={t1} className='server-item__content-info__icon'></Image>
                正品保证
              </View>
              <View className='server-item__content-info'>
                <Image src={t1} className='server-item__content-info__icon'></Image>
                正品保证
              </View>
              <View className='server-item__content-info'>
                <Image src={t1} className='server-item__content-info__icon'></Image>
                正品保证
              </View>
              <View className='server-item__content-info'>
                <Image src={t1} className='server-item__content-info__icon'></Image>
                正品保证
              </View>
              <View className='server-item__content-info'>
                <Image src={t1} className='server-item__content-info__icon'></Image>
                正品保证
              </View>
            </View>
          </View>
          <View className='server-item'>
            <Text className='server-item__title'>规格</Text>
            <View className='server-item__content'>
              <View className='server-item__content-info'>大白菜</View>
            </View>
            <View className='at-icon at-icon-chevron-right'></View>
          </View>
        </View>
        <View className='info-container'>
          <View className='info-title'>商品描述</View>
          {ImgsList}
        </View>
        <View className='footer'>
          {/* <Button className='footer-btn'>分享立赚</Button> */}
          <Button className='footer-btn cart-btn'>加入购物车</Button>
        </View>
      </View>
    )
  }
}

export default itemDetail
