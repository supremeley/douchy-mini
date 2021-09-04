import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import SlidingWindow from '@/components/slidingWindow'

import './index.scss'

class Home extends Component {
  state = {
    plateList: [
      {
        titleIcon: 'http://121.5.150.116/dist/douchy-imgs/series/title1.png',
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
        titleIcon: 'http://121.5.150.116/dist/douchy-imgs/series/title2.png',
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
        titleIcon: 'http://121.5.150.116/dist/douchy-imgs/series/title3.png',
        titleHeight: 20,
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
        titleIcon: 'http://121.5.150.116/dist/douchy-imgs/series/title4.png',
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
      headerBg: 'http://121.5.150.116/dist/douchy-imgs/series/header-bg.png'
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  onShareAppMessage = () => {
    return {
      title: 'DouchySandquist',
      path: '/pages/series/all/index',
      imageUrl: ''
    }
  }

  render() {
    const { icon, plateList } = this.state

    const PlateList = plateList.map((item, index) => {
      return (
        <View
          key={item.titleIcon}
          className={`plate-container ${index === 0 ? 'first-palte' : ''}`}
        >
          <SlidingWindow info={item} type='series' />
        </View>
      )
    })

    return (
      <View className='series'>
        <Image src={icon.headerBg} mode='widthFix' className='series-bg' />
        <View className='series-explain'>ALL COLLECTION</View>
        {PlateList}
      </View>
    )
  }
}

export default Home
