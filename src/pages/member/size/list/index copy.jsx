import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Button, Image } from '@tarojs/components'

import logoCircle from '@/assets/imgs/logo-circle.png'
import logoDefault from '@/assets/imgs/logo-default.png'

import 'taro-ui/dist/style/components/icon.scss'
import './index.scss'

class SizeList extends Component {
  state = {
    sizeList: [
      {
        isDefault: false,
        name: 'duci',
        shengao: '180cm',
        tizhong: '60kg',
        jiankuan: '38cm',
        xiongwei: '38cm',
        tunwei: '38cm',
        yaowei: '38cm'
      },
      {
        isDefault: true,
        name: 'xxx',
        shengao: '180cm',
        tizhong: '60kg',
        jiankuan: '38cm',
        xiongwei: '38cm',
        tunwei: '38cm',
        yaowei: '38cm'
      }
    ]
  }

  onJump = (id) => () => {
    Taro.navigateTo({ url: `/pages/member/size/editor/index?=${id}` })
  }

  render() {
    const { sizeList } = this.state

    const Size = sizeList.map((item) => {
      return (
        <View key={item.id} className='list-item' onClick={this.onJump(item.id)}>
          <View className='list-item__top'>
            <View className='list-item__top-title'>
              <View className='list-item__top-title__name'>{item.name}</View>
              <View className='list-item__top-title__date'>上传日期：2021年12月31日</View>
            </View>
            {item.isDefault && (
              <View className='list-item__top-default'>
                <Image src={logoCircle} mode='aspectFit' className='list-item__top-default__icon' />
                默认尺寸
              </View>
            )}
          </View>
          <View className='list-item__info'>
            <View className='list-item__info-con'>
              <View className='list-item__info-item'>
                <View className='list-item__info-item__name'>身高:</View>
                <View>{item.shengao}</View>
              </View>
              <View className='list-item__info-item'>
                <View className='list-item__info-item__name'>体重:</View>
                <View>{item.tizhong}</View>
              </View>
            </View>
            <View className='list-item__info-con'>
              <View className='list-item__info-item'>
                <View className='list-item__info-item__name'>肩宽:</View>
                <View>{item.jiankuan}</View>
              </View>
              <View className='list-item__info-item'>
                <View className='list-item__info-item__name'>胸围:</View>
                <View>{item.xiongwei}</View>
              </View>
              <View className='list-item__info-item'>
                <View className='list-item__info-item__name'>臀围:</View>
                <View>{item.tunwei}</View>
              </View>
            </View>
            <View className='list-item__info-item'>
              <View className='list-item__info-item__name'>腰围:</View>
              <View>{item.yaowei}</View>
            </View>
            <Image src={logoDefault} mode='widthFix' className='list-item__info-icon' />
          </View>
          <View className='list-item__bottom'>
            <View className='list-item__bottom-btn'>编辑</View>
            <View className='list-item__bottom-btn'>删除</View>
          </View>
        </View>
      )
    })

    return (
      <View className='size'>
        <View className='header'>
          <View className='header-title'>我的个人尺寸</View>
        </View>
        <View className='list'>{Size}</View>
        <Button className='page-btn' onClick={this.onJump('empty')}>
          新建尺寸+
        </Button>
      </View>
    )
  }
}

export default SizeList
