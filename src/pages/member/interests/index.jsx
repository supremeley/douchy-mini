import Taro, { getCurrentPages } from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components'

// import QrcodeIcon from '@/assets/imgs/center/qrcode.png'
import logoCircle from '@/assets/imgs/logo-circle.png'

import 'taro-ui/dist/style/components/icon.scss'

import './index.scss'

class Interests extends Component {
  state = {
    cardList: [
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/vip/primary/card.png',
        qrbg: 'http://121.5.150.116/dist/douchy-imgs/vip/primary/qrcode.png',
        name: 'Primary',
        roleList: [
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/intergrol.png',
            title: '积分兑换',
            desc: '成为会员，即可在小程序商城享受消费1元得1积分，积分可用于兑换折扣券或礼品，抽奖等活动。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/zhe.png',
            title: '折扣特惠',
            desc: 'Douchy Sandquist Primary 会员消费累计满3000即可成为 Gold Card 会员享受全品类商品9.5折优惠。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/birthday.png',
            title: '生日礼',
            desc: 'Douchy Sandquist Primary 会员在生日月将获得一张9折优惠券，可叠加使用。30天内有效。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/prize.png',
            title: '每月抽奖',
            desc: 'Douchy Sandquist Primary 会员可每月参加1次抽奖活动。奖券30天内有效。可与会员折扣叠加使用，单次仅可使用一张。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/baoyou.png',
            title: '包邮活动',
            desc: 'Douchy Sandquist Primary 会员享受全场包邮。'
          }
        ]
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/vip/gold/card.png',
        qrbg: 'http://121.5.150.116/dist/douchy-imgs/vip/gold/qrcode.png',
        name: 'Gold Card',
        roleList: [
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/service.png',
            title: '专属客服',
            desc: '急速专属客服快速回答您的疑问。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/intergrol.png',
            title: '积分兑换',
            desc: '成为会员，即可在小程序商城享受消费1元得1积分，积分可用于兑换折扣券或礼品，抽奖等活动。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/zhe.png',
            title: '折扣特惠',
            desc: 'Douchy Sandquist Gold Card 会员享受全品类商品9.5折优惠。消费累计满10000即可成为 Platinum Card 会员享受全品类9折优惠。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/birthday.png',
            title: '生日礼',
            desc: 'Douchy Sandquist Primary 会员在生日月将获得一张9折优惠券，可叠加使用。30天内有效。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/prize.png',
            title: '每月抽奖',
            desc: 'Douchy Sandquist Gold Card 会员可每月参加2次抽奖活动。奖券30天内有效。可与会员折扣叠加使用，单次仅可使用一张。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/baoyou.png',
            title: '包邮活动',
            desc: 'Douchy Sandquist Primary 会员享受全场包邮。'
          }
        ]
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/vip/platinum/card.png',
        qrbg: 'http://121.5.150.116/dist/douchy-imgs/vip/platinum/qrcode.png',
        name: 'Platinum Card',
        roleList: [
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/service.png',
            title: '专属客服/专属穿搭顾问',
            desc: '急速专属客服快速回答您的疑问。更有专属穿搭顾问提供专业穿搭建议。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/intergrol.png',
            title: '积分兑换',
            desc: '成为会员，即可在小程序商城享受消费1元得1积分，积分可用于兑换折扣券或礼品，抽奖等活动。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/zhe.png',
            title: '折扣特惠',
            desc: 'Douchy Sandquist Platinum Card 会员享受全品类商品9折优惠。消费累计满50000即可成为 Diamond Card 会员享受全品类8.8折优惠。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/birthday.png',
            title: '生日礼',
            desc: 'Douchy Sandquist Primary 会员在生日月将获得一张9折优惠券，可叠加使用。30天内有效。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/active.png',
            title: '会员活动',
            desc: 'Douchy Sandquist Platinum Card 会员可不定期参与线上、线下会员专属活动。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/prize.png',
            title: '每月抽奖',
            desc: 'Douchy Sandquist Platinum Card 会员可每月参加3次抽奖活动。奖券30天内有效。可与会员折扣叠加使用，单次仅可使用一张。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/baoyou.png',
            title: '包邮活动',
            desc: 'Douchy Sandquist Primary 会员享受全场包邮。'
          }
        ]
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/vip/diamond/card.png',
        qrbg: 'http://121.5.150.116/dist/douchy-imgs/vip/diamond/qrcode.png',
        name: 'Diamond Card',
        roleList: [
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/service.png',
            title: '专属客服/专属穿搭顾问',
            desc: '急速专属客服快速回答您的疑问。更有专属穿搭顾问提供专业穿搭建议。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/intergrol.png',
            title: '积分兑换',
            desc: '成为会员，即可在小程序商城享受消费1元得1积分，积分可用于兑换折扣券或礼品，抽奖等活动。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/zhe.png',
            title: '折扣特惠',
            desc: 'Douchy Sandquist Diamond Card 会员享受全品类商品8.8折优惠。消费累计满140000即可成为 Black Card 会员享受全品类8折优惠。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/birthday.png',
            title: '生日礼',
            desc: 'Douchy Sandquist Primary 会员在生日月将获得一张9折优惠券，可叠加使用。30天内有效。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/active.png',
            title: '会员活动',
            desc: 'Douchy Sandquist Diamond Card 会员可不定期参与线上、线下会员专属活动。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/prize.png',
            title: '每月抽奖',
            desc: 'Douchy Sandquist Diamond Card 会员可每月参加4次抽奖活动（其中1次可抽取立减1000无门槛优惠券）。奖券30天内有效，可与会员折扣叠加使用，单次仅可使用一张。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/baoyou.png',
            title: '包邮活动',
            desc: 'Douchy Sandquist Primary 会员享受全场包邮。'
          }
        ]
      },
      {
        bg: 'http://121.5.150.116/dist/douchy-imgs/vip/black/card.png',
        qrbg: 'http://121.5.150.116/dist/douchy-imgs/vip/black/qrcode.png',
        name: 'Black Card',
        roleList: [
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/service.png',
            title: '专属客服/专属穿搭顾问',
            desc: '急速专属客服快速回答您的疑问。更有专属穿搭顾问提供专业穿搭建议。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/intergrol.png',
            title: '积分兑换',
            desc: '成为会员，即可在小程序商城享受消费1元得1积分，积分可用于兑换折扣券或礼品，抽奖等活动。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/zhe.png',
            title: '折扣特惠',
            desc: 'Douchy Sandquist Black Card 会员享受全品类商品8折优惠。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/birthday.png',
            title: '生日礼',
            desc: 'Douchy Sandquist Black Card 会员在生日月将获得一张9折优惠券，可叠加使用。30天内有效。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/active.png',
            title: '会员活动',
            desc: 'Douchy Sandquist Platinum Card 会员可不定期参与线上、线下会员专属活动。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/prize.png',
            title: '每月抽奖',
            desc: 'Douchy Sandquist Black Card 会员可每月参加6次抽奖活动（其中2次可抽取立减1000无门槛优惠券）。奖券30天内有效，可与会员折扣叠加使用，单次仅可使用一张。'
          },
          {
            icon: 'http://121.5.150.116/dist/douchy-imgs/vip/baoyou.png',
            title: '包邮活动',
            desc: 'Douchy Sandquist Primary 会员享受全场包邮。'
          }
        ]
      }
    ],
    icon: {
      logoBlack: 'http://121.5.150.116/dist/douchy-imgs/logo-black.png'
    }
  }

  componentDidMount() {}

  onJump = (url) => () => {
    Taro.navigateTo({ url })
  }

  render() {
    const { icon, cardList } = this.state

    return (
      <View className='interests'>
        <View className='header'>
          <Image src={logoCircle} mode='aspectFill' className='header-circle' />
          <Image src={icon.logoBlack} mode='widthFix' className='header-logo' />
        </View>
        <Swiper nextMargin='16px' className='content'>
          {cardList &&
            cardList.map((item) => {
              return (
                <SwiperItem key={item.name} className='content-item'>
                  <ScrollView scrollY className='content-item__scroll'>
                    <View style={{ backgroundImage: 'url(' + item.bg + ')' }} className='card'>
                      <View className='card-num'>No.0000 0000 000</View>
                      <Image src={item.qrbg} mode='widthFix' className='card-qrcode' />
                    </View>
                    <View className='title'>
                      <View className='title-name'>
                        Douchy Sandquist
                        <Text className='title-name__level'>{item.name}</Text>
                      </View>
                      <View className='title-desc'>
                        凭此卡可享有「 {item.name} 」会员等级对应福利。
                      </View>
                    </View>
                    <View className='role'>
                      <View className='role-title'>会员权益</View>
                      {item.roleList &&
                        item.roleList.map((role) => {
                          return (
                            <View key={role.icon} className='role-item'>
                              <Image
                                src={role.icon}
                                mode='aspectFill'
                                className='role-item__icon'
                              />
                              <View className='role-item__info'>
                                <View className='role-item__info-title'>{role.title}</View>
                                <View className='role-item__info-desc'>{role.desc}</View>
                              </View>
                            </View>
                          )
                        })}
                    </View>
                  </ScrollView>
                </SwiperItem>
              )
            })}
        </Swiper>
      </View>
    )
  }
}

export default Interests
