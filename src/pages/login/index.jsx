import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
// import { AtSearchBar } from 'taro-ui'

// import t1 from '@/assets/imgs/home/bg1.jpg'
// import cartIcon from '@/assets/imgs/cart.png'

// import 'taro-ui/dist/style/components/search-bar.scss'
// import 'taro-ui/dist/style/components/button.scss'
// import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class Home extends Component {
  state = {}

  onChange = (e) => {
    console.log(e)
    this.setState({ keywords: e })
  }

  onConfirm = () => {
    Taro.navigateTo({ url: 'goods/list' })
  }

  render() {
    const { keywords, imgList, navList, goodsList } = this.state

    return <View className='index'></View>
  }
}

export default Home
