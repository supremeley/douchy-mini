import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import Search from '@/components/search'

import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class Open extends Component {
  state = {
    keywords: '',
    imgList: [{ url: 'http://121.5.150.116/dist/douchy-imgs/home/plate-title1.png' }],
    cateList: [
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/New Arrival.png',
        name: '新品甄选',
        eName: 'New Arrival'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Top Seller.png',
        name: '热卖精选',
        eName: 'Top Seller'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Classical Series.png',
        name: '经典系列',
        eName: 'Classical Series'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Recommendation.png',
        name: '推荐分类',
        eName: 'Recommendation'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Top.png',
        name: '上装',
        eName: 'Top'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Lower.png',
        name: '下装',
        eName: 'Lower'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Dress.png',
        name: '连衣裙',
        eName: 'Dress'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Tweed Jacket.png',
        name: '粗花呢外套',
        eName: 'Tweed Jacket'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Western-style Clothes.png',
        name: '时装西装',
        eName: 'Western-style Clothes'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Coat.png',
        name: '外套',
        eName: 'Coat'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Suit.png',
        name: '套装',
        eName: 'Suit'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Accessories.png',
        name: '配饰',
        eName: 'Accessories'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/Limited Time Only.png',
        name: '限时折扣',
        eName: 'Limited Time Only'
      }
    ],
    currentId: 0,
    currentCate: {
      pic: 'http://121.5.150.116/dist/douchy-imgs/open/New Arrival.png',
      name: '新品甄选',
      eName: 'New Arrival'
    },
    goodsList: [
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '外套'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '半身裙'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      },
      {
        pic: 'http://121.5.150.116/dist/douchy-imgs/open/open-goods.png',
        name: '吊带'
      }
    ]
  }

  onSelectNav = (index) => () => {
    const { cateList } = this.state
    this.setState({ currentId: index, currentCate: cateList[index] })
  }

  render() {
    const { cateList, currentId, currentCate, goodsList } = this.state

    return (
      <View className='open'>
        <View className='header-search'>
          <Search />
        </View>
        <View className='content'>
          <ScrollView scrollY className='nav-list'>
            {cateList &&
              cateList.map((item, index) => {
                return (
                  <View
                    key={item.name}
                    className={`nav-list__item ${index == currentId ? 'active-item' : ''}`}
                    onClick={this.onSelectNav(index)}
                  >
                    <View className='nav-list__item-tilte'>{item.name}</View>
                    <View className='nav-list__item-et'>{item.eName}</View>
                  </View>
                )
              })}
          </ScrollView>
          <ScrollView scrollY className='detail'>
            <Image
              src='http://121.5.150.116/dist/douchy-imgs/open/open-img.png'
              mode='aspectFill'
              className='detail-bg'
            />
            <View className='detail-content'>
              <View className='detail-content__title'>
                <View className='detail-content__title-text'>{currentCate.name}</View>
                <Image
                  src={currentCate.pic}
                  mode='heightFix'
                  className='detail-content__title-icon'
                />
              </View>
              <View className='detail-content__goods'>
                {goodsList &&
                  goodsList.map((item) => {
                    return (
                      <View key={item.name} className='detail-content__goods-item'>
                        <Image
                          src={item.pic}
                          mode='aspectFill'
                          className='detail-content__goods-item__img'
                        />
                        <View className='detail-content__goods-item__name'>{item.name}</View>
                      </View>
                    )
                  })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Open
