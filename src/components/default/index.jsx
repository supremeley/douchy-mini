import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'

import DefaultIcon from '@/assets/imgs/logo-default.png'

import './index.scss'

class Default extends Component {
  defaultProps = {
    msg: null,
    explain: false
  }

  state = {}

  render() {
    const { msg, explain } = this.props

    return (
      <View className='default-container'>
        <Image src={DefaultIcon} mode='widthFix' className='default-icon' />
        <View className='default-text'>{msg || '暂无相关数据'}</View>
        {explain && <View className='default-text'>{explain}</View>}
      </View>
    )
  }
}

export default Default
