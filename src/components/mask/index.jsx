import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

class Mask extends Component {
  defaultProps = {
    show: false,
    onClick: () => {}
  }

  state = {}

  handleClose = () => {
    const { onClose, info } = this.props

    onClose && onClose()
  }

  render() {
    return (
      <View className='mask' catch-move onClick={(e) => e.stopPropagation()}>
        {this.props.children}
      </View>
    )
  }
}

export default Mask
