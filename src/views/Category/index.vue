<template>
  <div id="category">
    <div class="topbar" v-show="showHeader">
      <header>
        <div class="back">
          <!-- <i class="iconfont icon-xiangzuojiantou"></i> -->
        </div>
        <div class="search">
          分类
          <!-- <i class="iconfont icon-search"></i>
          <form onsubmit="return false">
            <input type="text" placeholder="搜索你喜欢的……" />
          </form> -->
        </div>
        <div class="home">
          <!-- <img src="@/assets/images/home.png" /> -->
        </div>
      </header>
    </div>
    
    <section>
      <div class="left" ref="l">
        <ul>
          <li
            :class="{ active: index == currentIndex }"
            v-for="(item, index) in left"
            :key="index"
            @click="goScroll(index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div class="right" ref="r">
        <div>

          <div class="banner">
            <img v-lazy="banner" alt="" />
          </div>

          <div class="list" v-for="(list, index) in right" :key="index" ref="rList">
            <div v-for="(item, ind) in list" :key="ind">
              <h2>{{ item.name }}</h2>
              <ul>
                <li class="list-goods" v-for="i in item.list" :key="i.id">
                  <img v-lazy="i.imgUrl" alt="" />
                  <span>{{ i.name }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <Tabbar />
  </div>
</template>
 
<script>
import BScroll from "better-scroll";

import { mapState } from "vuex";
export default {
  name: "Category",
  data() {
    return {
      rightScroll: null,
      allHeight: [], //保存所有list的高度
      height: 163, //  推荐距离顶部的高度
      scrollY: 0, //右侧滚动距离
      ind:0,
      showHeader:true
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 获取数据
    async getData() {
      await this.$store.dispatch("Category/getCategory");
      this.$nextTick(() => {
        // 左
        new BScroll(this.$refs.l, {
          click: true, //better-scroll默认取消点击事件
        });
        // 右
        this.rightScroll = new BScroll(this.$refs.r, {
          click: true,
          probeType: 3, //开启滚动事件
        });

        this.allHeight.push(this.height);

        // 获取所有list的dom结构，得到他们各自的高度
        // 计算后得出各自距离顶部的距离
        // 再添加进数组末尾
        Array.from(this.$refs.rList).forEach((item) => {
          this.height = this.height + item.clientHeight;
          this.allHeight.push(this.height);
        });

        // 绑定滚动事件，得到右侧滑动值
        this.rightScroll.on("scroll", (pos) => {
          // console.log(pos);
          this.scrollY = Math.abs(pos.y);
          this.showHeader = this.scrollY > 70 ? false : true
        });
      });
    },

    // 左侧点击滚动
    goScroll(index) {
      // console.log(index);
      this.currentIndex = index;
      // 点击左侧，右侧滑动到对应位置
      this.rightScroll.scrollTo(0, -this.allHeight[index], 1000); //x坐标，y坐标，滚动执行时间
    },
  },
  computed: {
    ...mapState("Category", ["left", "right", "banner"]),

    currentIndex(){
      return this.allHeight.findIndex((item, index) => {
        // console.log(item,index);
        return this.scrollY >= item && this.scrollY < this.allHeight[index+1]          
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#category {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .topbar {
    width: 100vw;
    height: 1.4rem;
    background-color: #b0352f;

    header {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .back {
        margin-left:0.4333rem ;
      }

      .back i {
        color: #fff;
        font-size: 0.4733rem;
      }

      .home {
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: .3rem;
        img {
          height: 70%;
        }
      }

      .search {
        color: #fff;
      }

      // .search {
      //   background-color: #fff;
      //   width: 6.5rem;
      //   height: 0.9rem;
      //   display: flex;
      //   align-items: center;
      //   border-radius: 0.6rem;
      //   i {
      //     font-size: 0.5rem;
      //     color: black;
      //     // 这里左右都有间距，input的输入位置就会被迫调整
      //     padding: 0.2667rem;
      //   }
      //   form {
      //     //这里给他100%是让他把剩下的空间都占了，实际上它并没有全占了search
      //     // width: 100%;  能得到同样的效果
      //     flex: 1;
      //     height: 100%;
      //     // 给表单flex布局是想让input垂直居中
      //     display: flex;
      //     align-items: center;
      //     color:#ccc;
      //     input {
      //       width: 100%;
      //       margin-right: 0.2667rem;
      //       font-size: 0.4rem;
      //     }
      //   }
      // }
    }
  }

  section {
    display: flex;
    flex: 1;
    overflow: hidden;

    & .left {
      width: 3rem;
      text-align: center;
      background-color: rgb(247, 244, 244);
      li {
        height: 0.6rem;
        padding: 0.3133rem 0;
        margin: 0.15rem 0;
        font-size: 0.5rem;
        border-left: 0.1067rem solid transparent;
        &.active {
          color: #b0352f;
          border-left: 0.1067rem solid #b0352f;
        }
      }
    }

    & .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      & .banner {
        width: 100%;
        height: 4.3333rem;
        padding: 0.2333rem;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.5333rem;
        }
      }

      & .list {
        width: 100%;
        margin: 0.2667rem 0;
        text-align: center;

        h2 {
          font-size: 0.6rem;
          font-weight: normal;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          padding: 0.2133rem 0;

          .list-goods {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 33.3%;
            height: 2rem;
            padding: 0.1333rem 0;
            font-size: 0.4rem;
            img {
              width: 1.41rem;
            }
          }
        }
      }
    }
  }

  img[lazy="loading"] {
    background-color: rgb(227, 225, 225);
  }
}
</style>
