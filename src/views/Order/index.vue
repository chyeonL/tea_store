<template>
  <div class="order">
    <Header title="提交订单"></Header>
    <main ref="wrapper">
      <div class="content">
        <div class="address">
          <h3>收货地址：</h3>
          <div class="addressInfo" @click="goAddress">
            <div class="info" v-if="path.isDefault">
              <div class="basic">{{ path.name }} {{ path.tel }}</div>
              <div class="detail">
                {{ path.province }} {{ path.city }} {{ path.county }}
                {{ path.addressDetail }}
              </div>
            </div>
            <div class="info" v-else>选择收货地址</div>
            <div class="arrow">></div>
          </div>
        </div>

        <div class="payment">
          <div class="headliner">
            <h3>支付方式：</h3>
            <span>选择在线支付，随机减0-300元</span>
          </div>
          <ul class="ways">
            <li :class="{ active: payment == 0 }" @click="payment = 0">
              微信支付
            </li>
            <li :class="{ active: payment == 1 }" @click="payment = 1">
              支付宝支付
            </li>
            <li :class="{ active: payment == 2 }" @click="payment = 2">
              银联支付
            </li>
            <li :class="{ active: payment == 3 }" @click="payment = 3">
              货到付款
            </li>
          </ul>
        </div>

        <div class="goods">
          <div class="list">
            <van-card
              :num="item.goods_num"
              :price="item.goods_price"
              :title="item.goods_name"
              :thumb="item.goods_imgUrl"
              v-for="(item, index) in list"
              :key="index"
            />
          </div>
          <div class="msg">
            <form onsubmit="return false">
              <input type="text" placeholder="给卖家留言" />
            </form>
          </div>
          <div class="goodsPrice">
            合计：<em>￥{{ total.price.toFixed(2) }}</em>
          </div>
        </div>

        <div class="coupon">无可用优惠券 <i class="arrow">></i></div>

        <div class="bill">
          <h3>账单明细</h3>
          <div class="total">
            <span class="title">订单总价</span>
            <span>￥{{ total.price.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <div class="total">
        共 <span class="num">{{ total.num }}</span> 件，总金额<span
          class="price"
          >￥{{ total.price }}</span
        >
      </div>
      <div class="submit" @click="submit">提交订单</div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
//引入插件
import BetterScroll from "better-scroll";
import { mapGetters } from "vuex";
import bus from "@/api/bus.js";

export default {
  name: "Order",
  data() {
    return {
      payment: 0,
      list: [],
      total: {
        price: 0,
        num: 0,
      },
      path: {},
      choosePath: {},
    };
  },
  components: { Header },
  mounted() {
    this.$nextTick(() => {
      new BetterScroll(this.$refs.wrapper, {
        movable: true,
        zoom: true,
        click: true,
        bounce: false,
      });
    });
  },
  created() {
    // 获取地址
    this.$store.dispatch("getAddress").then((res) => {
      let index = -1;
      res.data.forEach((element, i) => {
        if (element.isDefault == "true") index = i;
      });
      this.path = index == -1 ? {} : res.data[index];
    });

    this.list = JSON.parse(this.$route.query.goodsList);

    // 查询订单
    this.$store.dispatch("getOrder").then((res) => {
      // console.log(res);
      this.total = {
        price: res.data[0].goods_price,
        num: res.data[0].goods_num,
      };
    });
  },
  activated() {
    bus.$on(
      "selectPath",
      function (data) {
        this.path = JSON.parse(data);
      }.bind(this)
    );
  },
  methods: {
    goAddress() {
      this.$router.push({
        path: "/address",
        query: {
          type: "select",
        },
      });
    },

    submit() {
      this.$store.dispatch("submitOrder").then((res) => {
        if (res.success) {
          this.$router.push({
            name: "Payment",
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  background-color: #f6f6f6;
}

main {
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
}

.address {
  width: 100%;
  margin-bottom: 0.4rem;

  h3 {
    width: 100%;
    padding: 0.2667rem 0.4rem;
    font-size: 0.48rem;
    font-weight: normal;
  }

  .addressInfo {
    position: relative;
    display: flex;
    height: 1rem;
    padding: 0.2667rem 0.4rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0.4rem;
    background-color: #fff;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.4rem;
    }

    .arrow {
      width: 1.3333rem;
      height: 100%;
      line-height: 1rem;
      font-size: 0.7rem;
      text-align: right;
      color: rgb(155, 154, 154);
      //   background-color: #b0352f;
    }
  }
}

.payment {
  width: 100%;
  height: 2rem;
  padding: 0.2667rem 0.4rem;
  margin-bottom: 0.4rem;
  font-size: 0.35rem;
  background-color: #fff;

  .headliner {
    display: flex;
    width: 100%;
    margin-bottom: 0.3rem;
    align-items: center;

    h3 {
      font-weight: normal;
    }

    span {
      color: #b0352f;
    }
  }

  .ways {
    display: flex;
    align-items: center;
    li {
      padding: 0.2133rem;
      border: 3px solid grey;
      margin-right: 0.2667rem;

      &.active {
        border-color: #b0352f;
      }
    }
  }
}

.goods {
  width: 100%;
  background-color: #fff;
  margin-bottom: 0.4rem;

  .van-card {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }

  .msg {
    display: flex;
    width: 100%;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;

    form {
      width: 90%;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3733rem;
      border: 1px solid #ccc;

      input {
        width: 100%;
        height: 100%;
        padding-left: 0.2667rem;
      }
    }
  }

  .goodsPrice {
    height: 0.6667rem;
    padding: 0.4rem;
    line-height: 0.6667rem;
    text-align: right;
    font-size: 0.3733rem;
    em {
      font-style: normal;
      font-weight: 700;
      font-size: 0.5rem;
      color: #b0352f;
    }
  }
}

.coupon {
  display: flex;
  height: 1rem;
  padding: 0 0.4rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4267rem;
  background-color: #fff;
  margin-bottom: 0.4rem;
}

.bill {
  margin-bottom: 0.4rem;
  h3 {
    padding: 0 0.4rem;
    font-size: 0.4267rem;
    font-weight: normal;
    margin-bottom: 0.2rem;
  }

  .total {
    display: flex;
    height: 1rem;
    padding: 0 0.4rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0.4267rem;
    background-color: #fff;

    .title {
      color: #ccc;
    }
  }
}

footer {
  display: flex;
  width: 100%;
  height: 1.3333rem;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .total {
    flex: 1;
    margin-left: 0.4rem;
    font-size: 0.4267rem;

    .num {
      color: #b0352f;
    }

    .price {
      margin-left: 0.2667rem;
      color: #b0352f;
      font-size: 0.5333rem;
    }
  }

  .submit {
    width: 3.5rem;
    height: 100%;
    line-height: 1.3333rem;
    color: #fff;
    font-size: 0.5333rem;
    text-align: center;
    background-color: #b0352f;
  }
}
</style>
