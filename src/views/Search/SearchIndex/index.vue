<template>
  <div class="searchindex">
    <Header />
    <section>
      <div class="search-history" v-if="searchArr.length">
        <h2>
          <div class="title"><i class="iconfont icon-lishi"></i>历史搜索</div>
          <div class="clear" @click="clearHistory">清除历史记录</div>
        </h2>
        <ul>
          <li v-for="(item, index) in searchArr" :key="index" @click="serachHistory(item)">{{ item }}</li>
        </ul>
      </div>
      <div v-else class="noHistory">暂无搜索记录……</div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Search/Header";
import { MessageBox } from "mint-ui";
export default {
  name: "SearchIndex",
  components: { Header },
  data() {
    return {
      searchArr: JSON.parse(localStorage.getItem("searchArr")) || [],
    };
  },
  methods: {
    // 清除历史
    clearHistory() {
      MessageBox({
        title: "提示",
        message: "确定执行此操作?",
        showCancelButton: true,
      }).then((res) => {
        // console.log(res);        //confirm OR cancel
        if (res == "confirm") {
          localStorage.removeItem("searchArr");
          this.searchArr = [];
        }
      });
    },

    // 点击搜索历史记录
    serachHistory(item) {
      this.$bus.$emit("searchHistory", item);
    },
  },
};
</script>

<style scoped lang='scss'>
.searchindex {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f5f5f5;
}

section {
  flex: 1;
  overflow: hidden;
}

.search-history h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  padding: 0.6rem;
  font-weight: normal;
  .title {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  i {
    font-size: 0.4rem;
    padding-right: 0.1333rem;
    color: #b0352f;
  }

  .clear {
    text-align: right;
  }
}

.search-history ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.6rem;
  li {
    padding: 0.13rem 0.17rem;
    margin: 0.1333rem 0.2667rem 0.1333rem 0;
    font-size: 0.3733rem;
    border: 0.0267rem solid #ccc;
  }
}

.noHistory {
  margin: 0.5333rem auto;
  text-align: center;
}
</style>
