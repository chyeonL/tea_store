<template>
  <header>
      <div class="simple" v-show="showHeader">        
        <i class="iconfont icon-xiangzuojiantou" @click="$router.back()"></i>
        <i class="iconfont icon-a-kefukefuzhongxin"></i>
      </div>

      <div class="complex" v-show="!showHeader" :style="{opacity:opac > 1? 1:opac}">
        <i class="iconfont icon-xiangzuojiantou" @click="$router.back()"></i>
        <div class="tab">
            <span class="brief">简介</span>
            <span class="comment">评价</span>
            <span class="detail">详情</span>
            <span class="recommend">推荐</span>
        </div>
        <i class="iconfont icon-a-kefukefuzhongxin"></i>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isShow: false,
    };
  },
  props:['opac','showHeader']
};
</script>

<style lang='scss' scoped>
.simple,
.complex {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}

i {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0 0.266rem;
  line-height: 0.9rem;
  text-align: center;
  border-radius: 0.6rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.simple {
  justify-content: space-between;
  color: #fff;
  font-size: 0.35rem;
}

.complex {
  background-color: #fff;
  justify-content: space-between;
  i {
    background-color: transparent;
  }
  .tab {
    display: flex;
    align-items: center;
  }
  .tab span {
    display: inline-block;
    padding: 0 .4rem;
    font-size: .4rem ;
  }
}
</style>