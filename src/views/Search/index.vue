<template>
  <div class="search">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name:'Search',
}
</script>

<style scoped>
.search {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

</style>