<template>
  <div class="footer">
    <div class="three shop">
      <i class="iconfont icon-dianpu"></i>
      <span>店铺</span>
    </div>
    <div class="three customer-support">
      <i class="iconfont icon-a-kefukefuzhongxin"></i>
      <span>客服</span>
    </div>
    <div class="three cart" @click="$router.push('/cart')">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>
    <div class="addCart" @click="addToCart">加入购物车</div>
    <div class="buyNow">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    addToCart() {
      // 没有开启命名空间，路径前面不用写模块名
      this.$store.dispatch("addToCart", this.$route.query.id).then((res) => {
        console.log(res);
        this.$toast(res.msg);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 1.3333rem;
  display: flex;
  align-items: center;
  background-color: #f0eded;
  .three {
    display: flex;
    width: 1.5rem;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.3733rem;
    color: rgb(65, 64, 64);
    .iconfont {
      font-size: 0.5rem;
    }
  }

  .addCart,
  .buyNow {
    flex: 1;
    height: 100%;
    line-height: 1.3333rem;
    font-size: 0.5rem;
    color: white;
    text-align: center;
  }

  .addCart {
    background-color: orange;
  }

  .buyNow {
    background-color: red;
  }
}
</style>
