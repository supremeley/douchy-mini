import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'

import LogoText from '@/assets/imgs/logo-default.png'

import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class itemDetail extends Component {
  state = {
    goodsList: [
      {
        name: 'DouchySandquist Dark Goddess',
        desc: '荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
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

  get handleStatusText() {
    switch (this.type) {
      case 'all':
        return { name: '百搭精品', desc: 'ALL-MATCH' }
      case 'bussiness':
        return { name: '职场轻奢', desc: 'BUSINESS' }
      case 'dating':
        return { name: '约会必搭', desc: 'DATING' }
      case 'party':
        return { name: '聚会派对', desc: 'PARTY' }
    }
  }

  onJumpToSceneDetail = (type) => () => {
    Taro.navigateTo({ url: `/pages/series/scene/detail/index?id=1&type=${type}` })
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
        <View key={item.id} className='plate-item'>
          <Image
            src={item.pic}
            mode='aspectFill'
            className='plate-item__img'
            onClick={this.onJumpToSceneDetail('only')}
          />
          <Image
            src={icon.PopupBtn}
            mode='aspectFill'
            className='plate-item__circle'
            onClick={this.onJumpToSceneDetail('collocate')}
          />
          <View className='plate-item__desc'>{item.name}</View>
          <View className='plate-item__desc'>{item.desc}</View>
        </View>
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
          <View className='title'>
            <View className='title-text'>
              <View className='title-text__top'>{this.handleStatusText.name}</View>
              <View className='title-text__bottom'>{this.handleStatusText.desc}</View>
            </View>
            <Image src={LogoText} mode='aspectFit' className='title-logo' />
          </View>
          <View className='plate'>{GoodsList}</View>
        </ScrollView>
      </View>
    )
  }
}

export default itemDetail
