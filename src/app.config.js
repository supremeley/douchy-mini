export default {
  pages: [
    'pages/home/index',
    'pages/categroy/index',
    'pages/cart/index',
    'pages/center/index',
    'pages/login/index',
    'pages/entry/index',
    'pages/checkout/index',
    // 'pages/checkout/index',
    // 'pages/checkout/success/index',
  ],
  subpackages: [
    {
      root: 'pages/item',
      pages: [
        // 'list/index',
        'detail/index',
        'open/index',
        'search/index',
      ]
    },
    {
      root: 'pages/series',
      pages: [
        'all/index',
        'list/index',
        'scene/index',
        'scene/detail/index',
      ]
    },
    {
      root: 'pages/order',
      pages: [
        'list/index',
        'detail/index',
        'refundList/index',
        'progress/list/index',
        'progress/detail/index',

      ]
    },
    {
      root: 'pages/member',
      pages: [
        'interests/index',
        'wish/index',
        'address/list/index',
        'address/editor/index',
        'size/list/index',
        'size/editor/index',
      ]
    },

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'DOUCHY SANDQUIST',
    navigationBarTextStyle: 'black'
  },
  // tabBar: {
  //   custom: true,
  //   selectedColor: '#1afa29',
  //   color: '#bfbfbf',
  //   list: [
  //     {
  //       text: '首页',
  //       pagePath: 'pages/home/index',
  //       iconPath: './assets/imgs/tab-nav/home.png',
  //       selectedIconPath: './assets/imgs/tab-nav/in-home.png'
  //     },
  //     {
  //       text: '分类',
  //       pagePath: 'pages/categroy/index',
  //       iconPath: './assets/imgs/tab-nav/cate.png',
  //       selectedIconPath: './assets/imgs/tab-nav/in-cate.png'
  //     },
  //     {
  //       text: '购物车',
  //       pagePath: 'pages/cart/index',
  //       iconPath: './assets/imgs/tab-nav/cart.png',
  //       selectedIconPath: './assets/imgs/tab-nav/in-cart.png'
  //     },
  //     {
  //       text: '会员',
  //       pagePath: 'pages/center/index',
  //       iconPath: './assets/imgs/tab-nav/center.png',
  //       selectedIconPath: './assets/imgs/tab-nav/in-center.png'
  //     }
  //   ]
  // },
  // usingComponents: {}
}
