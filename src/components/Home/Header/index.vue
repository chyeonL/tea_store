<template>
  <div class="header">
    <h1 class="logo">
        <img src="@/assets/images/logo.png" alt="">
    </h1>
    <div class="search" @click="goSearch">
       <i class='iconfont icon-search'></i>
		<span>搜您喜欢的...</span>
    </div>
    <div class="customer-support">
        <i class="iconfont icon-a-kefukefuzhongxin"></i>
    </div>
  </div>
</template>

<script>

export default {
    name:'Header',
    methods:{
        goSearch(){
            this.$router.push('/search')
        }
    }
}
</script>

<style scoped>
.header{
    display: flex;
    height: 1.6rem;
    width: 100%;
    background-color: #b0352f;
    align-items: center;
}

.search{
    width: 6.5rem;
    height: .8rem;
    margin: 0 .5333rem;
    background-color: #fff;
    border-radius: .32rem;
    font-size: .4rem;
    color: rgb(41, 40, 40);
    line-height: .8rem;
}

.search i{
    padding:0 0.16rem;
	color:#ccc;
    padding: 0 .2667rem;
}

.search span{
    color: #ccc;
}

.logo {
    width: 1.6rem;
    height: 100%;
    line-height: 2rem;
}

.logo img {
    width: 130%;
    height: 70%;
}

.customer-support{
    margin-right: .3rem;
}

.customer-support i {
    color: white;
    font-size: .65rem;
}

</style>