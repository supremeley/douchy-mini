import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import Mask from '@/components/mask'
import GoodsItem from '@/components/goodsItem'
import WishPlate from '@/components/wishPlate'

import LogoGolden from '@/assets/imgs/logo-golden.png'
import OffText from '@/assets/imgs/item/on-off-text.png'
import Couponbg from '@/assets/imgs/item/coupon.png'
import OffLogo from '@/assets/imgs/item/logo.png'
import LikeLogo from '@/assets/imgs/item/like.png'
import ShareLogo from '@/assets/imgs/item/share.png'
import LogoCircle from '@/assets/imgs/logo-circle.png'
import BrandLogo from '@/assets/imgs/item/brand-logo.png'
import SkipIcon from '@/assets/imgs/item/open.jpg'
import CloseIcon from '@/assets/imgs/item/close.jpg'
import Process1Icon from '@/assets/imgs/item/process1.png'
import Process2Icon from '@/assets/imgs/item/process2.png'
import Process3Icon from '@/assets/imgs/item/process3.png'
import MoreIcon from '@/assets/imgs/more.png'
import NextStep from '@/assets/imgs/more-plate.png'

import LogoText from '@/assets/imgs/item/logo-text.png'
import ClothingIcon from '@/assets/imgs/item/clothingmatching.png'
// import icon.logoBlack from '@/assets/imgs/logo-black.png'

import { CSSTransition } from 'react-transition-group'

import 'taro-ui/dist/style/components/icon.scss'

import Footer from '../components/footer'

import './index.scss'

class itemDetail extends Component {
  state = {
    showPopup: false,
    popupType: '',
    imgList: [
      {
        name: 'DouchySandquist1',
        url: 'http://121.5.150.116/dist/douchy-imgs/item/g1.png'
      },
      {
        name: 'DouchySandquist2',
        url: 'http://121.5.150.116/dist/douchy-imgs/goods/1.png'
      },
      {
        name: 'DouchySandquist3',
        url: 'http://121.5.150.116/dist/douchy-imgs/goods/2.png'
      },
      {
        name: 'DouchySandquist4',
        url: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png'
      },
      {
        name: 'DouchySandquist5',
        url: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png'
      }
    ],
    maintain: [
      '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
      '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
      '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????35%-40%????????????????????????????????????????????????',
      '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????'
    ],
    process: ['????????????', '??????????????????????????????', '??????????????????', '??????????????????'],
    process2: [
      '??????????????????',
      '????????????',
      '?????????????????????????????????',
      '??????',
      '????????????',
      '????????????'
    ],
    process3: ['????????????', '??????????????????????????????', '??????????????????', '24??????????????????'],
    process4: [
      {
        icon: Process1Icon
      },
      {
        icon: Process2Icon
      },
      {
        icon: Process3Icon
      }
    ],
    goodsList: [
      {
        name: 'DouchySandquist???????????????????????????',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
        price: '1,680',
        id: 1
      },
      {
        name: 'DouchySandquist???????????????????????????',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '3,680',
        id: 2
      },
      {
        name: 'DouchySandquist???????????????????????????',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
        price: '1,680',
        id: 1
      },
      {
        name: 'DouchySandquist???????????????????????????',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '3,680',
        id: 2
      }
    ],
    goodsList2: [
      {
        name: 'DouchySandquist???????????????????????????',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
        price: '1,680',
        id: 1
      },
      {
        name: 'DouchySandquist???????????????????????????',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '3,680',
        id: 2
      },
      {
        name: 'DouchySandquist???????????????????????????',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '3,680',
        id: 2
      },
      {
        name: 'DouchySandquist???????????????????????????',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '3,680',
        id: 2
      }
    ],
    // navList: [
    //   {
    //     name: '????????????'
    //   },
    //   {
    //     name: '????????????'
    //   }
    // ],
    // curNav: 0,
    showEffect: false,
    currentSwiper: 0,
    currentShow: 1,
    eStart: 0,
    scrollIntoView: null, // ????????????
    showDetail: true, // ??????????????????
    detailScroll: false, // ????????????????????????
    isScrollEnd: false, // ??????????????????
    isScrollTop: false, // ??????????????????
    isSticky: true, // ????????????
    scrollTop: null,
    noScrolling: true,
    icon: {
      // Btnbg: 'http://121.5.150.116/dist/douchy-imgs/effect/btn-bg.png',
      BtnCircle: 'http://121.5.150.116/dist/douchy-imgs/effect/btn-circle.png',
      bottomCir: 'http://121.5.150.116/dist/douchy-imgs/effect/bottom-cir.png',
      bottomLogo: 'http://121.5.150.116/dist/douchy-imgs/effect/bottom-logo.png',
      PopupBtn: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-btn.png',
      PopupClose: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-close.png',
      popupVipClose: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-vip-close.png',
      popuplogo: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-logo.png',
      popupContent: 'http://121.5.150.116/dist/douchy-imgs/popup/popup-content.png',
      logoBlack: 'http://121.5.150.116/dist/douchy-imgs/logo-black.png',
      studybg1: 'http://121.5.150.116/dist/douchy-imgs/study/1bg.png',
      studyarrow1: 'http://121.5.150.116/dist/douchy-imgs/study/1arrow.png',
      studystar: 'http://121.5.150.116/dist/douchy-imgs/study/2star.png',
      studybtn: 'http://121.5.150.116/dist/douchy-imgs/study/study-btn.png'
    },
    customProgress: [
      {
        type: 'size'
      },
      {
        type: 'startDate'
      },
      {
        type: 'refundDate'
      },
      {
        type: 'dateConfirm'
      },
      {
        type: 'addressConfirm'
      }
    ],
    tryProgress: [
      {
        type: 'explain'
      },
      {
        type: 'study'
      },
      {
        type: 'size'
      },
      {
        type: 'startDate'
      },
      {
        type: 'refundDate'
      },
      {
        type: 'dateConfirm'
      },
      {
        type: 'addressConfirm'
      }
    ],
    curProgress: 0,
    btnType: '',
    studyProgress: [
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/study/1bg.png'
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/study/2bg.png'
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/study/3bg.png'
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/study/4bg.png'
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/study/5bg.png'
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/study/6bg.png'
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/study/7bg.png'
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/study/8bg.png'
      }
    ],
    stepList: [
      {
        name: '????????????',
        style: { top: '55px', left: '60px' }
      },
      {
        name: '???????????????????????????',
        style: { top: '80px', left: '155px' }
      },
      {
        name: '???????????????????????????',
        style: { top: '115px', left: '130px' }
      },
      {
        name: '????????????',
        style: { top: '150px', left: '60px' }
      },
      {
        name: '?????????????????????????????????',
        style: { top: '185px', left: '100px' }
      },
      {
        name: '??????????????????',
        style: { top: '220px', left: '130px' }
      },
      {
        name: '????????????',
        style: { top: '245px', left: '60px' }
      },
      {
        name: '????????????',
        style: { top: '290px', left: '60px' }
      },
      {
        name: '????????????',
        style: { top: '310px', left: '130px' }
      },
      {
        name: '??????????????????????????????',
        style: { top: '350px', left: '60px' }
      },
      {
        name: '??????????????????',
        style: { top: '390px', left: '60px' }
      },
      {
        name: '24??????????????????',
        style: { top: '420px', left: '155px' }
      }
    ],
    date: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  }

  componentDidMount() {
    // Taro.pageScrollTo({
    //   selector: 'shop-detail',
    //   duration: 300
    // })
  }

  onShareAppMessage = () => {
    return {
      title: 'DouchySandquist',
      path: '/pages/item/detail/index?id=1',
      imageUrl: ''
    }
  }

  onJumpToDetail = () => {
    Taro.navigateTo({ url: `/pages/item/detail/index?id=1` })
  }

  onJumpToCate = () => {
    Taro.navigateTo({ url: `/pages/categroy/index` })
  }

  onJumpToAddress = (opt) => () => {
    Taro.navigateTo({ url: `/pages/member/address/list/index?type=select&opt=${opt}` })
  }

  onJumpToCart = () => {
    Taro.navigateTo({ url: `/pages/cart/index` })
  }

  openPopup = (type) => {
    // console.log(type)
    this.setState({ showPopup: true, popupType: type })
  }

  handleNext = (type, step) => {
    // console.log(1)
    const { btnType, curProgress, customProgress, tryProgress } = this.state

    let t = btnType

    if (type === 'custom' || type === 'try') {
      t = type
    }

    let curPro = curProgress

    if (step || step === 0) {
      curPro = step
    }

    let progress
    // console.log(curPro)

    if (t === 'custom') progress = customProgress
    if (t === 'try') progress = tryProgress
    // console.log(progress)

    const pt = progress[curPro].type
    // console.log(pt)
    this.openPopup(pt)

    curPro++

    if (type) {
      this.setState({ btnType: t, curProgress: curPro }, () => {})
    } else {
      this.setState({ curProgress: curPro }, () => {})
    }
  }

  closePopup = () => {
    this.setState({ showPopup: false })
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

  onSwiperChange = (e) => {
    // console.log(e.detail.current)
    this.setState({ currentSwiper: e.detail.current })
  }

  // onSelectNav = (index) => () => {
  //   this.setState({ curNav: index })
  // }

  changeEffect = () => {
    this.setState({ showEffect: !this.state.showEffect })
  }

  changeShowDetail = () => {
    const { showDetail, detailScroll } = this.state

    let scrollIntoView = showDetail ? (detailScroll ? 'show-detail' : null) : null

    console.log(showDetail, detailScroll, scrollIntoView, 'scrollIntoView')

    let isSticky = !showDetail

    this.setState({
      showDetail: isSticky,
      detailScroll: false,
      isSticky,
      scrollIntoView
      // scrollTop: 896
    })
  }

  openContainerSwiper = () => {
    const { showDetail, detailScroll } = this.state
    // console.log(detailScroll, 'detailScroll')
    if (detailScroll) {
      this.setState({
        detailScroll: false,
        isScrollTop: true,
        isSticky: false
      })
    }
  }

  handleClass = (index) => {
    const { currentShow, imgList } = this.state

    let next = currentShow + 1
    let pre = currentShow - 1
    // console.log(next)

    if (pre == 0) {
      if (index === imgList.length - 1) {
        return 'gpde'
      }
    }

    if (pre < 0) {
      if (index === imgList.length - 2) {
        return 'gpde'
      }

      if (index === imgList.length - 1) {
        return 'gpre'
      }
    }

    if (next == imgList.length - 1) {
      if (index === 0) {
        return 'gnde'
      }
    }

    if (next == imgList.length) {
      if (index === 1) {
        return 'gnde'
      }

      if (index === 0) {
        return 'gnext'
      }
    }

    if (index === next) {
      return 'gnext'
    }

    if (index > next) {
      return 'gnde'
    }

    if (index === pre) {
      return 'gpre'
    }

    if (index < pre) {
      return 'gpde'
    }

    if (index === currentShow) {
      return 'active-item'
    }

    return 'gpde'

    // return 'gnde'
  }

  handleTouch = (e) => {
    const { showEffect } = this.state

    if (!showEffect) {
      return
    }

    // console.log(e.changedTouches[0].clientX)

    this.setState({ eStart: e.changedTouches[0].clientX })
  }

  handleTouchEnd = (e) => {
    const { eStart, showEffect, currentShow, imgList } = this.state

    if (!showEffect) {
      return
    }

    const eEnd = e.changedTouches[0].clientX

    let cs

    if (eEnd > eStart) {
      cs = currentShow ? currentShow - 1 : imgList.length - 1
    }

    if (eEnd <= eStart) {
      cs = currentShow !== imgList.length - 1 ? currentShow + 1 : 0
    }

    if (eEnd == eStart) {
      cs = 0
    }
    console.log(eEnd, eStart, cs)

    this.setState({ currentShow: cs })
  }

  handelScroll = () => {
    // console.log(1)
    const { detailScroll, scrollIntoView, showDetail, isScrollEnd, isScrollTop } = this.state

    if (showDetail && detailScroll) {
      this.setState({ scrollIntoView: null })
    }

    console.log(scrollIntoView, showDetail, 'showDetail')

    if (!showDetail) {
      return
    }

    const query = Taro.createSelectorQuery()

    const selector = query.selectAll(`.service-plate`).boundingClientRect()

    selector.exec((res) => {
      const arr = res[0]
      console.log(arr, 'resres')
      if (arr[0].top <= -84) {
        // console.log(arr[0].top, 'top')
        if (!detailScroll && !isScrollTop && !isScrollEnd) {
          this.setState({ detailScroll: true }, () => {})
        }
      } else {
        if (isScrollTop) {
          this.setState({ isScrollTop: false, isSticky: true })
        }
        // if (isScrollEnd) {
        //   this.setState({ isScrollEnd: false })
        // }
      }
    })
  }

  handelDetailScrollToBottom = () => {
    const { isSticky } = this.state

    console.log('handelDetailScrollToBottom')

    if (!isSticky) {
      return
    }

    this.setState({ detailScroll: false, isSticky: false, isScrollEnd: true }, () => {
      // setTimeout(() => {
      //   this.setState({ scrollTop: 896 })
      // }, 0)
      // Taro.nextTick(() => {
      //   this.setState({ scrollTop: 896 })
      // })
    })
  }

  handelDetailScrollToTop = () => {
    console.log('handelDetailScrollToTop')
    const { detailScroll } = this.state

    if (!detailScroll) {
      return
    }

    this.setState({ detailScroll: false, isScrollTop: true })
  }

  handleAddToCart = () => {
    // D.toast('')
    this.closePopup()
  }

  get id() {
    return this.route.params.id
  }

  get route() {
    return getCurrentInstance().router
  }

  render() {
    const {
      showPopup,
      popupType,
      showDetail,
      detailScroll,
      isSticky,
      currentSwiper,
      currentShow,
      maintain,
      imgList,
      process,
      process2,
      process3,
      process4,
      goodsList,
      // navList,
      // curNav,
      goodsList2,
      showEffect,
      icon,
      scrollIntoView,
      date,
      studyProgress,
      stepList
    } = this.state

    const SwiperList =
      imgList &&
      imgList.map((item, index) => {
        return (
          <SwiperItem key={item.url} onClick={(e) => this.previewImg(e, index)}>
            <View className='header-swiper__cover'>
              <Image src={item.url} mode='aspectFill' className='header-swiper__img' />
            </View>
          </SwiperItem>
        )
      })

    return (
      // <PageMeta pageStyle={`overflow: ${!detailScroll ? 'hidden' : 'visible'}`}>
      <View
        className='item'
        onTouchStart={this.handleTouch}
        onTouchEnd={this.handleTouchEnd}
        // onTouchMove={(e) => e.stopPropagation()}
        // catchMove
      >
        <ScrollView
          scrollWithAnimation
          scrollAnchoring
          // scrollIntoView={scrollIntoView}
          scrollY={!detailScroll}
          // scrollTop={scrollTop}
          className='scroll-container'
          onScroll={this.handelScroll}
          // onTouchMove={(e) => e.stopPropagation()}
          // catchMove
        >
          <View>
            <View className='on-off'>
              <Image src={OffText} mode='aspectFit' className='on-off__text' />
              <View
                className={`on-off__logo ${showEffect && 'active-logo'}`}
                onClick={this.changeEffect}
              >
                <Image src={OffLogo} mode='aspectFit' className='on-off__logo-img' />
                <Image src={icon.BtnCircle} mode='aspectFit' className='on-off__logo-circle' />
              </View>
            </View>
            <View className='header-container'>
              <CSSTransition in={showEffect} timeout={0} classNames='effect-header'>
                <View className='header'>
                  <Swiper
                    circular
                    autoplay
                    current={currentSwiper}
                    className='header-swiper'
                    onChange={this.onSwiperChange}
                  >
                    {SwiperList}
                  </Swiper>
                  <View className='header-swiper__ind'>
                    <Text className='header-swiper__ind-son'>{currentSwiper + 1}</Text>
                    <View className='header-swiper__ind-line'></View>
                    <Text className='header-swiper__ind-mon'>{imgList.length}</Text>
                  </View>
                  <Image src={ShareLogo} className='header-opt__icon' />
                  <Image src={LikeLogo} className='header-opt__icon like-icon' />
                </View>
              </CSSTransition>
              <CSSTransition in={showEffect} timeout={0} classNames='effect-show'>
                <View className='show'>
                  <View className='show-title'>
                    <View>
                      <Image src={LogoText} mode='aspectFit' className='show-title__logo' />
                    </View>
                    <View>
                      <Image src={ClothingIcon} mode='aspectFit' className='show-title__text' />
                    </View>
                  </View>
                  <View className='show-content'>
                    <Swiper circular current={currentShow} className='show-content__swiper'>
                      {imgList &&
                        imgList.map((item, index) => {
                          return (
                            <SwiperItem key={item.url}>
                              <View className='show-content__swiper-cover'>
                                <Image
                                  src={item.url}
                                  mode='aspectFill'
                                  className='show-content__swiper-img'
                                />
                                <Image src={LikeLogo} className='show-content__swiper-icon' />
                              </View>
                            </SwiperItem>
                          )
                        })}
                    </Swiper>
                  </View>
                </View>
              </CSSTransition>
            </View>
            <CSSTransition in={showEffect} timeout={0} classNames='effect-container'>
              <View className='container'>
                <View className='plate'>
                  <View className='plate-detail__price'>?? 2,880.00</View>
                  <View className='plate-detail__title'>
                    DouchySandquist Dark Goddess
                    <View className='plate-detail__title-zh'>?????????????????????</View>
                  </View>
                  <View className='plate-detail__desc'>
                    ?????????????????????????????????????????????????????????????????????????????????????????????
                    ?????????????????????????????????????????????????????????????????????????????????????????????
                    ???????????????????????????????????????????????????????????????????????????
                  </View>
                  <View className='plate-cart'>
                    <Image src={LogoCircle} className='plate-cart__icon' />
                    ???????????????
                  </View>
                </View>
                <View className='plate'>
                  <View className='info top-info'>
                    <View className='info-title'>?????????</View>
                    <View className='info-detail'>
                      <View className='info-detail__item'>???100</View>
                      <View className='info-detail__item'>???200</View>
                    </View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('coupon')}
                    ></View>
                  </View>
                  <View className='info action-info'>
                    <View className='info-title'>??????</View>
                    <View className='info-tag'>??????</View>
                    <View className='info-content'>
                      <View className='info-content__item'>?????????5000??????200???</View>
                      <View className='info-content__item'>?????????3000??????100???</View>
                    </View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('full')}
                    ></View>
                  </View>
                </View>
                <View className='plate'>
                  <View className='info top-info'>
                    <View className='info-title'>??????</View>
                    <View className='info-explain'>??????????????????????????????</View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('attr')}
                    ></View>
                  </View>
                  <View className='info bottom-info'>
                    <View className='info-title'>??????</View>
                    <View className='info-explain'>
                      ?????? ???Douchy Sandquist???????????? ???????????????????????????
                    </View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('param')}
                    ></View>
                  </View>
                </View>
                <View className='plate'>
                  <View className='info'>
                    <Image src={BrandLogo} mode='aspectFill' className='info-logo' />
                    <View className='info-brand'>
                      <View className='info-brand__title'>DouchySandquist ??????</View>
                      <View className='info-brand__tag'>????????????</View>
                    </View>
                    <View className='info-brand__more' onClick={this.onJumpToCate}>
                      ????????????
                    </View>
                  </View>
                </View>
                <View
                  className={`plate service-plate ${showDetail && 'sticky-service'}`}
                  onTouchStart={this.openContainerSwiper}
                >
                  <View className='info'>
                    <Image src={LogoCircle} mode='aspectFill' className='info-icon' />
                    <View className='info-explain'>??????????????????????????????</View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('free')}
                    ></View>
                  </View>
                  <View className='info'>
                    <Image src={LogoCircle} mode='aspectFill' className='info-icon' />
                    <View className='info-explain'>?????????10????????????????????????</View>
                  </View>
                  <View className='info'>
                    <Image src={LogoCircle} mode='aspectFill' className='info-icon' />
                    <View className='info-explain'>?????????30????????????</View>
                  </View>
                  <View className='info'>
                    <Image src={LogoCircle} mode='aspectFill' className='info-icon' />
                    <View className='info-explain'>vip????????????</View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('vip')}
                    ></View>
                  </View>
                </View>
                <View
                  id='show-detail'
                  className={`show-container ${showDetail && 'sticky-detail'}`}
                >
                  <View className='detail shop-detail'>
                    <View className='detail-title'>????????????</View>
                    <Image
                      src={showDetail ? CloseIcon : SkipIcon}
                      mode='heightFix'
                      className='detail-icon'
                      onClick={this.changeShowDetail}
                    />
                    <ScrollView
                      scrollY={detailScroll}
                      className={`shop-detail__scroll ${showDetail && 'open-detail__scroll'}`}
                      // upperThreshold={0}
                      // lowerThreshold={1}
                      // onScrollToLower={this.handelDetailScrollToBottom}
                      // onTouchMove={(e) => e.stopPropagation()}
                      // catchMove
                      // onScrollToUpper={this.handelDetailScrollToTop}
                    >
                      <Image
                        src='http://121.5.150.116/dist/douchy-imgs/item/g3.png'
                        mode='widthFix'
                        className='detail-img default-img'
                      />
                      {showDetail && (
                        <>
                          <Image
                            src='http://121.5.150.116/dist/douchy-imgs/item/g1.png'
                            mode='widthFix'
                            className='detail-img'
                          />
                          <Image
                            src='http://121.5.150.116/dist/douchy-imgs/item/g1.png'
                            mode='widthFix'
                            className='detail-img'
                          />
                          <Image
                            src='http://121.5.150.116/dist/douchy-imgs/item/g2.png'
                            mode='widthFix'
                            className='detail-img default-footer-img'
                          />
                        </>
                      )}
                    </ScrollView>
                  </View>
                  <View className='detail'>
                    <View className='detail-title'>????????????</View>
                    <View className='detail-content process-content'>
                      <View>DouchySandquist ????????????????????????????????????????????????????????????????????????</View>
                    </View>
                    <View className='detail-content process-content'>
                      <View className='process-item'>
                        <Text className='gloden process-item-first'>??????</Text>
                        {process &&
                          process.map((item, index) => {
                            return (
                              <Text key={index}>
                                <Text className='golden'>{item}</Text>
                                <Text>{index !== process.length - 1 && '-'}</Text>
                              </Text>
                            )
                          })}
                      </View>
                      <View className='process-item'>
                        {process2 &&
                          process2.map((item, index) => {
                            return (
                              <Text key={index}>
                                <Text>-</Text>
                                <Text className='golden'>{item}</Text>
                              </Text>
                            )
                          })}
                      </View>
                      <View className='process-item'>
                        {process3 &&
                          process3.map((item, index) => {
                            return (
                              <Text key={index}>
                                <Text>-</Text>
                                <Text className='golden'>{item}</Text>
                              </Text>
                            )
                          })}
                      </View>
                      <View className='process-info'>
                        {process4 &&
                          process4.map((item) => {
                            return (
                              <View key={item.icon} className='process-info__item'>
                                <Image
                                  src={item.icon}
                                  mode='widthFix'
                                  className='process-info__item-img'
                                />
                              </View>
                            )
                          })}
                      </View>
                    </View>
                  </View>
                  <View className='detail'>
                    <View className='detail-title golden'>????????????</View>
                    <View className='detail-content'>
                      <View>
                        ????????????????????????????????????????????????????????????????????????????????????????????????
                        ??????????????????????????????????????????
                      </View>
                    </View>
                  </View>
                  <View className='detail'>
                    <View className='detail-title golden'>????????????</View>
                    <View className='detail-content maintain-content'>
                      {maintain &&
                        maintain.map((item, index) => {
                          return (
                            <View key={index}>
                              {index + 1}:{item}
                            </View>
                          )
                        })}
                    </View>
                  </View>
                  <View className='detail'>
                    <View className='detail-title golden'>????????????</View>
                    <View className='detail-content invoice-content'>
                      <View>??????????????????</View>
                      <View>??????????????????????????????????????????</View>
                      <View>?????????????????????DouchySandquist??????</View>
                    </View>
                  </View>
                </View>
                <View className='wish-plate'>
                  <WishPlate />
                </View>

                {/* <View className='nav'>
                  <View className='nav-title'>
                    {navList &&
                      navList.map((item, index) => {
                        return (
                          <View
                            key={item.name}
                            className={`nav-title__item ${index === curNav && 'active-item'}`}
                            onClick={this.onSelectNav(index)}
                          >
                            {item.name}
                          </View>
                        )
                      })}
                  </View>
                  <View className='nav-content'>
                    <ScrollView scrollX enableFlex className='nav-content__goods'>
                      {goodsList &&
                        goodsList.map((goods) => {
                          return (
                            <View
                              key={goods.pic}
                              className='nav-content__item'
                              onClick={this.onJumpToDetail}
                            >
                              <Image
                                src={goods.pic}
                                mode='aspectFit'
                                className='nav-content__item-img'
                              />
                              <Image
                                src={LikeLogo}
                                mode='aspectFit'
                                className='nav-content__item-icon'
                              />
                            </View>
                          )
                        })}
                    </ScrollView>
                    <Image src={MoreIcon} mode='aspectFit' className='nav-content__more' />
                  </View>
                </View> */}
                <View className='shelves'>
                  <View className='shelves-title'>??????????????????</View>
                  <View className='shelves-content'>
                    {goodsList2 &&
                      goodsList2.map((goods) => {
                        return (
                          <GoodsItem key={goods.pic} info={goods} onClick={this.onJumpToDetail} />
                        )
                      })}
                  </View>
                  <View className='more'>
                    <View className='more-btn' onClick={this.onJumpToCate}>
                      ????????????
                    </View>
                  </View>
                </View>
              </View>
            </CSSTransition>
            <CSSTransition in={showEffect} timeout={0} classNames='effect-bottom'>
              <View className='bottom'>
                <View className='bottom-goods'>
                  {imgList &&
                    imgList.map((item, index) => {
                      return (
                        <View
                          key={item}
                          className={`bottom-goods__item ${this.handleClass(index)}`}
                        >
                          <View>{item.name}</View>
                          <View>Dark Goddess</View>
                          <View>???????????????????????????</View>
                        </View>
                      )
                    })}
                </View>
                <View className='bottom-content'>
                  <Image src={icon.bottomCir} mode='widthFix' className='bottom-bg' />
                  <Image src={icon.bottomLogo} mode='aspectFit' className='bottom-logo' />
                </View>
              </View>
            </CSSTransition>
          </View>
        </ScrollView>
        <Footer
          onTry={() => this.handleNext('try', 0)}
          onCustom={() => this.handleNext('custom', 0)}
        />
        {showPopup && (
          <Mask onClose={this.closePopup}>
            {popupType === 'coupon' && (
              <View className='popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='popup-content'>
                  <Image src={Couponbg} mode='widthFix' className='popup-coupon' />
                  <Image src={Couponbg} mode='widthFix' className='popup-coupon' />
                </View>
                <View className='popup-btn'>
                  <Image src={LogoGolden} mode='widthFix' className='popup-btn__icon' />
                  <View>?????????????????????</View>
                </View>
              </View>
            )}
            {popupType === 'full' && (
              <View className='popup full-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='popup-content'>
                  <View className='popup-content__title'>??????</View>
                  <View className='popup-content__desc'>?????????5000??????200???</View>
                  <View className='popup-content__desc'>?????????3000??????100???</View>
                </View>
              </View>
            )}
            {popupType === 'attr' && (
              <View className='popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='popup-content'>
                  <View className='popup-content__title'>??????</View>
                  <View className='popup-content__desc'>
                    ????????????????????????????????????????????????????????? ????????????????????????????????????????????????
                    ???????????????????????????????????????????????????????????? Douchy Sandquist ??????????????????????????????
                    ????????????
                  </View>
                </View>
              </View>
            )}
            {popupType === 'param' && (
              <View className='popup param-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='popup-content'>
                  <View className='popup-content__title'>??????</View>
                  <View className='popup-content__desc'>?????? ???Douchy Sandquist</View>
                  <View className='popup-content__desc'>????????? ?????????</View>
                  <View className='popup-content__desc'>?????????????????????</View>
                  <View className='popup-content__desc'>??????????????????</View>
                  <View className='popup-content__desc'>?????????Dark Goddess</View>
                  <View className='popup-content__desc'>??????????????????</View>
                </View>
              </View>
            )}
            {popupType === 'free' && (
              <View className='popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.popuplogo} mode='widthFix' className='popup-logo' />
                <View className='popup-content'>
                  <View className='popup-content__title'>??????????????????????????????</View>
                  <View className='popup-content__info'>
                    Douchy Sandquist ????????????????????? vip????????????????????????????????????????????? ??????????????????
                    <Text className='golden'>????????????</Text>
                    ?????????????????? ??????????????????????????????????????????????????? ???????????????????????????????????????
                  </View>
                </View>
              </View>
            )}
            {popupType === 'vip' && (
              <View className='popup vip-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.popuplogo} mode='widthFix' className='popup-logo' />
                <View className='popup-more'>
                  <View className='at-icon at-icon-chevron-right'></View>
                </View>
                <View className='popup-content'>
                  <View className='popup-content__title'>vip????????????</View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>????????????</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>????????????</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>????????????</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>????????????</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>????????????</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                </View>
              </View>
            )}
            {popupType === 'size' && (
              <View className='check-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='check-content'>
                  <View className='check-content__title'>
                    ???????????????<View className='check-content__title-info'>S???</View>
                  </View>
                  <View className='check-content__info'>
                    <View className='check-content__info-item'>?????????155cm-165cm</View>
                    <View className='check-content__info-item'>?????????46kg-50kg</View>
                  </View>
                  <View className='check-content__sel'>
                    <View className='check-content__sel-item'>38</View>
                    <View className='check-content__sel-item'>38</View>
                    <View className='check-content__sel-item'>38</View>
                    <View className='check-content__sel-item'>38</View>
                  </View>
                  <View className='check-content__btn' onClick={this.handleNext}>
                    ??????????????????
                  </View>
                  <View className='check-footer'>
                    <Image src={LogoGolden} mode='widthFix' className='check-footer__icon' />
                    <View>????????????????????????????????????????????????</View>
                  </View>
                </View>
              </View>
            )}
            {popupType === 'startDate' && (
              <View className='check-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='check-content'>
                  <View className='check-content__explain'>
                    ???????????????2021/8/14 ????????? 12:00-16:00
                  </View>
                  <View className='check-content__month'>8???</View>
                  <View className='check-content__date'>
                    {date.map((item, index) => {
                      return (
                        <View key={index} className='check-content__date-item'>
                          {index}
                        </View>
                      )
                    })}
                  </View>
                  <View className='check-content__time'>
                    <View className='check-content__time-item'>8:00-12:00</View>
                    <View className='check-content__time-item'>12:00-16:00</View>
                    <View className='check-content__time-item'>16:00-20:00</View>
                  </View>
                  <View className='check-content__explain'>
                    ????????????????????????????????? 2021/8/17 ????????? 18:00 ???
                  </View>
                  <View className='check-content__btn' onClick={this.handleNext}>
                    ???????????????????????????
                  </View>
                </View>
              </View>
            )}
            {popupType === 'refundDate' && (
              <View className='check-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='check-content'>
                  <View className='check-content__explain'>
                    ???????????????2021/8/14 ????????? 12:00-16:00
                  </View>
                  <View className='check-content__month'>8???</View>
                  <View className='check-content__date'>
                    {date.map((item, index) => {
                      return (
                        <View key={index} className='check-content__date-item'>
                          {index}
                        </View>
                      )
                    })}
                  </View>
                  <View className='check-content__time'>
                    <View className='check-content__time-item'>8:00-12:00</View>
                    <View className='check-content__time-item'>12:00-16:00</View>
                    <View className='check-content__time-item'>16:00-20:00</View>
                  </View>
                  <View className='check-content__explain'>
                    ????????????????????????????????? 2021/8/17 ????????? 18:00 ???
                  </View>
                  <View className='check-content__btn' onClick={this.handleNext}>
                    ???????????????????????????
                  </View>
                </View>
              </View>
            )}
            {popupType === 'dateConfirm' && (
              <View className='check-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='confirm-content'>
                  <View className='confirm-title'>???????????????????????????</View>
                  <View className='confirm-date'>
                    ??????????????? 2021/8/14 ????????? 12:00-16:00
                    <View className='at-icon at-icon-chevron-right'></View>
                  </View>
                  <View className='confirm-date'>
                    ??????????????? 2021/8/17 ????????? 16:00-20:00
                    <View className='at-icon at-icon-chevron-right'></View>
                  </View>
                  <View className='check-content__btn' onClick={this.handleNext}>
                    ???????????????????????????
                  </View>
                </View>
              </View>
            )}
            {popupType === 'addressConfirm' && (
              <View className='check-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='address-list'>
                  <View className='list-item' onClick={this.onJumpToAddress('recive')}>
                    <View className='list-item__top'>
                      <View>????????????</View>
                    </View>
                    <View className='list-item__info'>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>??????:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>?????????:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>??????:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>????????????:</View>
                        <View>xxx</View>
                      </View>
                    </View>
                    <View className='list-item__more'>
                      <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                  </View>
                  <View className='list-item' onClick={this.onJumpToAddress('take')}>
                    <View className='list-item__top'>
                      <View>????????????</View>
                    </View>
                    <View className='list-item__info'>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>??????:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>?????????:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>??????:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>????????????:</View>
                        <View>xxx</View>
                      </View>
                    </View>
                    <View className='list-item__more'>
                      <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                  </View>
                  <View className='address-content__btn' onClick={this.onJumpToCart}>
                    ????????????
                  </View>
                </View>
              </View>
            )}
            {popupType === 'explain' && (
              <View className='check-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                {/* <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' /> */}
                <View className='explain-title'>????????????</View>
                <ScrollView scrollY className='explain-scroll'>
                  <View>
                    ??????????????????????????????????????????????????? i ?????????????????????????????????????????????????????????
                    ????????????????????????????????????????????????????????? ??????????????????????????????????????????????????? i
                    ????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????
                    ??????????????????????????????????????????????????? i ?????????????????????????????????????????????????????????
                    ????????????????????????????????????????????????????????? ??????????????????????????????????????????????????? i
                    ????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????
                    ??????????????????????????????????????????????????? i ?????????????????????????????????????????????????????????
                    ????????????????????????????????????????????????????????? ??????????????????????????????????????????????????? i
                    ????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????
                  </View>
                </ScrollView>
                <View className='explain-confirm'>
                  <View className='explain-confirm__check' onClick={this.handleNext}></View>
                  <View>?????????????????????????????????????????????</View>
                </View>
              </View>
            )}
            {popupType === 'study' && (
              <Swiper className='study-swiper'>
                {studyProgress &&
                  studyProgress.map((item, index) => {
                    return (
                      <SwiperItem key={item.type}>
                        <View
                          style={{ backgroundImage: 'url(' + item.bg + ')' }}
                          className='check-popup study-popup'
                        >
                          <Image
                            src={icon.popupVipClose}
                            className='popup-close'
                            onClick={this.closePopup}
                          />
                          {index == 1 &&
                            stepList &&
                            stepList.map((st, idx) => {
                              return (
                                <View key={st.name} style={st.style} className='study-step'>
                                  <View>step{idx + 1}</View>
                                  <View className='study-step__name'>{st.name}</View>
                                </View>
                              )
                            })}
                          {index != 7 && <Image src={NextStep} className='study-next-arrow' />}

                          {index == 0 && (
                            <Image src={icon.studyarrow1} className='study-circle-arrow' />
                          )}
                          {index == 1 && <Image src={icon.studystar} className='study-star' />}
                          {index == 7 && (
                            <Image
                              src={icon.studybtn}
                              mode='widthFix'
                              className='study-btn'
                              onClick={this.handleNext}
                            />
                          )}
                        </View>
                      </SwiperItem>
                    )
                  })}
              </Swiper>
            )}
          </Mask>
        )}
      </View>
    )
  }
}

export default itemDetail
