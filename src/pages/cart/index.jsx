import Taro, { getCurrentPages } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
import Default from '@/components/default'
import Tabbar from '@/components/tab-bar'

// import t1 from '@/assets/imgs/home/bg1.jpg'
// import t2 from '@/assets/imgs/home/bg2.jpg'
// import t3 from '@/assets/imgs/home/bg3.jpg'
// import t4 from '@/assets/imgs/home/bg4.jpg'

import 'taro-ui/dist/style/components/icon.scss'

import Footer from './components/footer'

import './index.scss'

class Cart extends Component {
  state = {
    navList: [
      {
        name: '免费试衣'
      },
      {
        name: '立即定制'
      }
    ],
    curNav: 0,
    goodsList: [
      {
        name: 'DouchySandquist不规则蕾丝拼接吊带',
        pic: 'http://121.5.150.116/dist/douchy-imgs/item/g1.png',
        price: '1,680',
        priceNumber: 1680,
        id: 1,
        selected: false,
        number: 1
      },
      {
        name: 'DouchySandquist不规则蕾丝拼接吊带',
        pic: 'http://121.5.150.116/dist/douchy-imgs/item/g1.png',
        price: '3,680',
        priceNumber: 3680,
        id: 2,
        selected: false,
        number: 1
      }
    ]
  }

  componentDidShow() {
    // console.log(.getTabBar())
    // const page = getCurrentPages()[0]
    // if (typeof page.getTabBar === 'function' && page.getTabBar()) {
    //   page.getTabBar().setData({
    //     selected: 2
    //   })
    // }
  }

  onJump = () => {
    Taro.navigateTo({ url: `/pages/checkout/index` })
  }

  onJumpToAllSeries = () => {
    Taro.navigateTo({ url: `/pages/series/all/index` })
  }

  onJumpToAddress = () => {
    Taro.navigateTo({ url: `/pages/member/address/list/index?type=select` })
  }

  onSelectNav = (index) => () => {
    this.setState({ curNav: index })
  }

  selectGoods = (index) => () => {
    const { goodsList } = this.state

    let gl = goodsList.concat()

    gl[index].selected = !goodsList[index].selected

    this.setState({ goodsList: gl })
  }

  selectAllGoods = () => {
    const { goodsList } = this.state

    const list = goodsList.map((item) => {
      return {
        ...item,
        selected: !this.allSelected
      }
    })

    this.setState({ goodsList: list })
  }

  deleteGoods = (e, index) => {
    e.stopPropagation()

    const { goodsList } = this.state

    let gl = goodsList.concat()

    gl.splice(index, 1)

    this.setState({ goodsList: gl })
  }

  handleChange = (e, index, type) => {
    e.stopPropagation()

    const { goodsList } = this.state

    if (type === 'add') {
      goodsList[index].num++
    }

    if (type === 'minus') {
      goodsList[index].num--
    }

    this.setState({ goodsList })
  }

  get allSelected() {
    const { goodsList } = this.state

    if (!goodsList.length) return false

    let allSelected = goodsList.every((item) => item.selected)

    return allSelected
  }

  get selectedGoods() {
    const { goodsList } = this.state

    let selectedList = goodsList.filter((item) => item.selected)

    return selectedList
  }

  get selectedNum() {
    return this.selectedGoods.length
  }

  get selectedPrice() {
    return this.selectedGoods.reduce((val, item) => {
      // console.log()
      return val + Number(item.priceNumber)
    }, 0)
  }

  render() {
    const { navList, curNav, goodsList } = this.state

    const GoodsList =
      goodsList &&
      goodsList.map((item, index) => {
        return (
          <View key={item.url} className='goods-item' onClick={this.selectGoods(index)}>
            <View className={`circle ${item.selected && 'active'}`}>
              <View className='at-icon at-icon-check'></View>
            </View>
            <Image src={item.pic} mode='aspectFill' className='goods-item__img' />
            <View className='goods-item__info'>
              <View className='goods-item__info-name'>{item.name}</View>
              <View className='goods-item__info-size'>38</View>
              <View className='goods-item__info-bottom'>
                <View className='goods-item__info-bottom__price'>￥{item.price}</View>
                <View className='goods-item__info-bottom__num'>数量{item.number}</View>
              </View>
            </View>
            <View
              className='at-icon at-icon-close'
              onClick={(e) => this.deleteGoods(e, index)}
            ></View>
          </View>
        )
      })

    return (
      <View className='cart'>
        <View className='nav'>
          {navList &&
            navList.map((item, index) => {
              return (
                <View
                  key={item.name}
                  className={`nav-item ${index === curNav && 'active-item'}`}
                  onClick={this.onSelectNav(index)}
                >
                  {item.name}
                </View>
              )
            })}
        </View>
        <View className='content'>
          {goodsList.length > 0 ? (
            GoodsList
          ) : (
            <View className='default'>
              <Default msg='购物车空空如也' explain='快去逛逛吧~' />
            </View>
          )}
        </View>
        <Footer
          total={this.selectedPrice}
          allSelected={this.allSelected}
          onSelectAll={this.selectAllGoods}
          onClickLook={this.onJumpToAllSeries}
          onCheckout={this.onJumpToAddress}
        />
        <Tabbar />
      </View>
    )
  }
}

export default Cart
