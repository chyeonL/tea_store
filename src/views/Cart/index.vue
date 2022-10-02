<template>
  <div id="cart">
    <header>
      <span class="title">购物车</span>
      <span
        class="manage"
        @click="changeIsManage"
        v-text="isManage ? '完成' : '管理'"
      ></span>
    </header>

    <main ref="wrapper" v-if="cartList.length">
      <ul ref="content">
        <li v-for="(goods, index) in cartList" :key="goods.id">
          <div class="radio">
            <van-checkbox
              v-model="goods.isChecked"
              @click="$store.commit('selectFn', index)"
              checked-color="#b0352f"
            >
            </van-checkbox>
          </div>
          <div class="goods-img">
            <img v-lazy="goods.goods_imgUrl" alt="" />
          </div>
          <div class="info">
            <div class="title">
              <span>{{ goods.goods_name }}</span>
              <i class="iconfont icon-icon" @click="deleteGoods(goods.id)"></i>
            </div>
            <div class="price">￥{{ goods.goods_price }}</div>
            <div class="stepper">
              <van-stepper
                v-model="goods.goods_num"
                integer
                @change="changeNum($event, goods.id)"
              />
            </div>
          </div>
        </li>
      </ul>
    </main>

    <main v-else class="noGoods">
      <p>购物车中没有商品</p>
      <div @click="$router.replace('/home')">去首页逛逛</div>
    </main>

    <footer v-if="cartList.length">
      <div class="radio">
        <van-checkbox
          @click="$store.dispatch('selectAllfn')"
          :value="isAllChecked"
          checked-color="#b0352f"
        ></van-checkbox>
      </div>
      <div class="info">
        <div class="Num">
          共有 <span>{{ total.num }}</span> 件商品
        </div>
        <div class="total" v-show="!isManage">
          总计：
          <span class="price">¥{{ total.price.toFixed(2) }} + 0茶币</span>
        </div>
      </div>
      <div class="order" v-show="!isManage" @click="goOrder">去结算</div>
      <div
        class="order"
        v-show="isManage"
        @click="deleteGoods($store.state.Cart.selectedList)"
      >
        删除
      </div>
    </footer>

    <Tabbar />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BetterScroll from "better-scroll";

export default {
  name: "cart",
  data() {
    return {
      isManage: false, //头部默认是管理
    };
  },
  computed: {
    ...mapState({
      cartList: (state) => state.Cart.cartList,
      selectedList: (state) => state.Cart.selectedList,
    }),

    ...mapGetters(["isAllChecked", "total", "goodsList"]),
  },
  created() {
    // 是需要登录了，才能进入cart页面的
    this.getData();
  },
  methods: {
    async getData() {
      await this.$store.dispatch("getCart").then((res) => {
        this.$nextTick(() => {
          new BetterScroll(this.$refs.wrapper, {
            click: true,
            bounce: false, //阻止回弹效果
            mouseWheel: true,
          });
        });
      });
    },

    deleteGoods(id) {
      // console.log(id);
      this.$dialog
        .confirm({
          title: "删除",
          message: "确认删除商品吗？",
        })
        .then(() => {
          this.$store.dispatch("deleteGoods", id);
        })
        .catch(() => {
          return;
        });
    },

    changeNum(num, id) {
      // console.log(num,id);
      this.$store.dispatch("updateGoods", { num, id }).then((res) => {
        console.log(res);
      });
    },

    // 去结算
    goOrder() {
      if (this.selectedList.length) {
        // 生成一个订单
        this.$store.dispatch("addOrder").then((res) => {
          // console.log(res);
          // 跳转 提交订单
          this.$router.push({
            name: "Order",
            path: "/order",
            // query:{
            //   goodsList:JSON.stringify(this.goodsList)
            // }
            query: this.goodsList,
          });
        });
      } else this.$toast("还未勾选商品");
    },

    changeIsManage() {
      if (this.cartList.length > 0) {
        this.isManage = !this.isManage;
      } else return;
    },
  },
};
</script>

<style lang="scss" scoped>
#cart {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  main {
    display: flex;
    // width: 100%;
    flex: 1;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    background-color: #efecec;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0.3rem;
      li {
        display: flex;
        width: 92%;
        padding: 0.4rem 0.2rem;
        margin-bottom: 0.6rem;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        font-size: 0.35rem;
        border-radius: 0.5rem;

        .goods-img {
          img {
            width: 1.973333rem;
            height: 1.973333rem;
          }
        }

        .info {
          display: flex;
          width: 5.3333rem;
          height: 100%;
          flex-direction: column;
          margin-right: 0.4rem;
          .title {
            display: flex;
            justify-content: space-between;
            span {
              width: 80%;
            }

            i {
              font-size: 0.6rem;
            }
          }

          .price {
            margin: 0.2133rem 0 -0.1rem;
            color: #b0352f;
          }

          .stepper {
            text-align: right;
          }
        }
      }
    }
  }

  .noGoods {
    padding: 0.8rem 0;
    text-align: center;
    font-size: 0.5333rem;
    p {
      margin-bottom: 0.2667rem;
    }
    div {
      font-size: 0.48rem;
      color: #b0352f;
    }
  }
}

header {
  position: relative;
  width: 100vw;
  height: 1.4rem;
  line-height: 1.4rem;
  color: white;
  font-size: 0.48rem;
  text-align: center;
  background-color: #b0352f;
  .manage {
    position: absolute;
    top: 0;
    right: 0.5333rem;
  }
}

footer {
  display: flex;
  width: 100%;
  height: 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  .radio {
    margin: 0 0.2667rem;
  }
  .info {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    font-size: 0.4rem;
  }

  .order {
    width: 3.2rem;
    height: 100%;
    line-height: 1.28rem;
    color: #fff;
    text-align: center;
    font-size: 0.426666rem;
    background-color: #b0352f;
    border-top-right-radius: 0.5rem;
    border-radius: 1rem;
  }

  span {
    color: #b0352f;
  }
}
</style>
