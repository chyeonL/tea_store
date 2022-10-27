<template>
  <header>
    <div class="back" @click="goBack">
      <i class="iconfont icon-xiangzuojiantou" v-show="!selectStatus"></i>
    </div>
    <div class="title">
      <slot><span>{{title}}</span></slot>
    </div>
    <div class="home" @click="$router.push('/')">
      <img src="@/assets/images/home.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["title", "path", "selectStatus"],
  methods: {
    goBack() {
      if (this.path) this.$router.push(this.path);
      else this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
header {
  width: 100vw;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #b0352f;

  .back {
    margin-left: 0.4333rem;
  }

  .back i {
    color: #fff;
    font-size: 0.4733rem;
  }

  .home {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 0.3rem;
    img {
      height: 70%;
    }
  }

  .title {
    color: #fff;
    font-size: 0.5333rem;
  }
}
</style>
