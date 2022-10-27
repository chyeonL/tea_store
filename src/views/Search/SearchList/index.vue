<template>
  <div class="searchList">
    <div class="headers">
      <Header />
      <!-- 排序 -->
      <ul>
        <li
          v-for="(item, index) in sortList"
          :key="index"
          @click="changeTab(index)"
        >
          <div :class="{ active: index == currentIndex }">{{ item.name }}</div>
          <!-- index不等于0表示遍历的不是第一个元素，即"综合"，它不需要升降序 -->
          <div class="search-filter" v-if="index != 0">
            <i
              class="iconfont icon-shangjiantou"
              :class="{ active: item.status == 1 }"
            ></i>
            <i
              class="iconfont icon-xiajiantou"
              :class="{ active: item.status == 2 }"
            ></i>
          </div>
        </li>
      </ul>
    </div>

    <section ref="wrapper">
      <div>
        <ul v-if="goodsList.length">
          <li v-for="item in goodsList" :key="item.id">
            <h2><img v-lazy="item.imgUrl" alt="" /></h2>
            <p>{{ item.name }}</p>
            <div class="goods">
              <div class="price">
                <i>￥</i>
                <span>{{ item.price }}</span>
              </div>
              <div class="buy">立即购买</div>
            </div>
          </li>
        </ul>
        <h2 v-else class="notFound">暂无搜索结果……</h2>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Search/Header";
import http from "@/api/request";
import BScroll from "better-scroll";

export default {
  name: "SearchList",
  data() {
    return {
      goodsList: [],
      currentIndex: 0,
      sortList: [
        { name: "综合", key: "allq" },
        { name: "价格", status: 0, key: "price" },
        { name: "销量", status: 0, key: "num" },
        //  status 0 表示没选中     1 表示升序   2 表示降序
      ],
    };
  },
  components: { Header },
  created() {
    this.getData();
  },
  computed: {
    orderBy() {
      let obj = this.sortList[this.currentIndex];
      let order = obj.status == "1" ? "asc" : "desc";
      // 这里是新增了一个对象，以目前index的key属性和其status值重新组合成一个对象    举例输出   {price:desc}
      return {
        [obj.key]: order,
      };
    },
  },
  methods: {
    // 发送请求获取搜索列表
    async getData() {
      await http
        .$axios({
          url: "/api/goods/shopList",
          params: {
            searchName: this.$route.query.key,
            // 展开对象     这有这样才可以将其中的key作为属性名
            ...this.orderBy,
            // orderBy:this.orderBy
          },
        })
        .then((res) => {
          this.goodsList = res;
          // console.log(res);
        });

      this.$nextTick(() => {
        this.bs1 = new BScroll(this.$refs.wrapper, {
          bounce: false,
          mouseWheel: true,
        });
      });
    },

    // 排序
    changeTab(index) {
      this.currentIndex = index;
      // 排他思想
      this.sortList.forEach((item, i) => {
        if (i != index) item.status = 0;
      });
      // 0 为false  1、2为true
      // 点击一次，默认升序
      if (this.sortList[index].status == false) {
        this.sortList[index].status = 1;
      }
      // 重复点击，改变为降序
      else {
        this.sortList[index].status = this.sortList[index].status == 1 ? 2 : 1;
      }

      // 发送请求
      this.getData();
    },
  },
  // 点击就会重发请求
  watch: {
    $route() {
      this.getData();
    },
  },
};
</script>

<style scoped>
.searchList {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.headers ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #b0352f;
}

.headers ul li {
  display: flex;
  align-items: center;
  padding: 0.2667rem 0.1333rem;
  margin: 0 0.1333rem;
  font-size: 0.48rem;
}

.search-filter {
  padding: 0 0.2133rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.search-filter i {
  font-size: 0.32rem;
}

section {
  flex: 1;
  overflow: hidden;
}

section ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

section ul li {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2667rem;
  box-sizing: border-box;
  font-size: 0.3733rem;
}

section ul li img {
  width: 4.5333rem;
  height: 4.5333rem;
}

section ul li p {
  width: 95%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

section .goods {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2667rem;
}
section .goods div {
  margin: 0 0.1667rem;
}

section .goods .price {
  color: red;
}

section .goods .buy {
  background-color: #b0352f;
  color: white;
  padding: 0.15rem;
  border-radius: 0.2133rem;
}

.active {
  color: #b0352f;
}

.notFound {
  font-size: 0.5733rem;
  padding: 0.5333rem;
  text-align: center;
}

img[lazy="loading"] {
  background-color: rgb(227, 225, 225);
}
</style>
