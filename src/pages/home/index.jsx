import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import Mask from '@/components/mask'
import Tabbar from '@/components/tab-bar'
import Loading from '@/components/loading'
import GoodsItem from '@/components/goodsItem'
import SlidingWindow from '@/components/slidingWindow'

// import t1 from '@/assets/imgs/home/bg1.jpg'
import t2 from '@/assets/imgs/home/bg2.jpg'
import t3 from '@/assets/imgs/home/bg3.jpg'
import t4 from '@/assets/imgs/home/bg4.jpg'

// import PlateIcon from '@/assets/imgs/home/artgalleries.png'

import SwiperIndicator from '@/assets/imgs/swiper-indicator.png'
import Logo from '@/assets/imgs/logo.png'
// import LogoCircle from '@/assets/imgs/logo-circle.png'
// import MoreGoods from '@/assets/imgs/more-goods.png'
import MorePlate from '@/assets/imgs/more-plate.png'

// import 'taro-ui/dist/style/components/icon.scss'
import './index.scss'

class Home extends Component {
  state = {
    isLoading: false,
    showPopup: false,
    popupType: 'first',
    currentSwiper: 0,
    swiperList: [{ url: t2 }, { url: t3 }, { url: t4 }],
    plateList: [
      {
        swiperDuration: 2000,
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
        swiperDuration: 2500,
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
        swiperDuration: 3000,
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
        swiperDuration: 3500,
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
      AboutAs: 'http://121.5.150.116/dist/douchy-imgs/home/aboutAs.png',
      popupVipClose: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-vip-close.png',
      popuplogo: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-logo.png',
      popupContent: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-content.png'
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false })
    //   setTimeout(() => {
    //     this.setState({ showPopup: true })
    //   }, 1000)
    // }, 1000)
  }

  componentDidShow() {
    // Taro.pageScrollTo({
    //   selector: 'about-us',
    //   duration: 300
    // })
  }

  onShareAppMessage = () => {
    return {
      title: 'DouchySandquist',
      path: '/pages/home/index',
      imageUrl: ''
    }
  }

  onJumpToDetail = () => {
    Taro.navigateTo({ url: `/pages/item/detail/index?id=1` })
  }

  onJumpToNewSeries = () => {
    Taro.navigateTo({ url: `/pages/series/list/index?type=new` })
  }

  onJumpToAllSeries = () => {
    Taro.navigateTo({ url: `/pages/series/all/index` })
  }

  openPopup = (type) => () => {
    this.setState({ showPopup: true, popupType: type })
  }

  closePopup = () => {
    this.setState({ showPopup: false })
  }

  onSwiperChange = (e) => {
    // console.log(e.detail.current)
    this.setState({ currentSwiper: e.detail.current })
  }

  render() {
    const { showPopup, popupType, icon, isLoading, currentSwiper, swiperList, plateList } =
      this.state

    const SwiperList =
      swiperList &&
      swiperList.map((item) => {
        return (
          <SwiperItem key={item.url} onClick={this.onJumpToNewSeries}>
            <Image src={item.url} mode='aspectFill' className='swiper-img' />
          </SwiperItem>
        )
      })

    const IndicatorList =
      swiperList &&
      swiperList.map((item, index) => {
        return (
          <View key={item.url} className='swiper-indicator__con'>
            {currentSwiper === index ? (
              <Image src={SwiperIndicator} mode='aspectFit' className='swiper-indicator__icon' />
            ) : (
              <View className='swiper-indicator__item'></View>
            )}
          </View>
        )
      })

    const PlateList = plateList.map((item, index) => {
      return (
        <View
          key={item.titleIcon}
          className={`plate-container ${index === 0 ? 'first-palte' : ''}`}
        >
          <Image src={Logo} mode='aspectFit' className='plate-logo' />
          <Swiper autoplay circular duration={item.swiperDuration} className='plate-swiper'>
            {item.swiperList &&
              item.swiperList.map((info) => {
                return (
                  <SwiperItem key={info.url}>
                    <Image src={info.url} mode='aspectFill' className='plate-swiper-img' />
                  </SwiperItem>
                )
              })}
          </Swiper>
          <SlidingWindow info={item} type='home' />
          <View className='plate-content second'>
            <View className='plate-content__header'>
              <Image
                src={icon.CounterTitle}
                mode='aspectFit'
                className='plate-content__header-icon'
              />
              <Image
                src={icon.CounterTitleMore}
                mode='aspectFit'
                className='plate-content__header-icon__more'
                onClick={this.openPopup('vip')}
              />
            </View>
            <View className='plate-content__shelves'>
              {item.goodsList &&
                item.goodsList.map((goods) => {
                  return <GoodsItem key={goods.pic} info={goods} onClick={this.onJumpToDetail} />
                })}
            </View>
            <View className='plate-more' onClick={this.onJumpToAllSeries}>
              探索更多系列单品
              <Image src={MorePlate} mode='aspectFit' className='plate-more-icon' />
            </View>
          </View>
        </View>
      )
    })

    return (
      <View className='index'>
        {isLoading ? (
          <View className='loading-content'>
            <Loading />
          </View>
        ) : (
          <>
            <View className='swiper-contianer'>
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
            </View>
            {PlateList}
          </>
        )}
        <Image src={icon.AboutAs} mode='widthFix' className='about-us' />
        {showPopup && (
          <Mask onClose={this.closePopup}>
            {popupType === 'first' && (
              <View className='popup'>
                <Image src={icon.PopupClose} className='popup-close' onClick={this.closePopup} />
                <Image src={icon.PopupBtn} className='popup-btn' />
              </View>
            )}
            {popupType === 'vip' && (
              <View className='popup popup-vip'>
                <Image
                  src={icon.popupVipClose}
                  className='popup-vip-close'
                  onClick={this.closePopup}
                />
                <Image src={icon.popuplogo} mode='widthFix' className='popup-logo' />
                <Image src={icon.popupContent} mode='widthFix' className='popup-content' />
              </View>
            )}
          </Mask>
        )}

        <Tabbar />
      </View>
    )
  }
}

export default Home
