<template>
  <div class="recommend">
    <Card> 
      <span>爆款推荐</span>
    </Card>
    <ul>
      <li
        class="goods"
        v-for="item in recommendList"
        :key="item.id"
        @click="goDetail(item.id)"
      >
        <h2>
          <img v-lazy="item.imgUrl" alt="" />
        </h2>
        <div class="goods-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.content }}</p>
          <div class="price">
            <i>￥</i>
            <span>{{ item.price }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Home/Card";
export default {
  name: "Recommend",
  components: { Card },
  props: {
    recommendList: Array,
  },
  methods: {
    goDetail(id){
        this.$router.push({
          path:'/detail',
          query:{id}
        })
    }
  },
};
</script>

<style scoped>
.goods {
  position: relative;
  text-align: center;
}

.goods img {
  width: 9.6rem;
  height: 3.84rem;
  border-radius: 0.5333rem;
}

.goods-info {
  position: absolute;
  top: 0.5333rem;
  right: 0.8rem;
  text-align: left;
}

.goods-info h3 {
  font-size: 0.4rem;
}

.goods-info p {
  font-size: 0.5333rem;
}

.goods-info .price {
  color: red;
  text-align: right;
  margin: 0.4rem 0;
}

.goods-info .price span {
  font-weight: 700;
}

img[lazy="loading"] {
  background-color: rgb(227, 225, 225);
}
</style>
