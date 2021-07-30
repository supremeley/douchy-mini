import Taro, { getCurrentPages } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'
import Tabbar from '@/components/tab-bar'

import t1 from '@/assets/imgs/home/bg1.jpg'
import t2 from '@/assets/imgs/home/bg2.jpg'
import t3 from '@/assets/imgs/home/bg3.jpg'
import t4 from '@/assets/imgs/home/bg4.jpg'
import cartIcon from '@/assets/imgs/cart.png'

import 'taro-ui/dist/style/components/search-bar.scss'
import 'taro-ui/dist/style/components/button.scss'
import 'taro-ui/dist/style/components/icon.scss'
import 'taro-ui/dist/style/components/tabs.scss'
import './index.scss'

class Categroy extends Component {
  state = {
    keywords: '',
    current: 0,
    barList: [
      { url: '', title: '高定' },
      { url: '', title: '轻奢' },
      { url: '', title: '高定' },
      { url: '', title: '轻奢' }
    ],
    goodsList: [
      {
        price: 1,
        pic: t1,
        title: '高定',
        id: 1
      },
      {
        price: 2,
        pic: t2,
        title: '轻奢',
        id: 1
      },
      {
        price: 3,
        pic: t3,
        title: '高定',
        id: 1
      },
      {
        price: 4,
        pic: t4,
        title: '轻奢',
        id: 1
      },
      {
        price: 5,
        pic: t1,
        title: '高定',
        id: 1
      },
      {
        price: 6,
        pic: t2,
        title: '轻奢',
        id: 1
      }
    ]
  }

  componentDidShow() {
    // console.log(.getTabBar())
    // const page = getCurrentPages()[0]

    // if (typeof page.getTabBar === 'function' && page.getTabBar()) {
    //   page.getTabBar().setData({
    //     selected: 1
    //   })
    // }
  }

  onChange = (e) => {
    console.log(e)
    this.setState({ keywords: e })
  }

  onConfirm = () => {
    Taro.navigateTo({ url: 'goods/list' })
  }

  handleClick = (e) => {
    this.setState({ current: e })
  }

  onJump = (id) => () => {
    Taro.navigateTo({ url: `/pages/item/detail/index?id=${id}` })
  }

  render() {
    const { keywords, current, barList, goodsList } = this.state

    const GoodsList =
      goodsList &&
      goodsList.map((item) => {
        return (
          <View key={item.url} className='goods-item' onClick={this.onJump(item.id)}>
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
      })

    return (
      <View className='index'>
        <View className='search-container'>
          <AtSearchBar value={keywords} onChange={this.onChange} onConfirm={this.onConfirm} />
        </View>
        <View className='bar-container'>
          <View className='bar-nav'>
            <AtTabs
              scroll
              height='600px'
              tabDirection='vertical'
              current={current}
              tabList={barList}
              onClick={this.handleClick}
            >
              {barList &&
                barList.map((item, index) => {
                  return (
                    <AtTabsPane tabDirection='vertical' current={current} index={index} key={index}>
                      <View>
                        <View className='goods'>{GoodsList}</View>
                      </View>
                    </AtTabsPane>
                  )
                })}
            </AtTabs>
          </View>
        </View>
        <Tabbar />

      </View>
    )
  }
}

export default Categroy
