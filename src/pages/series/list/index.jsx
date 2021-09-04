import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import GoodsItemB from '@/components/goodsItemB'

import 'taro-ui/dist/style/components/icon.scss'
import './index.scss'

class Home extends Component {
  state = {
    openOpt: false,
    OptType: 'series',
    curSeries: 4,
    curSort: 0,
    seriesOpt: [
      { name: '新品甄选', type: 0 },
      { name: '热卖精选', type: 0 },
      { name: '经典系列', type: 0 },
      { name: '精品折扣', type: 0 },
      { name: 'Art Galleries 系列', type: 0 },
      { name: 'OnThe Wings of time 系列', type: 0 },
      { name: 'Infinity 系列', type: 0 },
      { name: 'Dark Goddess 系列', type: 0 },
      { name: '百搭精选', type: 0 },
      { name: '职场轻奢', type: 0 },
      { name: '约会必搭', type: 0 },
      { name: '聚会派对', type: 0 },
      { name: '上装', type: 0 },
      { name: '下衣', type: 0 },
      { name: '连衣裙', type: 0 },
      { name: '粗花呢外套', type: 0 },
      { name: '时装西装', type: 0 },
      { name: '外套', type: 0 },
      { name: '套装', type: 0 },
      { name: '配饰', type: 0 }
    ],
    sortOpt: [
      { name: '价格从低到高', type: 0 },
      { name: '价格从高到低', type: 0 },
      { name: '新品排序', type: 0 }
    ],
    goodsList: [
      {
        name: 'DouchySandquist Dark Goddess荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '1,680',
        id: 1
      },
      {
        name: 'DouchySandquist Dark Goddess荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '3,680',
        id: 2
      },
      {
        name: 'DouchySandquist Dark Goddess荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '4,680',
        id: 3
      },
      {
        name: 'DouchySandquist Dark Goddess荡领开叉连衣裙',
        pic: 'http://121.5.150.116/dist/douchy-imgs/test/goods.png',
        price: '5,680',
        id: 4
      }
    ],
    icon: {
      headerBg: 'http://121.5.150.116/dist/douchy-imgs/series-list/header-bg.png'
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

  onOpenOpt = (type) => () => {
    const { openOpt, OptType } = this.state

    if (OptType === type && openOpt) {
      this.onCloseOpt()

      return
    }

    this.setState({ openOpt: true, OptType: type })
  }

  onCloseOpt = () => {
    this.setState({ openOpt: false })
  }

  onSelectNav = (index) => () => {
    this.setState({ curSeries: index })
    this.onCloseOpt()
  }

  onSelectSort = (index) => () => {
    this.setState({ curSort: index })
    this.onCloseOpt()
  }

  render() {
    const { openOpt, OptType, curSeries, seriesOpt, sortOpt, icon, goodsList } = this.state

    const curSeriesName = seriesOpt[curSeries].name

    const GoodsList = goodsList.map((item, index) => {
      return <GoodsItemB key={item.pic} info={item} onClick={this.onJumpToDetail} />
    })

    const SeriesOpt = seriesOpt.map((item, index) => {
      return (
        <View
          key={item.name}
          className={`opt-item ${item.name.length > 5 && 'long-item'}`}
          onClick={this.onSelectNav(index)}
        >
          {item.name}
        </View>
      )
    })

    const SortOpt = sortOpt.map((item, index) => {
      return (
        <View key={item.name} className='opt-item sort-item' onClick={this.onSelectSort(index)}>
          {item.name}
        </View>
      )
    })

    return (
      <View className='series-list'>
        <View className='title'>
          <View className='title__item' onClick={this.onOpenOpt('series')}>
            {curSeriesName}
            <View
              className={`at-icon at-icon-chevron-down ${
                openOpt && OptType === 'series' && 'open-icon'
              }`}
            ></View>
          </View>
          <View className='title__item' onClick={this.onOpenOpt('sort')}>
            排序
            <View
              className={`at-icon at-icon-chevron-down ${
                openOpt && OptType === 'sort' && 'open-icon'
              }`}
            ></View>
          </View>
        </View>

        <Image src={icon.headerBg} mode='widthFix' className='header-bg' />
        <View className='list'>{GoodsList}</View>

        <View
          className={`mask ${openOpt && 'mask-open'}`}
          catch-move
          onClick={(e) => e.stopPropagation()}
        >
          <View className={`opt ${openOpt && 'open-opt'}`}>
            {OptType === 'series' ? SeriesOpt : SortOpt}
          </View>
        </View>
      </View>
    )
  }
}

export default Home
