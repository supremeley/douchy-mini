import Taro, { getCurrentPages } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import Tabbar from '@/components/tab-bar'
import Loading from '@/components/loading'

// import t1 from '@/assets/imgs/home/bg1.jpg'
import t2 from '@/assets/imgs/home/bg2.jpg'
import t3 from '@/assets/imgs/home/bg3.jpg'
import t4 from '@/assets/imgs/home/bg4.jpg'

// import PlateIcon from '@/assets/imgs/home/artgalleries.png'

import SwiperIndicator from '@/assets/imgs/swiper-indicator.png'
import Logo from '@/assets/imgs/logo.png'
import LogoCircle from '@/assets/imgs/logo-circle.png'
import MoreGoods from '@/assets/imgs/more-goods.png'
import MorePlate from '@/assets/imgs/more-plate.png'

// import PopupBtn from '@/assets/imgs/popup/popup-btn.png'
// import PopupClose from '@/assets/imgs/popup/popup-close.png'

import 'taro-ui/dist/style/components/icon.scss'
import './index.scss'

class Home extends Component {
  state = {
    isLoading: true,
    showPopup: false,
    currentSwiper: 0,
    swiperList: [{ url: t2 }, { url: t3 }, { url: t4 }],
    plateList: [
      {
        swiperList: [{ url: t2 }, { url: t3 }, { url: t4 }],
        titleIcon: 'http://121.5.150.116/dist/douchy-imgs/home/plate-title1.png',
        navList: [
          {
            name: '吊带',
            type: ''
          },
          {
            name: '上衣',
            type: ''
          },
          {
            name: '衬衫',
            type: ''
          },
          {
            name: '连衣裙',
            type: ''
          },
          {
            name: '西装',
            type: ''
          },
          {
            name: '裤装',
            type: ''
          }
        ],
        currentNav: 0,
        goodsList: [
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
            price: '1,680',
            id: 1
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
            price: '3,680',
            id: 2
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/5.png',
            price: '4,680',
            id: 3
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/2.png',
            price: '5,680',
            id: 4
          }
        ],
        currentGoods: 0,
        goodsPageLength: ['', '', '']
      },
      {
        swiperList: [{ url: t2 }, { url: t3 }, { url: t4 }],
        titleIcon: 'http://121.5.150.116/dist/douchy-imgs/home/plate-title2.png',
        navList: [
          {
            name: '吊带',
            type: ''
          },
          {
            name: '上衣',
            type: ''
          },
          {
            name: '衬衫',
            type: ''
          },
          {
            name: '连衣裙',
            type: ''
          },
          {
            name: '西装',
            type: ''
          },
          {
            name: '裤装',
            type: ''
          }
        ],
        currentNav: 0,
        goodsList: [
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
            price: '1,680',
            id: 1
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
            price: '3,680',
            id: 2
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/5.png',
            price: '4,680',
            id: 3
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/2.png',
            price: '5,680',
            id: 4
          }
        ],
        currentGoods: 0,
        goodsPageLength: ['', '', '']
      },
      {
        swiperList: [{ url: t2 }, { url: t3 }, { url: t4 }],
        titleIcon: 'http://121.5.150.116/dist/douchy-imgs/home/plate-title3.png',
        navList: [
          {
            name: '吊带',
            type: ''
          },
          {
            name: '上衣',
            type: ''
          },
          {
            name: '衬衫',
            type: ''
          },
          {
            name: '连衣裙',
            type: ''
          },
          {
            name: '西装',
            type: ''
          },
          {
            name: '裤装',
            type: ''
          }
        ],
        currentNav: 0,
        goodsList: [
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
            price: '1,680',
            id: 1
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
            price: '3,680',
            id: 2
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/5.png',
            price: '4,680',
            id: 3
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/2.png',
            price: '5,680',
            id: 4
          }
        ],
        currentGoods: 0,
        goodsPageLength: ['', '', '']
      },
      {
        swiperList: [{ url: t2 }, { url: t3 }, { url: t4 }],
        titleIcon: 'http://121.5.150.116/dist/douchy-imgs/home/plate-title4.png',
        navList: [
          {
            name: '吊带',
            type: ''
          },
          {
            name: '上衣',
            type: ''
          },
          {
            name: '衬衫',
            type: ''
          },
          {
            name: '连衣裙',
            type: ''
          },
          {
            name: '西装',
            type: ''
          },
          {
            name: '裤装',
            type: ''
          }
        ],
        currentNav: 0,
        goodsList: [
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
            price: '1,680',
            id: 1
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
            price: '3,680',
            id: 2
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/5.png',
            price: '4,680',
            id: 3
          },
          {
            name: 'DouchySandquist不规则蕾丝拼接吊带',
            pic: 'http://121.5.150.116/dist/douchy-imgs/goods/2.png',
            price: '5,680',
            id: 4
          }
        ],
        currentGoods: 0,
        goodsPageLength: ['', '', '']
      }
    ],
    icon: {
      PopupBtn: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-btn.png',
      PopupClose: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-close.png',
      CounterTitle: 'http://121.5.150.116/dist/douchy-imgs/home/counter-title.png',
      CounterTitleMore: 'http://121.5.150.116/dist/douchy-imgs/home/counter-title-more.png',
      AboutAs: 'http://121.5.150.116/dist/douchy-imgs/home/aboutAs.png'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showPopup: true })
    }, 2000)

    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 4000)
  }

  componentDidShow() {
    // console.log(.getTabBar())
    // const page = getCurrentPages()[0]
    // if (typeof page.getTabBar === 'function' && page.getTabBar()) {
    //   page.getTabBar().setData({
    //     selected: 0
    //   })
    // }
  }

  onShareAppMessage = () => {
    return {
      title: 'DouchySandquist',
      path: '/pages/home/index',
      imageUrl: ''
    }
  }

  closePopup = () => {
    this.setState({ showPopup: false })
  }

  onSwiperChange = (e) => {
    // console.log(e.detail.current)
    this.setState({ currentSwiper: e.detail.current })
  }

  selectNav = (index, idx) => () => {
    const { plateList } = this.state

    let pl = plateList.concat()

    pl[index].currentNav = idx

    this.setState({ plateList: pl })
  }

  handleGoodsScroll = (e, index) => {
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

    const { plateList } = this.state

    let pl = plateList.concat()

    pl[index].currentGoods = i

    this.setState({ plateList: pl })
  }

  onJump = (id) => {
    Taro.navigateTo({ url: `/pages/item/detail/index?id=${id}` })
  }

  render() {
    const { icon, isLoading, showPopup, currentSwiper, swiperList, plateList } = this.state

    const SwiperList =
      swiperList &&
      swiperList.map((item) => {
        return (
          <SwiperItem key={item.url}>
            <Image src={item.url} mode='aspectFill' className='swiper-img'></Image>
          </SwiperItem>
        )
      })

    const IndicatorList =
      swiperList &&
      swiperList.map((item, index) => {
        return (
          <View key={item.url} className='swiper-indicator__con'>
            {currentSwiper === index ? (
              <Image
                src={SwiperIndicator}
                mode='aspectFit'
                className='swiper-indicator__icon'
              ></Image>
            ) : (
              <View className='swiper-indicator__item'></View>
            )}
          </View>
        )
      })

    const PlateList = plateList.map((item, index) => {
      return (
        <View key={item.titleIcon} className='plate-container'>
          <Image src={Logo} mode='aspectFit' className='plate-logo'></Image>
          <Swiper autoplay circular className='plate-swiper'>
            {item.swiperList &&
              item.swiperList.map((info) => {
                return (
                  <SwiperItem key={info.url}>
                    <Image src={info.url} mode='aspectFill' className='plate-swiper-img'></Image>
                  </SwiperItem>
                )
              })}
          </Swiper>
          <View className='plate-content'>
            <View className='plate-content__header'>
              {/* <Text>精品选购</Text> */}
              <Image
                src={item.titleIcon}
                mode='aspectFit'
                className='plate-content__header-icon'
              ></Image>
            </View>
            <View className='plate-content__nav'>
              {item.navList &&
                item.navList.map((nav, idx) => {
                  return (
                    <Text
                      key={nav.name}
                      className={`plate-content__nav-item ${
                        idx === item.currentNav ? 'active-item' : ''
                      }`}
                      onClick={this.selectNav(index, idx)}
                    >
                      {nav.name}
                    </Text>
                  )
                })}
            </View>
            <ScrollView
              scrollX
              enableFlex
              className='plate-content__counter'
              onScroll={(e) => this.handleGoodsScroll(e, index)}
            >
              {item.goodsList &&
                item.goodsList.map((goods) => {
                  return (
                    <View key={goods.pic} className='plate-content__counter-item'>
                      <Image
                        src={goods.pic}
                        mode='aspectFit'
                        className='plate-content__counter-item__img'
                      ></Image>
                      <View className='plate-content__counter-item__price'>￥{goods.price}</View>
                    </View>
                  )
                })}
              <Image
                src={MoreGoods}
                mode='aspectFit'
                className='plate-content__counter-more'
              ></Image>
            </ScrollView>
            <View className='plate-content__indicator'>
              {item.goodsPageLength &&
                item.goodsPageLength.map((page, idx) => {
                  return (
                    <View key={page} className='plate-content__indicator__con'>
                      {item.currentGoods === idx ? (
                        <Image
                          src={SwiperIndicator}
                          mode='aspectFit'
                          className='plate-content__indicator__icon'
                        ></Image>
                      ) : (
                        <View className='plate-content__indicator__item'></View>
                      )}
                    </View>
                  )
                })}
              {/* <View className='plate-content__indicator__con'>
                <View className='plate-content__indicator__item'></View>
              </View>
              <View className='plate-content__indicator__con'>
                <Image
                  src={SwiperIndicator}
                  mode='aspectFit'
                  className='plate-content__indicator__icon'
                ></Image>
              </View>
              <View className='plate-content__indicator__con'>
                <View className='plate-content__indicator__item'></View>
              </View> */}
            </View>
          </View>
          <View className='plate-content second'>
            <View className='plate-content__header'>
              <Image
                src={icon.CounterTitle}
                mode='aspectFit'
                className='plate-content__header-icon'
              ></Image>
              <Image
                src={icon.CounterTitleMore}
                mode='aspectFit'
                className='plate-content__header-icon__more'
              ></Image>
            </View>
            <View className='plate-content__shelves'>
              {item.goodsList &&
                item.goodsList.map((goods) => {
                  return (
                    <View key={item.pic} className='plate-content__shelves-item'>
                      <Image
                        // src={item.pic}
                        mode='aspectFit'
                        className='plate-content__shelves-item__img'
                      ></Image>
                      <View className='plate-content__shelves-item__name'>{goods.name}</View>
                      <View className='plate-content__shelves-item__info'>
                        <View className='plate-content__shelves-item__info-pirce'>
                          ￥{goods.price}
                        </View>
                        <Image
                          src={LogoCircle}
                          mode='aspectFit'
                          className='plate-content__shelves-item__info-icon'
                        ></Image>
                      </View>
                    </View>
                  )
                })}
            </View>
            <View className='plate-more'>
              探索更多系列单品
              <Image src={MorePlate} mode='aspectFit' className='plate-more-icon'></Image>
            </View>
          </View>
        </View>
      )
    })

    return (
      <View className='index'>
        <View className='swiper-contianer'>
          {isLoading ? (
            <View className='loading-container'>
              <Loading />
            </View>
          ) : (
            <>
              <Swiper
                autoplay
                circular
                current={currentSwiper}
                className='swiper'
                onChange={this.onSwiperChange}
              >
                {SwiperList}
              </Swiper>
              <View className='swiper-content'>
                <View className='swiper-content__title'>ENCOUNTER ROMANCE</View>
                <View className='swiper-content__explain'>2021 早秋系列</View>
                <View className='swiper-content__more'>探索更多</View>
              </View>
              <View className='swiper-indicator'>{IndicatorList}</View>
            </>
          )}
        </View>
        {PlateList}
        <Image src={icon.AboutAs} mode='widthFix' className='about-us'></Image>
        {showPopup && (
          <View
            className='mask'
            catch-move
            // onTouchStart={(e) => e.stopPropagation()}
            // onTouchMove={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <View className='popup'>
              <Image src={icon.PopupClose} className='popup-close' onClick={this.closePopup} />
              <Image src={icon.PopupBtn} className='popup-btn' />
            </View>
          </View>
        )}
        <Tabbar />
      </View>
    )
  }
}

export default Home
