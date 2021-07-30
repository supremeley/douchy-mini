Component({
  data: {
    selected: 0,
    // color: '#AFB3BF',
    // selectedColor: '#fe7115',
    list: [{
      text: '首页',
      pagePath: 'pages/home/index',
      iconPath: '/assets/imgs/tab-nav/home.png',
      selectedIconPath: '/assets/imgs/tab-nav/in-home.png'
    },
    {
      text: '分类',
      pagePath: 'pages/categroy/index',
      iconPath: '/assets/imgs/tab-nav/cate.png',
      selectedIconPath: '/assets/imgs/tab-nav/in-cate.png'
    },
    {
      text: '购物车',
      pagePath: 'pages/cart/index',
      iconPath: '/assets/imgs/tab-nav/cart.png',
      selectedIconPath: '/assets/imgs/tab-nav/in-cart.png'
    },
    {
      text: '会员',
      pagePath: 'pages/center/index',
      iconPath: '/assets/imgs/tab-nav/center.png',
      selectedIconPath: '/assets/imgs/tab-nav/in-center.png'
    },]
  },
  ready: function () {
    // 可以在这里 增加权限的判断
    // this.setData({
    //   list: [

    //   ]
    // })
  },
  methods: {
    switchTab(e) {
      // console.log(e)
      const data = e.currentTarget.dataset
      const { index, path } = data

      // console.log(index)
      wx.switchTab({ url: '/' + path })

      // this.setData({
      //   selected: index,
      // }, () => {

      // })
    }
  }
})
