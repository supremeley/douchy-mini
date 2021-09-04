import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'

import SwiperIndicator from '@/assets/imgs/swiper-indicator.png'
import MoreGoods from '@/assets/imgs/more-goods.png'

import './index.scss'

class SlidingWindow extends Component {
  defaultProps = {
    info: null,
    type: 'home'
    // onClick: () => {}
  }

  state = {
    fetchData: null
  }

  componentDidMount() {
    const { info } = this.props

    if (info) {
      this.setState({ fetchData: info })
    }
  }

  onJumpToDetail = () => {
    Taro.navigateTo({ url: `/pages/item/detail/index?id=1` })
  }

  onJumpToAllSeries = () => {
    Taro.navigateTo({ url: `/pages/series/all/index` })
  }

  onJumpToSeries = () => {
    Taro.navigateTo({ url: `/pages/series/list/index?id=1` })
  }

  handleSelectNav = (idx) => () => {
    const { fetchData } = this.state

    const fd = { ...fetchData, currentNav: idx }

    this.setState({ fetchData: fd })
  }

  handleGoodsScroll = (e) => {
    // console.log(e.detail)
    // console.log(index)
    let i = 0
    if (e.detail.scrollLeft <= 200) {
      i = 0
    } else if (e.detail.scrollLeft > 200 && e.detail.scrollLeft < 400) {
      i = 1
    } else {
      i = 2
    }

    const { fetchData } = this.state

    const fd = { ...fetchData, currentGoods: i }

    this.setState({ fetchData: fd })
  }

  render() {
    const { type } = this.props
    const { fetchData } = this.state
    // debugger
    if (!fetchData) return null

    const {
      titleIcon,
      titleHeight,
      navList,
      currentNav,
      goodsList,
      goodsPageLength,
      currentGoods
    } = fetchData

    return (
      <View className='sliding-window'>
        <View className='sliding-window__header'>
          {/* <Text>精品选购</Text> */}
          <Image
            src={titleIcon}
            style={titleHeight && { height: titleHeight + 'px' }}
            mode={type === 'home' ? 'aspectFit' : 'heightFix'}
            className={`sliding-window__header-icon' ${type === 'series' && 'series-icon'}`}
          />
        </View>
        <View className='sliding-window__nav'>
          {navList &&
            navList.map((nav, idx) => {
              return (
                <Text
                  key={nav.name}
                  className={`sliding-window__nav-item ${idx === currentNav ? 'active-item' : ''}`}
                  onClick={this.handleSelectNav(idx)}
                >
                  {nav.name}
                </Text>
              )
            })}
        </View>
        <ScrollView
          scrollX
          enableFlex
          className='sliding-window__counter'
          onScroll={this.handleGoodsScroll}
        >
          <View className='sliding-window__counter-container'>
            {goodsList &&
              goodsList.map((goods) => {
                return (
                  <View
                    key={goods.pic}
                    className='sliding-window__counter-item'
                    onClick={this.onJumpToDetail}
                  >
                    <Image
                      src={goods.pic}
                      mode='aspectFit'
                      className='sliding-window__counter-item__img'
                    />
                    <View className='sliding-window__counter-item__price'>￥{goods.price}</View>
                  </View>
                )
              })}
          </View>

          <View className='sliding-window__counter-more'>
            <Image
              src={MoreGoods}
              mode='aspectFit'
              className='sliding-window__counter-more__icon'
              onClick={this.onJumpToSeries}
            />
          </View>
        </ScrollView>
        <View className='sliding-window__indicator'>
          {goodsPageLength &&
            goodsPageLength.map((page, idx) => {
              return (
                <View key={page} className='sliding-window__indicator__con'>
                  {currentGoods === idx ? (
                    <Image
                      src={SwiperIndicator}
                      mode='aspectFit'
                      className='sliding-window__indicator__icon'
                    />
                  ) : (
                    <View className='sliding-window__indicator__item'></View>
                  )}
                </View>
              )
            })}
        </View>
      </View>
    )
  }
}

export default SlidingWindow
