<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
        <img v-lazy="item.imgUrl" alt="">
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
  name: "swiper",
  watch: {
    imgList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let mySwiper = new Swiper(this.$refs.swiperContainer, {
            direction: "horizontal", // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },
          });
        });
      },
    },
  },
  props:{
    swiperList:Array
  }
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 4.4rem;
}
.swiper-slide img {
    width: 100%;
    height: 100%;
}

.swiper-pagination{
	width: 100%;
	bottom:0px;
}
.swiper-pagination-bullet-active{
	background-color: #b0352f;
}
.swiper-pagination-bullet{
	margin:0 0.08rem;
}

img[lazy=loading] {
  background-color: rgb(227, 225, 225);
}

</style>
