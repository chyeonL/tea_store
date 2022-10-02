<template>
  <div class="home">
    <!-- 头部 -->
    <div class="headers">
        <Header></Header>
        <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options"
          @change="changeTab"
        >
        </ly-tab>
    </div>

    <!-- 中间滚动区域 -->
    <section ref="wrapper">
      <div ref="content">
        <!--  newData是获取回来的数据，每个头部切换的数据都不一样，
              作为数组，遍历它的每一项，有type类型才加载对应组件 
        -->
        <div v-for="(item, index) in newData" :key="index">
          <Swiper
            v-if="item.type == 'swiperList'"
            :swiperList="item.data"
          ></Swiper>

          <Icons v-if="item.type == 'iconsList'" :iconsList="item.data"></Icons>

          <Recommend
            v-if="item.type == 'recommendList'"
            :recommendList="item.data"
          ></Recommend>

          <Ad v-if="item.type == 'adList'" :adList="item.data"></Ad>

          <Like v-if="item.type == 'likeList'" :likeList="item.data"></Like>
        </div>
      </div>
    </section>

    <!-- 底部切换栏 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/Home/Header";
import Swiper from "@/components/Home/swiper";
import Icons from "@/components/Home/Icons";
import Recommend from "@/components/Home/Recommend";
import Like from "@/components/Home/Like";
import Ad from "@/components/Home/Ad";
//引入插件
import BetterScroll from "better-scroll";
import MouseWheel from '@better-scroll/mouse-wheel'
import http from "@/api/request.js";

export default {
  name: "Home",
  data() {
    return {
      selectedId: 0,  //ly-tab的选择项
      items: [],      //ly-tab的每一项
      newData: [],
      options: {
        activeColor: "#b0352f",
      },
      bs1: "",
      bs2: "",
    };
  },

  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Like,
    Ad,
  },

  created() {
    this.getData();
  },

  methods: {
    // 立即获取数据
    async getData() {
      let res = await http.$axios({ url: "/api/index_list/0/data/1" });
      // console.log(res);
      this.items = Object.freeze(res.topBar);
      this.newData = Object.freeze(res.data);

      // 滚动的范围出现了问题
      // 先等页面DOM都渲染完毕后，再初始化执行滚动插件
      this.$nextTick(() => {
        this.bs1 = new BetterScroll(this.$refs.wrapper, {
          movable: true,
          zoom: true,
          click: true,
          bounce: false,
            mouseWheel:true
        });
      });
    },

    // 切换栏重发请求
    async addData(index) {
      if (index == 0 || index == 1 || index == 2) {
        let res = await http.$axios({
          url: `/api/index_list/${index}/data/1`,
        });

        if (res.constructor != Array) {
          this.newData = res.data;
        } else {
          this.newData = res;
        }

        // 页面DOM结构完全生成再 初始化滚动插件
        this.$nextTick(() => {
          this.bs2 = new BetterScroll(this.$refs.wrapper, {
            mouseWheel: true
          });
        });
      }
    },

    changeTab(item, index) {
      this.addData(index);
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.headers {
  width: 100%;
  height: 2.88rem;
}
/* .headers-main {
  position: fixed;
  left: 0;
  top: 0;
} */
section {
  flex: 1;
  overflow: hidden;
}
::v-deep .ly-tabbar {
  box-shadow: none;
  border-bottom: none;
}
</style>
