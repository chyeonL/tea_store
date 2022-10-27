<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(swiper,index) in swiperList" :key="index">
        <img v-lazy="swiper" alt="" />
      </div>
    </div>
     <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
export default {
  name: "Swiper",
  props: ["swiperList"],
  watch: {
    swiperList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let mySwiper = new Swiper(".swiper-container", {
            direction: "horizontal", // 垂直切换选项
            loop: true, // 循环模式选项

            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang='scss' scoped>
.swiper-container {
  width: 100%;
  height: 8rem;
}

.swiper-pagination, .swiper-pagination-fraction {
width: 1rem;
height: .5867rem;
line-height: .5867rem;
left: 8.32rem;
bottom: .4rem;
color:white;
font-size: .4rem;
border-radius: .2667rem;
background-color: rgba(100, 99, 99,.5);
}

img {
  width: 100%;
  height: 100%;
}

</style>
