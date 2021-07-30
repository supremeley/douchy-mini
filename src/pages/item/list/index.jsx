import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import GoodsItem from '@/components/goodsItem'

import t1 from '@/assets/imgs/home/bg1.jpg'
import cartIcon from '@/assets/imgs/cart.png'

import 'taro-ui/dist/style/components/search-bar.scss'
import 'taro-ui/dist/style/components/button.scss'
import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class ItemList extends Component {
  state = {
    keywords: '',
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

  componentDidShow() {
    if (this.keywords) this.setState({ keywords: this.keywords })
  }

  onChange = (e) => {
    console.log(e)
    this.setState({ keywords: e })
  }

  onConfirm = () => {
    Taro.navigateTo({ url: 'goods/list' })
  }

  onJump = (id) => {
    Taro.navigateTo({ url: `/pages/item/detail/index?id=${id}` })
  }

  get keywords() {
    const router = getCurrentInstance().router
    return router.params.keywords
  }

  render() {
    const { keywords, imgList, navList, goodsList } = this.state

    const GoodsList =
      goodsList &&
      goodsList.map((item) => {
        return <GoodsItem info={item} key={item.id} onClick={this.onJump} />
      })

    return (
      <View className='index'>
        <View className='search-container'>
          <AtSearchBar value={keywords} onChange={this.onChange} onConfirm={this.onConfirm} />
        </View>
        <View className='bar-container'>
          <View className='goods'>{GoodsList}</View>
        </View>
      </View>
    )
  }
}

export default ItemList
