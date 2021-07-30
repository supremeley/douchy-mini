import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import LoadingIcon from '@/assets/imgs/loading.png'
import './index.scss'

class Default extends Component {
  state = {
    circle: ['', '', '', '', '', '', '']
  }

  handleStyle = (index) => {
    let size = 10,
      rotateDeg = 24,
      opacity = 1,
      i = index + 1

    return {
      width: size - i * 1 + 'px',
      height: size - i * 1 + 'px',
      marginLeft: 0 - (size - i * 1) / 2 + 'px',
      transform: `rotate(${rotateDeg * i}deg)`,
      opacity: opacity - 0.1 * i
    }
  }

  render() {
    const { circle } = this.state

    return (
      <View className='loading-container'>
        <Image src={LoadingIcon} className='loading-icon' />
        <View className='loading-circle'>
          {circle &&
            circle.map((item, index) => {
              return (
                <View
                  key={item + index}
                  style={this.handleStyle(index)}
                  className='loading-circle__item'
                ></View>
              )
            })}
        </View>
      </View>
    )
  }
}

export default Default
