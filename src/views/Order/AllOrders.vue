<template>
  <div class="allOrders">
    <Header title="所有订单" />
    <ul>
      <li v-for="(o, index) in allOrders" :key="o.id">
        <div class="main">
          <span class="id">订单号：{{ o.order_id }}</span>
        </div>
        <div class="info">
          <div class="name">商品列表：{{ o.goods_name }}</div>
          <div class="num">商品总数：{{ o.goods_num }}</div>
          <div class="price">
            商品总价：{{ o.goods_price }}
            <span class="status">订单状态： {{ status[index] }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { mapState } from "vuex";
export default {
  name: "allOrders",
  components: { Header },
  created() {
    this.$store.dispatch("getAllOrders");
  },
  computed: {
    ...mapState({
      allOrders: (state) => state.Order.allOrders,
    }),
    status() {
      let status = [];
      this.allOrders.forEach((element, index) => {
        if (element.order_status == 1) {
          status.push("未支付");
        } else if (element.order_status == 2) {
          status.push("待支付");
        } else if (element.order_status == 3) {
          status.push("支付成功");
        } else {
          status.push("支付失败");
        }
      });
      return status;
    },
  },
};
</script>

<style scoped lang="scss">
.allOrders {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f6f6f6;
}
ul {
  //   width: 100%;
  padding: 0.3rem;
  margin-top: 0.2rem;
  font-size: 0.4rem;
  li {
    // width: 100%;
    padding: 0.3rem;
    background-color: #fff;
    margin-bottom: 0.5333rem;
    border: 1px solid #b0352f;
    border-radius: 0.2667rem;

    .main {
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3733rem;
      border-bottom: 1px solid #ccc;
      .id {
        margin-right: 0.2133rem;
      }
    }

    .info {
      display: flex;
      height: 2.6667rem;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 0.2667rem;
    }

    .status {
        margin-left: 1.5rem;
    }
  }
}
</style>
