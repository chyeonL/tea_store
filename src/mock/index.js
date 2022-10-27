import Mock from "mockjs";

// 首页 推荐
Mock.mock("/mock/home", {
  code: 200,
  success: true,
  data: {
    topBar: [
      { id: 0, label: "推荐" },
      { id: 1, label: "大红袍" },
      { id: 2, label: "铁观音" },
      { id: 3, label: "绿茶" },
      { id: 4, label: "普洱" },
      { id: 5, label: "茶具" },
      { id: 6, label: "花茶" },
    ],
    data: [
      //这是swiper
      {
        id: 0,
        type: "swiperList",
        data: [
          { id: 0, imgUrl: "./images/swiper1.jpeg" },
          { id: 1, imgUrl: "./images/swiper2.jpeg" },
          { id: 3, imgUrl: "./images/swiper3.jpeg" },
        ],
      },
      //这是icons
      {
        id: 1,
        type: "iconsList",
        data: [
          {
            id: 1,
            title: "自饮茶",
            imgUrl: "./images/icons1.png",
          },
          {
            id: 2,
            title: "茶具",
            imgUrl: "./images/icons2.png",
          },
          {
            id: 3,
            title: "茶礼盒",
            imgUrl: "./images/icons3.png",
          },
          {
            id: 4,
            title: "领福利",
            imgUrl: "./images/icons4.png",
          },
          {
            id: 5,
            title: "官方验证",
            imgUrl: "./images/icons5.png",
          },
        ],
      },
      //爆款推荐
      {
        id: 3,
        type: "recommendList",
        data: [
          {
            id: 1,
            name: "赛事茶-第三届武夷茶",
            content: "一杯好茶放心好物",
            price: "68",
            imgUrl: "./images/recommend.jpeg",
          },
          {
            id: 2,
            name: "茶具-中式陶瓷茶叶",
            content: "鲜爽甘醇 口粮首选",
            price: "68",
            imgUrl: "./images/recommend.jpeg",
          },
        ],
      },
      //猜你喜欢
      {
        id: 4,
        type: "likeList",
        data: [
          {
            id: 1,
            imgUrl: "./images/like.jpeg",
            name: "赛事茶-第三届武夷山茶叶交易会暨仙店杯-优质奖肉桂160g",
            price: 238,
          },
          {
            id: 2,
            imgUrl: "./images/like2.jpeg",
            name: "茶具-中式陶瓷茶叶罐 2色可选",
            price: 26,
          },
          {
            id: 3,
            imgUrl: "./images/goods3.jpg",
            name: "绿茶  远致龙井3号 150g 清爽甘醇",
            price: 118,
          },
          {
            id: 4,
            imgUrl: "./images/goods4.jpg",
            name: "明前春茶 绿茶 龙井破春系列80g罐装",
            price: 98,
          },
          {
            id: 5,
            imgUrl: "./images/like3.jpeg",
            name: "明前春茶 绿茶龙井",
            price: 299,
          },
          {
            id: 6,
            imgUrl: "./images/like.jpeg",
            name: "神奇的糊涂魔药 茶叶 茶具 红茶",
            price: 299,
          },
          {
            id: 7,
            imgUrl: "./images/like2.jpeg",
            name: "清新茉莉花茶 茶具",
            price: 299,
          },
        ],
      },
    ],
  },
});

// 首页 大红袍
Mock.mock("/mock/da", {
  code: 200,
  success: true,
  data: {
    data: [
      // AdList
      {
        id: 1,
        type: "adList",
        data: [
          {
            id: 1,
            imgUrl: "./images/dhp.jpeg",
          },
          {
            id: 2,
            imgUrl: "./images/dhp.jpeg",
          },
        ],
      },
      //猜你喜欢
      {
        id: 4,
        type: "likeList",
        data: [
          {
            id: 1,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
          {
            id: 2,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
          {
            id: 3,
            imgUrl: "./images/like.jpeg",
            name: "建盏茶具套装 红色芝麻毫 12件套",
            price: 299,
          },
        ],
      },
    ],
  },
});

// 首页 铁观音
Mock.mock("/mock/tie", {
  code: 200,
  success: true,
  data: {
    data: [
      // AdList
      {
        id: 1,
        type: "adList",
        data: [
          {
            id: 1,
            imgUrl: "./images/tgy.jpeg",
          },
          {
            id: 2,
            imgUrl: "./images/tgy.jpeg",
          },
        ],
      },
      //猜你喜欢
      {
        id: 1,
        type: "iconsList",
        data: [
          {
            id: 1,
            title: "自饮茶",
            imgUrl: "./images/icons1.png",
          },
          {
            id: 2,
            title: "茶具",
            imgUrl: "./images/icons2.png",
          },
          {
            id: 3,
            title: "茶礼盒",
            imgUrl: "./images/icons3.png",
          },
          {
            id: 4,
            title: "领福利",
            imgUrl: "./images/icons4.png",
          },
          {
            id: 5,
            title: "官方验证",
            imgUrl: "./images/icons5.png",
          },
        ],
      },
    ],
  },
});

// 分类
Mock.mock("/mock/category", {
  code: 200,
  success: true,
  data: [
    {
      bannerUrl: "./images/swiper3.jpeg",
    },
    {
      //一级
      id: 0,
      name: "推荐",
      data: [
        {
          //二级
          id: 0,
          name: "推荐",
          list: [
            //三级
            {
              id: 0,
              name: "铁观音",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 1,
              name: "功夫茶具",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 3,
              name: "茶具电器",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 4,
              name: "紫砂壶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 5,
              name: "龙井",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 6,
              name: "武夷岩茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 73,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 54,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
          ],
        },
      ],
    },
    {
      //一级
      id: 1,
      name: "绿茶",
      data: [
        {
          //二级
          id: 0,
          name: "绿茶",
          list: [
            //三级
            {
              id: 0,
              name: "龙井",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 1,
              name: "碧螺春",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 3,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 4,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 5,
              name: "六安瓜片",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 9,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 8,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 7,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 475,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 42,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 41,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 73,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 54,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
          ],
        },
      ],
    },
    {
      //一级
      id: 2,
      name: "乌龙",
      data: [
        {
          //二级
          id: 0,
          name: "乌龙",
          list: [
            //三级
            {
              id: 0,
              name: "龙井",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 1,
              name: "碧螺春",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 3,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 4,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 5,
              name: "六安瓜片",
              imgUrl: "./images/list1.jpeg",
            },
          ],
        },
      ],
    },
    {
      //一级
      id: 3,
      name: "红茶",
      data: [
        {
          //二级
          id: 0,
          name: "红茶",
          list: [
            //三级
            {
              id: 0,
              name: "龙井",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 1,
              name: "碧螺春",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 5,
              name: "六安瓜片",
              imgUrl: "./images/list1.jpeg",
            },
          ],
        },
      ],
    },
    {
      //一级
      id: 4,
      name: "白茶",
      data: [
        {
          //二级
          id: 0,
          name: "白茶",
          list: [
            //三级
            {
              id: 0,
              name: "龙井",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 1,
              name: "碧螺春",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 3,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 4,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 5,
              name: "六安瓜片",
              imgUrl: "./images/list1.jpeg",
            },
          ],
        },
      ],
    },
    {
      //一级
      id: 5,
      name: "普洱",
      data: [
        {
          //二级
          id: 0,
          name: "普洱",
          list: [
            //三级
            {
              id: 0,
              name: "龙井",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 1,
              name: "碧螺春",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 9,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 8,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 7,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 475,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 42,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 41,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 73,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 54,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 911,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 842,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 137,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 47425,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 4142,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 1141,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 473,
              name: "雀舌",
              imgUrl: "./images/list1.jpeg",
            },
            {
              id: 524,
              name: "安吉白茶",
              imgUrl: "./images/list1.jpeg",
            },
          ],
        },
      ],
    },
  ],
});

// 登录
Mock.mock("/mock/login", {
  code: 200,
  data: {
    id: 102,
    tel: "13763334852",
    pwd: "111111",
    imgUrl: "./images/user.jpeg",
    nickName: "超妍超妍",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxMzc2MzMzNDg1MiIsImlhdCI6MTY2NTc0OTY4MywiZXhwIjoxNjY1OTIyNDgzfQ.vBQKLCHpUIF8AYUkiqAosCwtslBYQWpPLD15bLue54A",
  },
  msg: "登陆成功",
});

Mock.mock("/mock/cart", {
  code: 200,
  data: [
    {
      goods_id: 2,
      goods_imgUrl: "/images/goods2.jpg",
      goods_name: "茶具-中式陶瓷茶叶",
      goods_num: 2,
      goods_price: 26,
      id: 1276,
      isChecked: false,
      uid: 102,
    },
    {
      goods_id: 6,
      goods_imgUrl: "/images/goods1.jpg",
      goods_name: "神奇的糊涂魔药 茶叶 茶具 红茶",
      goods_num: 2,
      goods_price: 91,
      id: 1289,
      isChecked: false,
      uid: 102,
    },
    {
      goods_id: 2,
      goods_imgUrl: "/images/goods2.jpg",
      goods_name: "茶具-中式陶瓷茶叶",
      goods_num: 2,
      goods_price: 26,
      id: 1271,
      isChecked: false,
      uid: 102,
    },
    {
      goods_id: 7,
      goods_imgUrl: "/images/goods4.jpg",
      goods_name: "清新茉莉花茶 茶具",
      goods_num: 1,
      goods_price: 79,
      id: 1292,
      isChecked: false,
      uid: 102,
    },
    {
      goods_id: 5,
      goods_imgUrl: "/images/goods2.jpg",
      goods_name: "英式红茶 上等茶叶",
      goods_num: 2,
      goods_price: 43,
      id: 1290,
      isChecked: false,
      uid: 102,
    },
  ],
});

Mock.mock("/mock/address", {
  code: 200,
  data: [
    {
      addressDetail: "五道口 清华大学",
      areaCode: "110100",
      city: "东城区",
      county: "",
      id: 17,
      isDefault: "false",
      name: "林家谦",
      province: "北京市",
      tel: "13763334852",
      uId: 102,
    },
    {
      addressDetail: "南海万科广场",
      areaCode: "130202",
      city: "佛山市",
      county: "南海区",
      id: 18,
      isDefault: "true",
      name: "田柾国",
      province: "广东省",
      tel: "13763334852",
      uId: 102,
    },
  ],
});

Mock.mock("/mock/detail", {
  code: 200,
  data: {
    id: 1,
    name: "赛事茶-第三届武夷茶",
    content: "一杯好茶放心好物",
    price: 238,
    num: 34,
    imgUrl: "/images/goods1.jpg",
    allq: null,
    swiper1: "/images/goods2.jpg",
    swiper2: "/images/goods4.jpg",
    swiper3: "/images/goods1.jpg",
    swiper4: "/images/goods4.jpg",
    oldPrice: 3030,
  },
});


Mock.mock("/mock/search", {
  code: 200,
  data: [
    {
      id: 1,
      name: "赛事茶-第三届武夷茶",
      content: "一杯好茶放心好物",
      price: 238,
      num: 34,
      imgUrl: "/images/goods1.jpg",
      allq: null,
      swiper1: "/images/goods2.jpg",
      swiper2: "/images/goods4.jpg",
      swiper3: "/images/goods1.jpg",
      swiper4: "/images/goods4.jpg",
      oldPrice: 3030,
    },
    {
      id: 2,
      name: "茶具-中式陶瓷茶叶",
      content: "鲜爽甘醇 口粮首选",
      price: 26,
      num: 45,
      imgUrl: "/images/goods2.jpg",
      allq: null,
      swiper1: "/images/goods3.jpg",
      swiper2: "/images/goods4.jpg",
      swiper3: "/images/goods4.jpg",
      swiper4: "/images/goods1.jpg",
      oldPrice: 96,
    },
    {
      id: 3,
      name: "绿茶-远数龙井3号",
      content: "一杯好茶放心好物",
      price: 118,
      num: 112,
      imgUrl: "/images/goods3.jpg",
      allq: null,
      swiper1: "/images/goods3.jpg",
      swiper2: "/images/goods2.jpg",
      swiper3: "/images/goods1.jpg",
      swiper4: "/images/goods3.jpg",
      oldPrice: 555,
    },
    {
      id: 4,
      name: "明前春茶 绿茶龙井",
      content: "一杯好茶放心好物",
      price: 98,
      num: 8,
      imgUrl: "/images/goods4.jpg",
      allq: null,
      swiper1: "/images/goods3.jpg",
      swiper2: "/images/goods1.jpg",
      swiper3: "/images/goods1.jpg",
      swiper4: "/images/goods4.jpg",
      oldPrice: 3030,
    },
    {
      id: 5,
      name: "英式红茶 上等茶叶",
      content: "一杯好茶放心好物",
      price: 43,
      num: 977,
      imgUrl: "/images/goods2.jpg",
      allq: null,
      swiper1: "/images/goods2.jpg",
      swiper2: "/images/goods2.jpg",
      swiper3: "/images/goods4.jpg",
      swiper4: "/images/goods3.jpg",
      oldPrice: 3030,
    },
    {
      id: 6,
      name: "神奇的糊涂魔药 茶叶 茶具 红茶",
      content: "一杯好茶放心好物",
      price: 91,
      num: 4444,
      imgUrl: "/images/goods1.jpg",
      allq: null,
      swiper1: "/images/goods4.jpg",
      swiper2: "/images/goods3.jpg",
      swiper3: "/images/goods3.jpg",
      swiper4: "/images/goods4.jpg",
      oldPrice: 3030,
    },
    {
      id: 7,
      name: "清新茉莉花茶 茶具",
      content: "一杯好茶放心好物",
      price: 79,
      num: 23,
      imgUrl: "/images/goods4.jpg",
      allq: null,
      swiper1: "/images/goods2.jpg",
      swiper2: "/images/goods3.jpg",
      swiper3: "/images/goods3.jpg",
      swiper4: "/images/goods1.jpg",
      oldPrice: 425,
    },
    {
      id: 8,
      name: "景德镇瓷器茶具 茶叶",
      content: "一杯好茶放心好物",
      price: 555,
      num: 4311,
      imgUrl: "/images/goods4.jpg",
      allq: null,
      swiper1: "/images/goods4.jpg",
      swiper2: "/images/goods4.jpg",
      swiper3: "/images/goods3.jpg",
      swiper4: "/images/goods2.jpg",
      oldPrice: 5232,
    },
    {
      id: 9,
      name: "超妍 茶艺大师 茶具",
      content: "一杯好茶放心好物",
      price: 231,
      num: 77,
      imgUrl: "/images/goods3.jpg",
      allq: null,
      swiper1: "/images/goods4.jpg",
      swiper2: "/images/goods1.jpg",
      swiper3: "/images/goods3.jpg",
      swiper4: "/images/goods3.jpg",
      oldPrice: 3030,
    },
    {
      id: 10,
      name: "小罐茶大匠心 好茶",
      content: "一杯好茶放心好物",
      price: 1997,
      num: 42,
      imgUrl: "/images/goods2.jpg",
      allq: null,
      swiper1: "/images/goods1.jpg",
      swiper2: "/images/goods4.jpg",
      swiper3: "/images/goods3.jpg",
      swiper4: "/images/goods3.jpg",
      oldPrice: 3030,
    },
    {
      id: 11,
      name: "银河修理员 好茶叶",
      content: "一杯好茶放心好物",
      price: 45,
      num: 987,
      imgUrl: "/images/goods1.jpg",
      allq: null,
      swiper1: "/images/goods2.jpg",
      swiper2: "/images/goods1.jpg",
      swiper3: "/images/goods2.jpg",
      swiper4: "/images/goods1.jpg",
      oldPrice: 3030,
    },
  ],
});
