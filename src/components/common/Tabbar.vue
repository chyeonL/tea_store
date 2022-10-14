<template>
  <!-- HTML结构 -->
  <div class="tabbar">
    <ul>
      <li
        v-for="(item, index) in routerList"
        :key="index"
        @click="changePath(item.path)"
      >
        <img
          :src="$route.path.startsWith(item.path) ? item.selected : item.active"
          alt=""
        />
        <span :class="$route.path.startsWith(item.path) ? 'active' : ''">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  // 遍历的数据
  data() {
    return {
      routerList: [
        {
          title: "首页",
          active: "./images/home.png", //未选中
          selected: "./images/home-select.png", //选中
          path: "/home",
        },
        {
          title: "分类",
          active: "./images/list.png",
          selected: "./images/list-select.png",
          path: "/category",
        },
        {
          title: "购物车",
          active: "./images/cart.png",
          selected: "./images/cart-select.png",
          path: "/cart",
        },
        {
          title: "我的",
          active: "./images/my.png",
          selected: "./images/my-select.png",
          path: "/my",
        },
      ],
    };
  },
  methods: {
    changePath(path) {
      // 跳转路径       先判断点击的是否同一个，相同则return
      if (path == this.$route.path) return;
      else this.$router.replace(path);
    },
  },
};
</script>

<style scoped lang="scss">
.tabbar {                         // 使用了scss 预处理器
  width: 100%;
  height: 1.4rem;
  background-color: white;

  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      font-size: 0.4267rem;
      align-items: center;
      justify-content: center;
      img {
        width: 0.8267rem;
        height: 0.8267rem;
      }
    }
  }
}
</style>
