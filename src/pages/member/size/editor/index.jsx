import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Input, Button, Image } from '@tarojs/components'

import LogoGolden from '@/assets/imgs/logo-golden.png'

import 'taro-ui/dist/style/components/icon.scss'
import './index.scss'

class AddressEditor extends Component {
  state = {
    form: {
      features: ''
    },
    sizeOpt: [
      {
        name: '个人信息',
        desc: 'PERSONAL INFORMATION',
        optItem: [
          {
            name: '姓名',
            type: 'string'
          },
          {
            name: '年龄(岁)',
            type: 'number'
          },
          {
            name: '身高(厘米)',
            type: 'number'
          },
          {
            name: '体重(公斤)',
            type: 'number'
          }
        ]
      },
      {
        name: '身体信息',
        desc: 'BODY INFORMATION',
        optItem: [
          {
            name: '肩宽(厘米)',
            type: 'number'
          },
          {
            name: '腰围(厘米)',
            type: 'number'
          },
          {
            name: '胸围(厘米)',
            type: 'number'
          },
          {
            name: '臀围(厘米)',
            type: 'number'
          }
        ]
      }
    ],
    isDefault: false,
    features: [
      {
        name: '脖子粗'
      },
      {
        name: '手臂特别长'
      },
      {
        name: '肩膀特别宽'
      },
      {
        name: '有小肚子'
      }
    ],
    photoOpt: [
      {
        type: 'frant',
        url: '',
        name: '正面照'
      },
      {
        type: 'frant',
        url: '',
        name: '侧面照'
      },
      {
        type: 'frant',
        url: '',
        name: '背面照'
      }
    ],
    imgList: []
  }

  onConfirm = () => {
    Taro.navigateTo({ url: '/pages/member/address/list/index' })
  }

  onChangeInp = (e, key) => {
    const { form } = this.state

    this.setState({ form: { ...form, [key]: e.detail.value } })
  }

  handleSelectFeatures = (features) => () => {
    const { form } = this.state

    this.setState({ form: { ...form, features } })
  }

  changeDefault = () => {
    const { isDefault } = this.state

    this.setState({ isDefault: !isDefault })
  }

  upLoadPhoto = (index) => async () => {
    const { photoOpt } = this.state

    const { tempFilePaths } = await Taro.chooseImage({ count: 1 })

    console.log(tempFilePaths)

    let il = photoOpt.concat()

    il[index] = { ...il[index], url: tempFilePaths[0] }

    this.setState({ photoOpt: il })

    //   imgList.push(...img)

    // try {
    //   const { url } = await api.common.UPLOAD_IMG(res.tempFilePaths[0])

    //   // console.log(a)

    //   D.toast('上传成功')

    //   this.setState({ imgList: [url] })
    // } catch (e) {
    //   console.log(e)
    //   D.toast('上传失败')
    // }
  }

  upLoadImg = async () => {
    const { imgList } = this.state

    const { tempFilePaths } = await Taro.chooseImage({ count: 5 - imgList.length })

    // console.log(res)

    let il = imgList.concat()

    il.push(...tempFilePaths)

    this.setState({ imgList: il })

    //   imgList.push(...img)

    // try {
    //   const { url } = await api.common.UPLOAD_IMG(res.tempFilePaths[0])

    //   // console.log(a)

    //   D.toast('上传成功')

    //   this.setState({ imgList: [url] })
    // } catch (e) {
    //   console.log(e)
    //   D.toast('上传失败')
    // }
  }

  render() {
    const { isDefault, sizeOpt, features, photoOpt, imgList, form } = this.state

    return (
      <View className='size-editor'>
        {sizeOpt &&
          sizeOpt.map((item) => {
            return (
              <View key={item.name} className='content'>
                <View className='content-title'>
                  <Image src={LogoGolden} className='content-title__icon' />
                  <View className='content-title__info'>
                    <View className='content-title__info-name'>{item.name}</View>
                    <View className='content-title__info-desc'>{item.desc}</View>
                  </View>
                </View>
                {item.optItem &&
                  item.optItem.map((info) => {
                    return (
                      <View key={item.name} className='option-item'>
                        <View className='option-item__title'>{info.name}:</View>
                        <Input type={info.type} className='option-item__inp'></Input>
                      </View>
                    )
                  })}
              </View>
            )
          })}
        <View className='content'>
          <View className='content-title'>
            <Image src={LogoGolden} className='content-title__icon' />
            <View className='content-title__info'>
              <View className='content-title__info-name'>身材特征</View>
              <View className='content-title__info-desc'>BODY CHARACTERISTICS</View>
            </View>
          </View>
          <View className='option-item'>
            <View className='option-item__title'>选填：</View>
            <Input
              value={form.features}
              type='string'
              className='option-item__inp border-input'
            ></Input>
          </View>
          <View className='option-item'>
            {features &&
              features.map((item) => {
                return (
                  <View
                    key={item.name}
                    className='option-item__opt'
                    onClick={this.handleSelectFeatures(item.name)}
                  >
                    {item.name}
                  </View>
                )
              })}
          </View>
        </View>
        <View className='content'>
          <View className='content-title'>
            <Image src={LogoGolden} className='content-title__icon' />
            <View className='content-title__info'>
              <View className='content-title__info-name'>上传您的全身照或半身照(非必填）</View>
              <View className='content-title__info-desc'>PHOTO</View>
            </View>
          </View>
          <View className='photo-opt'>
            <View className='photo-opt__title'>
              如果您希望服装更为合体，上传照片将有利于服装定制。
            </View>
            <View className='photo-opt__content'>
              {photoOpt &&
                photoOpt.map((item, index) => {
                  return (
                    <View
                      key={item.name}
                      className='photo-opt__content-item'
                      onClick={this.upLoadPhoto(index)}
                    >
                      <Image
                        src={item.url}
                        mode='aspectFill'
                        className='photo-opt__content-item__img'
                      />
                      <View className='photo-opt__content-item__tag'>{item.name}</View>
                    </View>
                  )
                })}
            </View>
          </View>
          <View className='photo-opt'>
            <View className='photo-opt__title'>请上传文件(最多5张)、限制每个5.0MB以内</View>
            <View className='photo-opt__content'>
              {imgList &&
                imgList.map((item) => {
                  return (
                    <View key={item} className='photo-opt__content-item'>
                      <Image
                        src={item}
                        mode='aspectFill'
                        className='photo-opt__content-item__photo'
                      ></Image>
                    </View>
                  )
                })}
              {imgList.length < 5 && (
                <View className='photo-opt__content-item'>
                  <View className='photo-opt__content-item__add' onClick={this.upLoadImg}>
                    <View className='at-icon at-icon-add-circle'></View>
                    上传照片
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
        <View className='content-default' onClick={this.changeDefault}>
          <View className={`content-default__cir ${isDefault && 'active-cir'}`}>
            <View className='at-icon at-icon-check'></View>
          </View>
          <View>设为默认尺寸</View>
        </View>
        <Button className='page-btn'>保存</Button>
      </View>
    )
  }
}

export default AddressEditor
