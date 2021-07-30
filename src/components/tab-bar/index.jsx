import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import { connect } from 'react-redux'
import { setCurrentTab } from '@/actions/counter'

import HomeIcon from '@/assets/imgs/tab-bar/home.png'
import HomeActiveIcon from '@/assets/imgs/tab-bar/home-active.png'
import CateIcon from '@/assets/imgs/tab-bar/cate.png'
import CateActiveIcon from '@/assets/imgs/tab-bar/cate-active.png'
import CartIcon from '@/assets/imgs/tab-bar/cart.png'
import CartActiveIcon from '@/assets/imgs/tab-bar/cart-active.png'
import CenterIcon from '@/assets/imgs/tab-bar/center.png'
import CenterActiveIcon from '@/assets/imgs/tab-bar/center-active.png'

import './index.scss'

@connect(
  ({ counter }) => ({
    current: counter.currentTab
  }),
  (dispatch) => ({
    setCurrentTab: (current) => dispatch(setCurrentTab(current))
  })
)
class Footer extends Component {
  state = {
    // current: 0,
    navList: [
      {
        text: '首页',
        pagePath: '/pages/home/index',
        iconPath: HomeIcon,
        selectedIconPath: HomeActiveIcon,
        urlRedirect: true
      },
      {
        text: '分类',
        pagePath: '/pages/categroy/index',
        iconPath: CateIcon,
        selectedIconPath: CateActiveIcon,
        urlRedirect: true
      },
      {
        text: '购物车',
        pagePath: '/pages/cart/index',
        iconPath: CartIcon,
        selectedIconPath: CartActiveIcon,
        urlRedirect: true
      },
      {
        text: '会员',
        pagePath: '/pages/center/index',
        iconPath: CenterIcon,
        selectedIconPath: CenterActiveIcon,
        urlRedirect: true
      }
    ]
  }

  jumpToPage = (index) => () => {
    if (index !== this.props.current) {
      const { navList } = this.state

      const curNav = navList[index]

      this.props.setCurrentTab(index)

      if (curNav.urlRedirect) {
        Taro.redirectTo({ url: curNav.pagePath })
      } else {
        Taro.navigateTo({ url: curNav.pagePath })
      }
    }
  }

  render() {
    const { current } = this.props
    const { navList } = this.state

    const NavList = navList.map((item, index) => {
      return (
        <View key={item.text} className='footer-item' onClick={this.jumpToPage(index)}>
          <Image
            src={current === index ? item.selectedIconPath : item.iconPath}
            className='footer-item__icon'
          />
        </View>
      )
    })

    return <View className='footer-container'>{NavList}</View>
  }
}

export default Footer
