<template>
  <div class="payment">
    <header>
      <span class="title">订单支付</span>
    </header>
    <div class="order">订单号： {{ orderId }}</div>
    <p v-if="orderStatus" v-text="status == 3 ? '支付成功' : '支付失败'"></p>
    <button v-if="orderStatus" @click="$router.push('/')">返回首页</button>
    <p v-else>支付中……</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Payment",
  data() {
    return {
      orderStatus: false,
      timer: null,
      status: 0,
    };
  },
  computed: {
    ...mapState({
      orderId: (state) => state.Order.orderId,
    }),
  },
  created() {
    this.$store.dispatch("getPaymentStatus", this.orderId).then((res) => {
      if (res.data.order_status == 2) {
        // 查看订单状态  每隔两秒
        this.timer = setInterval(() => {
          this.$store.dispatch("getPaymentStatus", this.orderId);
        }, 1000);
      }
    });
  },
  mounted() {
    if (!this.orderStatus) {
      setTimeout(() => {
        let status = 3;     //支付成功3  失败是4
        this.$store
          .dispatch("goPayment", { status: status, id: this.orderId })
          .then((res) => {
            console.log(res);
            this.orderStatus = true;
            this.status = res.status;
            clearInterval(this.timer);
          });
      }, 5000);
    }
  },
};
</script>

<style lang="scss" scoped>
.payment {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

header {
  width: 100vw;
  height: 1.4rem;
  line-height: 1.4rem;
  color: white;
  font-size: 0.48rem;
  text-align: center;
  background-color: #b0352f;
}

.order,
p {
  width: 100%;
  font-size: 0.48rem;
  text-align: center;
}
.order {
  margin: 0.8rem auto;
}

button {
  display: inline-block;
  width: 3rem;
  height: 1rem;
  line-height:1rem;
  margin: 0.4rem 0;
  color: white;
  font-size: 0.48rem;
  background-color: #b0352f;
  border-radius: .2667rem;
  border: none;
}
</style>
