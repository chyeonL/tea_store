<template>
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
          {{item.title}}
        </span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Tabbar",
  data() {
    return {
      routerList: [
        {
          title: "首页",
          active: "./images/home.png",
          selected: "./images/home-select.png",
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

<style scoped>
.tabbar {
  width: 100%;
  height: 1.4rem;
  background-color: white;
}

.tabbar ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.tabbar ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 0.4267rem;
  align-items: center;
  justify-content: center;
}

img {
  width: 0.8267rem;
  height: 0.8267rem;
}
</style>
