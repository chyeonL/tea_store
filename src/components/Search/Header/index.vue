<template>
  <div class="header">
    <div class="left" @click="$router.back()">
        <i class="iconfont icon-xiangzuojiantou"></i>
    </div>
    <div class="middle">
        <i class="iconfont icon-search"></i>
        <form onsubmit='return false' @keyup.enter='goSearchList'>
            <input type="text" placeholder="搜索你喜欢的产品" v-model="input"/>    
        </form>      
    </div>
    <div class="right" @click="goSearchList">搜索</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
        input:'',
        searchArr: JSON.parse(localStorage.getItem('searchArr')) || []
    }
  },
  created() {
    // 输入的关键字，在搜索详情野的input中显示出来
    if(this.$route.query){
      this.input = this.$route.query.key
    }

    // 点击以往的搜索历史，搜索
    this.$bus.$on('searchHistory',(item)=>{
      this.input = item
      this.goSearchList()
    })
  },
  methods:{
    goSearchList(){
        if(!this.input) return          //搜索的关键字为空
        // 本地存储不管存进去什么值，返回的都是string
        this.searchArr.unshift(this.input.trim())
        // new set() 去重
        // Array.from() 创建一个数组实例
        let newArr = new Set(this.searchArr)            //这里newArr是一个对象
        localStorage.setItem('searchArr',JSON.stringify(Array.from(newArr)))

        // 第一次搜索后，如果第二次搜索还是同样的词，return，不然报错
        if(this.input.trim() == this.$route.query.key)  return

        this.$router.push({
          name:'SearchList',
          query:{
            key:this.input.trim()
          }
        })
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.17334rem;
  background-color: #b0352f;
  color: white;
}

.middle {
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 6.933333rem;
	  height: 0.8rem;
    font-size: .45rem;
    border-radius: .4rem;
}

.middle form{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.middle input{
    width: 100%;
    margin-right: .4rem;
    color:black;
}

.middle i{
    padding: 0 .2667rem;
    color:#666666;
}

.left {
    font-size:0.6rem;
}

.right {
    font-size:.48rem;
}

.left,.right {
    padding: 0 .4rem;
} 

</style>
