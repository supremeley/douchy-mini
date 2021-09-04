import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, ScrollView } from '@tarojs/components'

import MoreIcon from '@/assets/imgs/more.png'
import LikeLogo from '@/assets/imgs/item/like.png'

import './index.scss'

class WishPalte extends Component {
  defaultProps = {
    info: null,
    onClick: () => {}
  }

  state = {
    navList: [
      {
        name: '猜你喜欢'
      },
      {
        name: '最近浏览'
      }
    ],
    curNav: 0,
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
    ]
  }

  handleClick = () => {
    const { onClick, info } = this.props

    onClick && onClick(info.id)
  }

  onSelectNav = (index) => () => {
    this.setState({ curNav: index })
  }

  render() {
    // const { info } = this.props

    // if (!info) return null

    const { navList, curNav, goodsList } = this.state

    return (
      <View className='wish-container'>
        <View className='wish-title'>
          {navList &&
            navList.map((item, index) => {
              return (
                <View
                  key={item.name}
                  className={`wish-title__item ${index === curNav && 'active-item'}`}
                  onClick={this.onSelectNav(index)}
                >
                  {item.name}
                </View>
              )
            })}
        </View>
        <View className='wish-content'>
          <ScrollView scrollX enableFlex className='wish-content__goods'>
            {goodsList &&
              goodsList.map((goods) => {
                return (
                  <View key={goods.pic} className='wish-content__item' onClick={this.onJumpToDetail}>
                    <Image src={goods.pic} mode='aspectFit' className='wish-content__item-img' />
                    <Image src={LikeLogo} mode='aspectFit' className='wish-content__item-icon' />
                  </View>
                )
              })}
          </ScrollView>
          <Image src={MoreIcon} mode='aspectFit' className='wish-content__more' />
        </View>
      </View>
    )
  }
}

export default WishPalte
