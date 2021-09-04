import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Swiper, SwiperItem, ScrollView } from '@tarojs/components'

import Mask from '@/components/mask'

import OffText from '@/assets/imgs/item/on-off-text.png'
// import LogoText from '@/assets/imgs/logo-default.png'
import LogoText from '@/assets/imgs/item/logo-text.png'
import ClothingIcon from '@/assets/imgs/item/clothingmatching.png'
import LogoCircle from '@/assets/imgs/logo-circle.png'

import 'taro-ui/dist/style/components/icon.scss'
import './index.scss'

class itemDetail extends Component {
  state = {
    goodsList: [
      {
        name: '黄格子H型小香风外套+经典logo窄牛皮皮带',
        desc: '搭配蓝色粗花呢外套以及douchysandquist on time 系列女士腰带，简约大气',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '1,680',
        id: 1
      },
      {
        name: 'DouchySandquist Dark Goddess',
        desc: '荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/2.png',
        price: '1,680',
        id: 2
      },
      {
        name: 'DouchySandquist Dark Goddess',
        desc: '荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/1.png',
        price: '1,680',
        id: 3
      },
      {
        name: 'DouchySandquist Dark Goddess',
        desc: '荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '1,680',
        id: 4
      }
    ],
    icon: {
      // Btnbg: 'http://121.5.150.116/dist/douchy-imgs/effect/btn-bg.png',
      BtnCircle: 'http://121.5.150.116/dist/douchy-imgs/effect/btn-circle.png',
      bottomCir: 'http://121.5.150.116/dist/douchy-imgs/effect/bottom-cir.png',
      bottomLogo: 'http://121.5.150.116/dist/douchy-imgs/effect/bottom-logo.png',
      PopupBtn: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-btn.png',
      PopupClose: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-close.png',
      CounterTitle: 'http://121.5.150.116/dist/douchy-imgs/home/counter-title.png',
      CounterTitleMore: 'http://121.5.150.116/dist/douchy-imgs/home/counter-title-more.png',
      AboutAs: 'http://121.5.150.116/dist/douchy-imgs/home/aboutAs.png',
      popupVipClose: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-vip-close.png',
      popuplogo: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-logo.png',
      popupContent: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-content.png'
    }
  }

  componentDidMount() {}

  onShareAppMessage = () => {
    return {
      title: 'DouchySandquist',
      path: '/pages/item/detail/index?id=1',
      imageUrl: ''
    }
  }

  previewImg = (e, index) => {
    e.stopPropagation()

    const { imgList } = this.state
    const imgs = imgList.map((item) => item.url)

    Taro.previewImage({
      current: imgs[index],
      urls: imgs
    })
  }

  onConfirm = () => {
    Taro.navigateTo({ url: 'goods/list' })
  }

  get type() {
    return this.route.params.type
  }

  get route() {
    return getCurrentInstance().router
  }

  render() {
    const { goodsList, icon } = this.state

    const GoodsList = goodsList.map((item) => {
      return (
        <SwiperItem key={item.id} className='plate-swiper__item'>
          <Image src={item.pic} mode='aspectFill' className='plate-swiper__item-img' />
          {this.type == 'collocate' && (
            <>
              <View className='plate-swiper__item-title'>{item.name}</View>
              <View className='plate-swiper__item-desc'>{item.desc}</View>
            </>
          )}
        </SwiperItem>
      )
    })

    return (
      <View className='item'>
        <ScrollView
          scrollY
          scrollAnchoring
          scrollWithAnimation
          className='scroll-container'
          // onScroll={this.handelScroll}
          // onTouchMove={(e) => e.stopPropagation()}
          // catchMove
        >
          <View className='on-off'>
            <Image src={OffText} mode='aspectFit' className='on-off__text' />
            <View className='on-off__logo' onClick={this.changeEffect}>
              <Image src={icon.BtnCircle} mode='aspectFit' className='on-off__logo-circle' />
            </View>
          </View>
          <View className='title'>
            <View>
              <Image src={LogoText} mode='aspectFit' className='title-logo' />
            </View>
            <View>
              <Image src={ClothingIcon} mode='aspectFit' className='title-text__icon' />
            </View>
          </View>
          <View className='plate'>
            {/* <Mask> */}
            <Swiper circular className='plate-swiper'>
              {GoodsList}
            </Swiper>
            {/* </Mask> */}
          </View>
          <View className='page-btn'>
            <Image src={LogoCircle} class='page-btn__icon' />
            <View>点击加入购物车</View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default itemDetail
