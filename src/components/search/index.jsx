import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'

import SearchIcon from '@/assets/imgs/swiper-indicator.png'
import CloseIcon from '@/assets/imgs/close.png'

import './index.scss'

class Search extends Component {
  defaultProps = {
    keywords: '',
    onChange: () => {},
    onConfirm: () => {},
    onClear: () => {}
  }

  onChange = (e) => {
    const { onChange } = this.props

    onChange && onChange(e.detail.value)
  }

  onConfirm = () => {
    const { onConfirm } = this.props

    onConfirm && onConfirm()
  }

  onClear = () => {
    const { onClear } = this.props

    onClear && onClear()
  }

  render() {
    const { keywords } = this.props

    return (
      <View className='search-container'>
        <Image src={SearchIcon} mode='aspectFit' className='search-icon' />
        <Input
          value={keywords}
          type='text'
          placeholder='请输入商品名称'
          className='search-inp'
          placeholderClass='search-inp-placeholder'
          onInput={this.onChange}
          onConfirm={this.onConfirm}
        />
        <Image src={CloseIcon} className='search-close' onClick={this.onClear} />
      </View>
    )
  }
}

export default Search
