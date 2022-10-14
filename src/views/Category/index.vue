<template>
  <div id="category">
    <div class="topbar" v-show="showHeader">
      分类
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
      height: 163, //  推荐距离顶部的高度,就是banner的高度
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
      // mock数据
      await this.$mock.mockCategory().then(res=>{
        // console.log(res);
        this.$store.commit('Category/GETCATEGORY',res.data)
      })

      // await this.$store.dispatch("Category/getCategory");

      this.$nextTick(() => {
        // 左
        new BScroll(this.$refs.l, {
          click: true, //better-scroll默认取消点击事件
        });
        // 右
        this.rightScroll = new BScroll(this.$refs.r, {
          click: true,
          probeType: 3, // 允许派发滚动事件
          mouseWheel:true,
          bounce: false
        });

        this.allHeight.push(this.height);

        // 获取所有list的dom结构，得到他们各自的高度
        // 计算后得出各自距离顶部的距离
        // 再添加进数组末尾
        Array.from(this.$refs.rList).forEach((item) => {
          this.height +=  item.clientHeight;
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

    currentIndex:{
      get(){
        return this.allHeight.findIndex((item, index) => {
        // console.log(item,index);
        // 就是处于这个高度和下一个高度之间，取这一个高度的下标
        return this.scrollY >= item && this.scrollY < this.allHeight[index+1]          
      });
      },
      set(){}
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
    line-height: 1.4rem;
    background-color: #b0352f;
    text-align: center;
    color: white;
  }

  section {
    display: flex;
    flex: 1;
    overflow: hidden;

     .left {
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

     .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;

       .banner {
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

       .list {
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
            // background-color: #b0352f;
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
