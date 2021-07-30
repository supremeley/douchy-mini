import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import 'taro-ui/dist/style/components/avatar.scss'

import './index.scss'

class Entry extends Component {
  state = {
    entryBg: 'http://121.5.150.116/dist/douchy-imgs/entry.png',
    entryTime: 3000
  }

  componentDidMount() {
    const { entryTime } = this.state

    setTimeout(() => {
      Taro.redirectTo({ url: '/pages/home/index' })
    }, entryTime)
  }

  render() {
    const { entryBg } = this.state

    return (
      <View className='entry'>
        <Image src={entryBg} mode='aspesctFill' className='entry-bg' />
      </View>
    )
  }
}

export default Entry
