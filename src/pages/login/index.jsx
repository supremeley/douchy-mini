import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

import t1 from '@/assets/imgs/home/bg1.jpg'
import cartIcon from '@/assets/imgs/cart.png'

import 'taro-ui/dist/style/components/search-bar.scss'
import 'taro-ui/dist/style/components/button.scss'
import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class Home extends Component {
  state = {
    keywords: '',
    imgList: [{ url: t1 }],
    navList: [
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' },
      { icon: t1, url: '', title: '蔬菜' }
    ],
    goodsList: [
      {
        price: 1,
        pic: t1,
        title: '蔬菜'
      },
      {
        price: 1,
        pic: t1,
        title: '蔬菜'
      },
      {
        price: 1,
        pic: t1,
        title: '蔬菜'
      },
      {
        price: 1,
        pic: t1,
        title: '蔬菜'
      },
      {
        price: 1,
        pic: t1,
        title: '蔬菜'
      }
    ]
  }

  onChange = (e) => {
    console.log(e)
    this.setState({ keywords: e })
  }

  onConfirm = () => {
    Taro.navigateTo({ url: 'goods/list' })
  }

  render() {
    const { keywords, imgList, navList, goodsList } = this.state

    return (
      <View className='index'>
        <AtSearchBar value={keywords} onChange={this.onChange} onConfirm={this.onConfirm} />
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {imgList &&
            imgList.map((item) => {
              return (
                <SwiperItem key={item.url}>
                  <Image className='demo-text-img' src={t1}>
                    1
                  </Image>
                </SwiperItem>
              )
            })}
        </Swiper>
        <View className='nav-container'>
          {navList &&
            navList.map((item) => {
              return (
                <View key={item.url} className='nav-item'>
                  <Image className='nav-icon' src={t1}></Image>
                  <View className='nav-title'>{item.title}</View>
                </View>
              )
            })}
        </View>
        <View className='bar-container'>
          <View className='goods'>
            {goodsList &&
              goodsList.map((item) => {
                return (
                  <View key={item.url} className='goods-item'>
                    <Image src={item.pic} mode='aspectFill' className='goods-img'></Image>
                    <View className='goods-info'>
                      <View className='goods-info__title'>{item.title}</View>
                      <View className='goods-info__detail'>
                        <View>
                          <Text className='goods-info__tag'>{item.title}</Text>
                        </View>
                        <View className='goods-info__sales'>已售{item.price}</View>
                      </View>
                      <View className='goods-info__bottom'>
                        <View className='goods-info__bottom-price'>
                          <Text className='goods-info__bottom-price-i'>￥</Text>
                          {item.price}
                        </View>
                        <View className='goods-info__bottom-cart'>
                          <Image
                            src={cartIcon}
                            mode='aspectFit'
                            className='goods-info__bottom-cart_icon'
                          ></Image>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              })}
          </View>
        </View>
      </View>
    )
  }
}

export default Home
