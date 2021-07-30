import Taro,{getCurrentPages} from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
import Tabbar from '@/components/tab-bar'

import t1 from '@/assets/imgs/home/bg1.jpg'
import t2 from '@/assets/imgs/home/bg2.jpg'
import t3 from '@/assets/imgs/home/bg3.jpg'
import t4 from '@/assets/imgs/home/bg4.jpg'

import 'taro-ui/dist/style/components/input-number.scss'
import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class Cart extends Component {
  state = {
    goodsList: [
      {
        price: 1,
        pic: t1,
        title: '高定',
        id: 1,
        number: 1
      },
      {
        price: 2,
        pic: t2,
        title: '轻奢',
        id: 1,
        number: 1
      },
      {
        price: 3,
        pic: t3,
        title: '高定',
        id: 1,
        number: 1
      },
      {
        price: 4,
        pic: t4,
        title: '轻奢',
        id: 1,
        number: 1
      },
      {
        price: 5,
        pic: t1,
        title: '高定',
        id: 1,
        number: 1
      },
      {
        price: 6,
        pic: t2,
        title: '轻奢',
        id: 1,
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

  selectGoods = (index) => () => {
    const { goodsList } = this.state

    goodsList[index].selected = !goodsList[index].selected

    this.setState({ goodsList })
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
      return val + item.price
    }, 0)
  }

  render() {
    const { goodsList } = this.state

    const GoodsList =
      goodsList &&
      goodsList.map((item, index) => {
        return (
          <View key={item.url} className='goods-item-container'>
            <View className='goods-item' onClick={this.selectGoods(index)}>
              <View className={`circle ${item.selected ? 'active' : ''}`}>
                {/* <View className='label'></View> */}
                <View className='at-icon at-icon-check'></View>
              </View>
              <Image src={item.pic} mode='aspectFill' className='goods-img'></Image>
              <View className='goods-info'>
                <View className='goods-info__title'>
                  <View className='goods-info__title-name'>{item.title}</View>
                  <View className='goods-info__title-price'>
                    <Text className='goods-info__title-price-i'>￥</Text>
                    {item.price}
                  </View>
                </View>
                <View className='goods-info__detail'>
                  <View>
                    <Text className='goods-info__tag'>{item.title}</Text>
                  </View>
                  {/* <View className='goods-info__sales'>已售{item.price}</View> */}
                </View>
                <View className='goods-info__bottom'>
                  <View className='goods-info__bottom-opt'>
                    <View
                      className='at-icon at-icon-add-circle'
                      onClick={(e) => this.handleChange(e, index, 'add')}
                    ></View>
                    <View>{item.number}</View>
                    <View
                      className='at-icon at-icon-subtract-circle'
                      onClick={(e) => this.handleChange(e, index, 'minus')}
                    ></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='goods-item-del-btn'>删除</View>
          </View>
        )
      })

    return (
      <View className='index'>
        <View className='title-plate'>
          <View>共{goodsList.length}件商品</View>
          {/* <View onClick={this.onCheck}>{isManaged ? '完成' : '管理'}</View> */}
        </View>
        <View className='goods'>{GoodsList}</View>
        <View className='footer'>
          <View className='footer-left' onClick={this.selectAllGoods}>
            <View className={`circle ${this.allSelected ? 'active' : ''}`}>
              {/* <View className='label'></View> */}
              <View className='at-icon at-icon-check'></View>
            </View>
            已选（{this.selectedNum}）
          </View>

          <View className='footer-info'>
            <View className='footer-info__price'>商品金额: ￥{this.selectedPrice}</View>
            <View className='footer-info__explatin'>应付金额以实际结算为准</View>
          </View>

          <View className='footer-btn' onClick={this.onJump}>
            下单
          </View>
        </View>
        <Tabbar />
      </View>
    )
  }
}

export default Cart
