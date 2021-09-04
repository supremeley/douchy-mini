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
      '清除口袋内物品。回家后，立即换下衣服，取出口袋内物品，如让口袋内添满东西而吊挂着，衣服可能会变形，影响美观。',
      '经常清刷。尘污会使服装失去清新感，需要使用刷子轻轻刷去尘土，如若沾上其他的纤维或较不容易除去的尘埃，可以使用胶带纸加以吸附，效果卓越。',
      '简易除皱。久坐或久放衣橱的服装，可挂在稍有湿度的地方，有利于服装纤维恢复疲劳，但湿度过大会影响服装定型效果，一般毛料质地的服装在相对湿度为35%-40%环境中放置一晚，可去除衣服皱纹。',
      '如若条件允许，可使用衣架悬挂。吊挂衣架上装最好是木质或塑胶的宽柄圆弧衣架，半裙或是裤装吊挂可用带夹子的西裤专用衣架，将裤线对齐，夹住裤脚，倒挂起来。'
    ],
    process: ['免费试衣', '阅读确认客户试衣须知', '选择试衣尺码', '预约发货时间'],
    process2: [
      '预约退货时间',
      '确定时间',
      '输入收件人联系方式地址',
      '付款',
      '等待发货',
      '确认收货'
    ],
    process3: ['试衣体验', '等待快递上门取件退货', '商家确认退货', '24小时极速退款'],
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
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/3.png',
        price: '1,680',
        id: 1
      },
      {
        name: 'DouchySandquist不规则蕾丝拼接吊带',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '3,680',
        id: 2
      }
    ],
    goodsList2: [
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
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '3,680',
        id: 2
      },
      {
        name: 'DouchySandquist不规则蕾丝拼接吊带',
        pic: 'http://121.5.150.116/dist/douchy-imgs/goods/4.png',
        price: '3,680',
        id: 2
      }
    ],
    // navList: [
    //   {
    //     name: '猜你喜欢'
    //   },
    //   {
    //     name: '最近浏览'
    //   }
    // ],
    // curNav: 0,
    showEffect: false,
    currentSwiper: 0,
    currentShow: 1,
    eStart: 0,
    scrollIntoView: null, // 滚动元素
    showDetail: true, // 商详是否打开
    detailScroll: false, // 商详是否可以滚动
    isScrollEnd: false, // 商详是否触顶
    isScrollTop: false, // 商详是否触底
    isSticky: true, // 是否贴顶
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
        name: '确定尺码',
        style: { top: '55px', left: '60px' }
      },
      {
        name: '确定并预约发货日期',
        style: { top: '80px', left: '155px' }
      },
      {
        name: '确定并预约退货日期',
        style: { top: '115px', left: '130px' }
      },
      {
        name: '确定时间',
        style: { top: '150px', left: '60px' }
      },
      {
        name: '确定派送地址及取件地址',
        style: { top: '185px', left: '100px' }
      },
      {
        name: '确认订单结算',
        style: { top: '220px', left: '130px' }
      },
      {
        name: '等待发货',
        style: { top: '245px', left: '60px' }
      },
      {
        name: '确认收货',
        style: { top: '290px', left: '60px' }
      },
      {
        name: '试衣体验',
        style: { top: '310px', left: '130px' }
      },
      {
        name: '等待快递上门取件退货',
        style: { top: '350px', left: '60px' }
      },
      {
        name: '商家确认退货',
        style: { top: '390px', left: '60px' }
      },
      {
        name: '24小时急速退款',
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
                  <View className='plate-detail__price'>¥ 2,880.00</View>
                  <View className='plate-detail__title'>
                    DouchySandquist Dark Goddess
                    <View className='plate-detail__title-zh'>荡领开叉连衣裙</View>
                  </View>
                  <View className='plate-detail__desc'>
                    大气的轻职场版型设计，这款连衣裙如此简约高级。具有包容一切充满
                    张力的黑，糅合醋酸的高级质感，呈现的自然褶皱如此独特别致。高级
                    感和轻松自然完美结合。上身质感舒适垂顺，优雅知性。
                  </View>
                  <View className='plate-cart'>
                    <Image src={LogoCircle} className='plate-cart__icon' />
                    加入购物车
                  </View>
                </View>
                <View className='plate'>
                  <View className='info top-info'>
                    <View className='info-title'>优惠券</View>
                    <View className='info-detail'>
                      <View className='info-detail__item'>￥100</View>
                      <View className='info-detail__item'>￥200</View>
                    </View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('coupon')}
                    ></View>
                  </View>
                  <View className='info action-info'>
                    <View className='info-title'>活动</View>
                    <View className='info-tag'>满减</View>
                    <View className='info-content'>
                      <View className='info-content__item'>全场满5000立减200，</View>
                      <View className='info-content__item'>全场满3000立减100，</View>
                    </View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('full')}
                    ></View>
                  </View>
                </View>
                <View className='plate'>
                  <View className='info top-info'>
                    <View className='info-title'>属性</View>
                    <View className='info-explain'>该商品属于轻定制商品</View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('attr')}
                    ></View>
                  </View>
                  <View className='info bottom-info'>
                    <View className='info-title'>参数</View>
                    <View className='info-explain'>
                      品牌 ：Douchy Sandquist；材质： 三醋酸；运费：包邮
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
                      <View className='info-brand__title'>DouchySandquist 时装</View>
                      <View className='info-brand__tag'>企业认证</View>
                    </View>
                    <View className='info-brand__more' onClick={this.onJumpToCate}>
                      进店逛逛
                    </View>
                  </View>
                </View>
                <View
                  className={`plate service-plate ${showDetail && 'sticky-service'}`}
                  onTouchStart={this.openContainerSwiper}
                >
                  <View className='info'>
                    <Image src={LogoCircle} mode='aspectFill' className='info-icon' />
                    <View className='info-explain'>免费顺丰包邮预约试衣</View>
                    <View
                      className='at-icon at-icon-chevron-right'
                      onClick={() => this.openPopup('free')}
                    ></View>
                  </View>
                  <View className='info'>
                    <Image src={LogoCircle} mode='aspectFill' className='info-icon' />
                    <View className='info-explain'>轻定制10个工作日极速发货</View>
                  </View>
                  <View className='info'>
                    <Image src={LogoCircle} mode='aspectFill' className='info-icon' />
                    <View className='info-explain'>到货后30天包修整</View>
                  </View>
                  <View className='info'>
                    <Image src={LogoCircle} mode='aspectFill' className='info-icon' />
                    <View className='info-explain'>vip会员权益</View>
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
                    <View className='detail-title'>商品详情</View>
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
                    <View className='detail-title'>试衣流程</View>
                    <View className='detail-content process-content'>
                      <View>DouchySandquist 给每一位客户提供首次新款单品顺丰免费包邮试衣体验</View>
                    </View>
                    <View className='detail-content process-content'>
                      <View className='process-item'>
                        <Text className='gloden process-item-first'>点击</Text>
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
                    <View className='detail-title golden'>关于色差</View>
                    <View className='detail-content'>
                      <View>
                        由于服装材质或显示器成像不同可能导致图片与实物存在一定差别，最终
                        颜色以您收到的实际商品为准。
                      </View>
                    </View>
                  </View>
                  <View className='detail'>
                    <View className='detail-title golden'>保养方式</View>
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
                    <View className='detail-title golden'>发票信息</View>
                    <View className='detail-content invoice-content'>
                      <View>如需开具发票</View>
                      <View>请“确认收货”后联系在线客服</View>
                      <View>发票快递费用由DouchySandquist承担</View>
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
                  <View className='shelves-title'>更多精选商品</View>
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
                      进店逛逛
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
                          <View>蕾丝束胸开叉连衣裙</View>
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
                  <View>点击领取优惠券</View>
                </View>
              </View>
            )}
            {popupType === 'full' && (
              <View className='popup full-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='popup-content'>
                  <View className='popup-content__title'>满减</View>
                  <View className='popup-content__desc'>全场满5000立减200，</View>
                  <View className='popup-content__desc'>全场满3000立减100，</View>
                </View>
              </View>
            )}
            {popupType === 'attr' && (
              <View className='popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' />
                <View className='popup-content'>
                  <View className='popup-content__title'>属性</View>
                  <View className='popup-content__desc'>
                    该商品属于轻定制商品，根据您的身材数据 自动匹配固定尺码成衣并进行调整。
                    特殊身材无法匹配的，可联系您的专属客服。 Douchy Sandquist 将根据您的身材数据单
                    独制作。
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
                  <View className='popup-content__title'>参数</View>
                  <View className='popup-content__desc'>品牌 ：Douchy Sandquist</View>
                  <View className='popup-content__desc'>材质： 三醋酸</View>
                  <View className='popup-content__desc'>运费：顺丰包邮</View>
                  <View className='popup-content__desc'>款式：连衣裙</View>
                  <View className='popup-content__desc'>系列：Dark Goddess</View>
                  <View className='popup-content__desc'>季节：春夏秋</View>
                </View>
              </View>
            )}
            {popupType === 'free' && (
              <View className='popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                <Image src={icon.popuplogo} mode='widthFix' className='popup-logo' />
                <View className='popup-content'>
                  <View className='popup-content__title'>免费顺丰包邮预约试衣</View>
                  <View className='popup-content__info'>
                    Douchy Sandquist 为每一位尊贵的 vip客户提供新品每款各一次的免费试 衣服务。点击
                    <Text className='golden'>免费试衣</Text>
                    ，即刻预约， 享受顺丰包邮送样衣到家，试衣服务。 更有专属客服为您贴心服务。
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
                  <View className='popup-content__title'>vip会员权益</View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>初级会员</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>初级会员</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>初级会员</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>初级会员</View>
                      <View className='popup-content__item-desc'>Primary member</View>
                    </View>
                  </View>
                  <View className='popup-content__item'>
                    <Image src={LogoCircle} className='popup-content__item-icon' />
                    <View className='popup-content__item-info'>
                      <View className='popup-content__item-title'>初级会员</View>
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
                    尺码选择：<View className='check-content__title-info'>S码</View>
                  </View>
                  <View className='check-content__info'>
                    <View className='check-content__info-item'>身高：155cm-165cm</View>
                    <View className='check-content__info-item'>体重：46kg-50kg</View>
                  </View>
                  <View className='check-content__sel'>
                    <View className='check-content__sel-item'>38</View>
                    <View className='check-content__sel-item'>38</View>
                    <View className='check-content__sel-item'>38</View>
                    <View className='check-content__sel-item'>38</View>
                  </View>
                  <View className='check-content__btn' onClick={this.handleNext}>
                    确定试衣尺码
                  </View>
                  <View className='check-footer'>
                    <Image src={LogoGolden} mode='widthFix' className='check-footer__icon' />
                    <View>如未有合适的尺码能选择请联系客服</View>
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
                    发货时间：2021/8/14 星期六 12:00-16:00
                  </View>
                  <View className='check-content__month'>8月</View>
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
                    预计快递上门配送时间： 2021/8/17 星期二 18:00 前
                  </View>
                  <View className='check-content__btn' onClick={this.handleNext}>
                    确定并预约退货日期
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
                    退货时间：2021/8/14 星期六 12:00-16:00
                  </View>
                  <View className='check-content__month'>8月</View>
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
                    预计快递上门配送时间： 2021/8/17 星期二 18:00 前
                  </View>
                  <View className='check-content__btn' onClick={this.handleNext}>
                    确定发货及退货日期
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
                  <View className='confirm-title'>确定发货及退货时间</View>
                  <View className='confirm-date'>
                    发货时间： 2021/8/14 星期六 12:00-16:00
                    <View className='at-icon at-icon-chevron-right'></View>
                  </View>
                  <View className='confirm-date'>
                    退货时间： 2021/8/17 星期二 16:00-20:00
                    <View className='at-icon at-icon-chevron-right'></View>
                  </View>
                  <View className='check-content__btn' onClick={this.handleNext}>
                    确定并预约退货日期
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
                      <View>收货地址</View>
                    </View>
                    <View className='list-item__info'>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>姓名:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>手机号:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>城市:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>详细地址:</View>
                        <View>xxx</View>
                      </View>
                    </View>
                    <View className='list-item__more'>
                      <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                  </View>
                  <View className='list-item' onClick={this.onJumpToAddress('take')}>
                    <View className='list-item__top'>
                      <View>取件地址</View>
                    </View>
                    <View className='list-item__info'>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>姓名:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>手机号:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>城市:</View>
                        <View>xxx</View>
                      </View>
                      <View className='list-item__info-item'>
                        <View className='list-item__info-item__name'>详细地址:</View>
                        <View>xxx</View>
                      </View>
                    </View>
                    <View className='list-item__more'>
                      <View className='at-icon at-icon-chevron-right'></View>
                    </View>
                  </View>
                  <View className='address-content__btn' onClick={this.onJumpToCart}>
                    确定地址
                  </View>
                </View>
              </View>
            )}
            {popupType === 'explain' && (
              <View className='check-popup'>
                <Image src={icon.popupVipClose} className='popup-close' onClick={this.closePopup} />
                <Image src={LogoCircle} className='circle-logo' />
                {/* <Image src={icon.logoBlack} mode='widthFix' className='popup-logo' /> */}
                <View className='explain-title'>试衣须知</View>
                <ScrollView scrollY className='explain-scroll'>
                  <View>
                    还发好人卡会更好更健康合理的规划给 i 交话费哈噶好地方客户反馈和罚款和联合国
                    可结果还发了还发了回来看法赫卡里发货哈 还发好人卡会更好更健康合理的规划给 i
                    交话费哈噶好地方客户反馈和罚款和联合国 可结果还发了还发了回来看法赫卡里发货哈
                    还发好人卡会更好更健康合理的规划给 i 交话费哈噶好地方客户反馈和罚款和联合国
                    可结果还发了还发了回来看法赫卡里发货哈 还发好人卡会更好更健康合理的规划给 i
                    交话费哈噶好地方客户反馈和罚款和联合国 可结果还发了还发了回来看法赫卡里发货哈
                    还发好人卡会更好更健康合理的规划给 i 交话费哈噶好地方客户反馈和罚款和联合国
                    可结果还发了还发了回来看法赫卡里发货哈 还发好人卡会更好更健康合理的规划给 i
                    交话费哈噶好地方客户反馈和罚款和联合国 可结果还发了还发了回来看法赫卡里发货哈
                  </View>
                </ScrollView>
                <View className='explain-confirm'>
                  <View className='explain-confirm__check' onClick={this.handleNext}></View>
                  <View>阅读并同意《试衣须知契约条款》</View>
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
