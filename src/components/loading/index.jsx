import { Component } from 'react'
import { View, Image } from '@tarojs/components'

import LoadingIcon from '@/assets/imgs/loading.png'
import './index.scss'

class Loading extends Component {
  state = {
    // current: 0,
    circle: [{}, {}, {}, {}, {}, {}, {}]
  }

  // timer = null

  componentDidMount() {
    const { circle } = this.state

    let size = 6,
      rotateDeg = -24,
      opacity = 1

    this.timer = setInterval(() => {
      // const { current } = this.state

      let c = 0

      // if (current == circle.length) {
      //   c = 0
      // } else {
      // c = current + 1
      // }

      const cir = circle.map((item, index) => {
        let i = index + 1
        // curOpacity,
        // boxShadow

        // if (c === index) {
        //   // i = index + 1
        //   curOpacity = opacity
        //   // boxShadow = '0 0 8px rgba(0, 0, 0, 0.5)'
        // } else {
        //   // i = index + 1
        //   curOpacity = opacity - 0.1 * 1
        //   // boxShadow = '0 0 0px rgba(0, 0, 0, 0)'
        // }

        return {
          style: {
            width: size - i * 0.7 + 'px',
            height: size - i * 0.7 + 'px',
            marginLeft: 0 - (size - i * 0.7) / 2 + 'px',
            transform: `rotate(${rotateDeg * i}deg)`,
            opacity: opacity - 0.1 * 1
            // boxShadow
          }
        }
      })
      // debugger
      this.setState({ current: c, circle: cir })
    }, 200)
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
    // this.timer = null
  }

  handleStyle = (index) => {
    const { current } = this.state

    let size = 6,
      rotateDeg = -23,
      opacity = 1,
      i = index + 1

    if (current === index) {
      return {
        width: size - 1 * 0.7 + 'px',
        height: size - 1 * 0.7 + 'px',
        marginLeft: 0 - (size - 1 * 0.7) / 2 + 'px',
        transform: `rotate(${rotateDeg * i}deg)`,
        opacity: opacity - 0.1 * 1
      }
    }

    return {
      width: size - i * 0.7 + 'px',
      height: size - i * 0.7 + 'px',
      marginLeft: 0 - (size - i * 0.7) / 2 + 'px',
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
                  style={{ ...item.style }}
                  className='loading-circle__item'
                ></View>
              )
            })}
        </View>
      </View>
    )
  }
}

export default Loading
