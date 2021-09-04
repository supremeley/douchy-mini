import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import LoadingIcon from '@/assets/imgs/loading.png'
import start1 from '@/assets/imgs/loading/start1.png'
import start2 from '@/assets/imgs/loading/start2.png'
import start3 from '@/assets/imgs/loading/start3.png'
import start4 from '@/assets/imgs/loading/start4.png'

import './index.scss'

class LoadingSrart extends Component {
  state = {
    circle: [
      {
        url: start1
      },
      {
        url: start2
      },
      {
        url: start3
      },
      {
        url: start4
      },
      {
        url: start4
      }
    ]
  }

  handleStyle = (index) => {
    let size = 12,
      rotateDeg = -30,
      opacity = 1,
      i = index + 1

    return {
      width: size - i * 1 + 'px',
      height: size - i * 1 + 'px',
      marginLeft: 0 - (size - i * 1) / 2 + 'px',
      transform: `rotate(${rotateDeg * i}deg)`
      // opacity: opacity - 0.1 * i
    }
  }

  render() {
    const { circle } = this.state

    return (
      <View className='loading-container'>
        <Image src={LoadingIcon} className='srart-icon' />
        <View className='srart-circle'>
          {circle &&
            circle.map((item, index) => {
              return (
                <View key={item.url} style={this.handleStyle(index)} className='srart-circle__item'>
                  <Image
                    src={item.url}
                    className={`srart-circle__item-icon ${index % 2 ? '' : 'odd'}`}
                  />
                </View>
              )
            })}
        </View>
      </View>
    )
  }
}

export default LoadingSrart
