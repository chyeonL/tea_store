<template>
  <div id="app">
    
    <!--要  缓存的路由-->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    
    <!--不  缓存的路由-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    this.$store.commit('Login/init')
    this.$toast('在线演示，无法使用系统功能仅作展示')
  }
}
</script>