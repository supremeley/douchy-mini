import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'
import Tabbar from '@/components/tab-bar'

import { CSSTransition } from 'react-transition-group'

import LogoIcon from '@/assets/imgs/center/logo.png'
import CenterBg from '@/assets/imgs/center/bg.png'
import QrcodeIcon from '@/assets/imgs/center/qrcode.png'

import PaidIcon from '@/assets/imgs/center/paid.png'
import ReceivedIcon from '@/assets/imgs/center/received.png'
import PayIcon from '@/assets/imgs/center/pay.png'
import RefundIcon from '@/assets/imgs/center/refund.png'
import SiezeIcon from '@/assets/imgs/center/size.png'
import TryIcon from '@/assets/imgs/center/try.png'
import CustonizedIcon from '@/assets/imgs/center/customized.png'
import IntegralIcon from '@/assets/imgs/center/integral.png'

import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class Center extends Component {
  state = {
    showCard: false,
    showMenu: false,
    showCover: false,
    // eStart: 0,
    navList: [
      { icon: PaidIcon, status: 1, title: '待付款', path: '/pages/order/list/index?status=1' },
      { icon: ReceivedIcon, status: 2, title: '已付款', path: '/pages/order/list/index?status=2' },
      { icon: PayIcon, status: 3, title: '待收货', path: '/pages/order/list/index?status=3' },
      {
        icon: RefundIcon,
        status: 4,
        title: '售后服务',
        path: '/pages/order/refundList/index?status=5'
      }
    ],
    navList2: [
      { icon: SiezeIcon, status: 4, title: '我的尺寸', path: '/pages/member/size/list/index' },
      {
        icon: TryIcon,
        status: 4,
        title: '试衣进度',
        path: '/pages/order/progress/list/index?type=try'
      },
      {
        icon: CustonizedIcon,
        status: 4,
        title: '定制进度',
        path: '/pages/order/progress/list/index?type=custom'
      },
      { icon: IntegralIcon, status: 4, title: '我的积分' }
    ],
    menuList: [
      {
        path: '/pages/order/list/index?status=0',
        title: '我的全部订单'
      },
      {
        path: '/pages/member/wish/index',
        title: '心愿单'
      },
      {
        path: '/pages/member/address/list/index',
        title: '地址簿'
      },
      {
        path: '/',
        title: '我的卡券'
      },
      // {
      //   path: '/',
      //   title: '设置'
      // },
      {
        path: '/',
        title: '在线客服'
      }
    ]
    // card: {
    //   vip4: 'http://121.5.150.116/dist/douchy-imgs/center/vip4-card.png'
    // }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showCard: true })
    }, 500)

    setTimeout(() => {
      this.setState({ showCover: true })
    }, 1500)
  }

  onJump = (url) => () => {
    Taro.navigateTo({ url })
  }

  onJumpToInterests = () => {
    Taro.navigateTo({ url: '/pages/member/interests/index' })
  }

  handelScroll = () => {
    const { showMenu } = this.state

    const query = Taro.createSelectorQuery()

    const selector = query.selectAll(`.effect-down`).boundingClientRect()

    selector.exec((res) => {
      const arr = res[0]
      // console.log(arr, 'resres')
      if (arr[0].top <= 600) {
        if (!showMenu) this.setState({ showMenu: true })
      } else {
        if (showMenu) this.setState({ showMenu: false })
      }
    })
  }

  render() {
    const { showCard, showMenu, showCover, navList, navList2, menuList } = this.state

    return (
      <View className='center'>
        <Image src={LogoIcon} mode='aspectFit' className={`center-bg ${showCard && 'effect-bg'}`} />
        {showCover && <View className='bottom-cover'></View>}
        <ScrollView scrollY className='scroll-container' onScroll={this.handelScroll}>
          <CSSTransition in={showCard} timeout={0} classNames='effect-header'>
            <View className='effect-up'>
              <View className='user'>
                <Image mode='aspectFill' className='user-avatar' />
                <View className='user-name'>Douchy Sandquist 用户</View>
                <Image src={CenterBg} mode='widthFix' className='user-bg' />
              </View>
              <View className='content'>
                <CSSTransition in={showCard} timeout={500} classNames='effect-card'>
                  <View className='card'>
                    <View className='card-num'>No.0000 0000 000</View>
                    <Image src={QrcodeIcon} mode='widthFix' className='card-qrcode' />
                  </View>
                </CSSTransition>
                <View className='content-title'>
                  <View>会员权益</View>
                  <View className='content-title__more' onClick={this.onJumpToInterests}>
                    查看详情
                    <View className='at-icon at-icon-chevron-right'></View>
                  </View>
                </View>
                <CSSTransition in={showMenu} timeout={0} classNames='effect-menu'>
                  <View className='effect-down'>
                    <View className='nav'>
                      {navList &&
                        navList.map((item) => {
                          return (
                            <View
                              key={item.path}
                              className='nav-item'
                              onClick={this.onJump(item.path)}
                            >
                              <Image src={item.icon} mode='aspectFill' className='nav-item__icon' />
                              <View className='nav-item__title'>{item.title}</View>
                            </View>
                          )
                        })}
                    </View>
                    <View className='nav second-nav'>
                      {navList2 &&
                        navList2.map((item) => {
                          return (
                            <View
                              key={item.path}
                              className='nav-item'
                              onClick={this.onJump(item.path)}
                            >
                              <View className='nav-item__cover'>
                                <Image
                                  src={item.icon}
                                  mode='aspectFill'
                                  className='nav-item__icon'
                                />
                              </View>
                              <View className='nav-item__title'>{item.title}</View>
                            </View>
                          )
                        })}
                    </View>
                    <View className='menu'>
                      {menuList &&
                        menuList.map((item) => {
                          return (
                            <View
                              key={item.url}
                              className='menu-item'
                              onClick={this.onJump(item.path)}
                            >
                              <View>{item.title}</View>
                              <View className='at-icon at-icon-chevron-right'></View>
                            </View>
                          )
                        })}
                    </View>
                  </View>
                </CSSTransition>
              </View>
            </View>
          </CSSTransition>
        </ScrollView>
        <Tabbar />
      </View>
    )
  }
}

export default Center
