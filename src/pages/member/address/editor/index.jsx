import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Input, Picker, Button, Image } from '@tarojs/components'

import LogoGolden from '@/assets/imgs/logo-golden.png'
import logoCircle from '@/assets/imgs/logo-circle.png'

import 'taro-ui/dist/style/components/icon.scss'
import './index.scss'

class AddressEditor extends Component {
  state = {
    icon: {
      logoBlack: 'http://121.5.150.116/dist/douchy-imgs/logo-black.png'
    },
    isDefault: false
  }

  onConfirm = () => {
    Taro.navigateTo({ url: '/pages/member/address/list/index' })
  }

  changeDefault = () => {
    const { isDefault } = this.state

    this.setState({ isDefault: !isDefault })
  }

  render() {
    const { icon, isDefault } = this.state

    return (
      <View className='address-editor'>
        <View className='header'>
          <View className='header-title'>新增地址</View>
        </View>
        <View className='address-btn'>
          <Image src={LogoGolden} mode='widthFix' className='address-btn__icon' />
          <View>一键授权微信地址</View>
        </View>
        <View className='form'>
          <View className='form-option'>
            <View className='form-option__title'>姓名*</View>
            <Input className='form-option__inp'></Input>
          </View>
          <View className='form-option'>
            <View className='form-option__title'>手机号*</View>
            <Input type='number' className='form-option__inp'></Input>
          </View>
          <View className='form-option'>
            <View className='form-option__title'>地址*</View>
            <Picker>
              <View className='form-option__inp'>
                省市区
                <View className='at-icon at-icon-chevron-down'></View>
              </View>
            </Picker>
          </View>
          <View className='form-option'>
            <View className='form-option__title'>详细地址*</View>
            <Input className='form-option__inp'></Input>
          </View>
          <View className='form-default' onClick={this.changeDefault}>
            <View className={`form-default__cir ${isDefault && 'active-cir'}`}>
              <View className='at-icon at-icon-check'></View>
            </View>
            <View>设为默认收货地址</View>
          </View>

          <View className='logo'>
            <Image src={logoCircle} mode='aspectFill' className='logo-circle' />
            <Image src={icon.logoBlack} mode='widthFix' className='logo-img' />
          </View>
        </View>
        <Button className='page-btn'>保存</Button>
      </View>
    )
  }
}

export default AddressEditor
