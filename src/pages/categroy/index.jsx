import Taro, { getCurrentPages } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import Tabbar from '@/components/tab-bar'
// import LoadingStart from '@/components/loading-start'

import AllIcon from '@/assets/imgs/cate/all-collection.png'
import OpenIcon from '@/assets/imgs/cate/open.png'
import SearchIcon from '@/assets/imgs/cate/search.png'
import ArrowDown from '@/assets/imgs/arrow-down.png'
import ArrowUp from '@/assets/imgs/arrow-up.png'

import './index.scss'

class Categroy extends Component {
  state = {
    showPopup: false,
    cateList: [
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/cate1.png'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/cate2.png'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/cate3.png'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/cate4.png'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/cate4.png'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/cate4.png'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/cate4.png'
      }
    ],
    catePopupList: [
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/new arrival.png'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/limited time only.png'
      }
    ],
    leftList: [
      {
        type: 'all',
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/all-match.png'
      },
      {
        type: 'dating',
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/dating.png'
      }
    ],
    rightList: [
      {
        type: 'bussiness',
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/business.png'
      },
      {
        type: 'party',
        pic: 'http://121.5.150.116/dist/douchy-imgs/cate/party.png'
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

  openShowPopup = () => {
    this.setState({ showPopup: true })
  }

  closeShowPopup = () => {
    this.setState({ showPopup: false })
  }

  onJumpToSeries = (type) => () => {
    Taro.navigateTo({ url: `/pages/series/list/index?type=${type}` })
  }

  onJumpToSearch = () => {
    Taro.navigateTo({ url: '/pages/item/search/index' })
  }

  onJumpToOpen = () => {
    Taro.navigateTo({ url: '/pages/item/open/index' })
  }

  onJumpToScene = (type) => () => {
    Taro.navigateTo({ url: `/pages/series/scene/index?type=${type}` })
  }

  render() {
    const { showPopup, cateList, catePopupList, leftList, rightList } = this.state

    const CateList =
      cateList &&
      cateList.map((item) => {
        return (
          <View key={item.pic} className='plate-nav__item' onClick={this.onJumpToSeries(item.type)}>
            <Image src={item.pic} mode='aspectFit' className='plate-nav__item-img' />
          </View>
        )
      })

    const CatePopupList =
      catePopupList &&
      catePopupList.map((item) => {
        return (
          <View
            key={item.pic}
            className='plate-nav__item long-item'
            onClick={this.onJumpToSeries(item.type)}
          >
            <Image src={item.pic} mode='aspectFit' className='plate-nav__item-img' />
          </View>
        )
      })

    return (
      <View className={`cate ${showPopup ? 'hidden-pate' : ''}`}>
        <View className='header'>
          <Image src={AllIcon} mode='heightFix' className='header-logo' />
          <View className='header-right'>
            <View className='header-right__item' onClick={this.onJumpToSearch}>
              <Image
                src={SearchIcon}
                mode='aspectFit'
                className='header-right__item-icon search-icon'
              ></Image>
            </View>
            <View className='header-right__item' onClick={this.onJumpToOpen}>
              <Image
                src={OpenIcon}
                mode='aspectFit'
                className='header-right__item-icon up-icon'
              ></Image>
            </View>
          </View>
        </View>
        <View className='plate'>
          <ScrollView scrollX enableFlex className='plate-nav'>
            {CateList}
          </ScrollView>
          <Image
            src={ArrowDown}
            mode='aspectFit'
            className='plate-nav__more'
            onClick={this.openShowPopup}
          />
          <ScrollView scrollY className={`popup-container ${showPopup ? 'show-popup' : ''}`}>
            <View className='plate-nav nav-popup'>
              {CatePopupList}
              {CateList}
              <View className='plate-nav__item'>
                <Image
                  src={ArrowUp}
                  mode='aspectFit'
                  className='plate-nav__more up-icon'
                  onClick={this.closeShowPopup}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View className='content'>
          <View className='content-list'>
            {leftList &&
              leftList.map((item) => {
                return (
                  <View
                    key={item.type}
                    className='content-list__item'
                    onClick={this.onJumpToScene(item.type)}
                  >
                    <Image src={item.pic} mode='widthFix' className='content-list__item-icon' />
                  </View>
                )
              })}
          </View>
          <View className='content-list'>
            {rightList &&
              rightList.map((item) => {
                return (
                  <View
                    key={item.type}
                    className='content-list__item'
                    onClick={this.onJumpToScene(item.type)}
                  >
                    <Image src={item.pic} mode='widthFix' className='content-list__item-icon' />
                  </View>
                )
              })}
          </View>
        </View>

        {/* <View className='loading-content'>
          <LoadingStart />
        </View> */}
        <Tabbar />
      </View>
    )
  }
}

export default Categroy
