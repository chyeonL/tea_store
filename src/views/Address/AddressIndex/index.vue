<template>
  <div class="addressIndex">
    <header>
      <div class="back" @click="$router.back()">
        <i class="iconfont icon-xiangzuojiantou"></i>
      </div>
      <div class="title">
        <span>我的地址</span>
      </div>
      <div class="home" @click="$router.push('/')">
        <!-- <img src="@/assets/images/home.png" /> -->
      </div>
    </header>

    <main>
      <ul class="addressList" v-if="addressList.length">
        <li @click="editAddress(add)" v-for="add in addressList" :key="add.id">
          <div class="basic">
            <span class="name">{{ add.name }}</span>
            <span class="tel">{{ add.tel }}</span>
          </div>
          <div class="addres">
            <span class="default" v-show="add.isDefault == 'true'">[默认]</span>
            {{ add.province }} {{ add.city }} {{ add.county }}
            {{ add.addressDetail }}
          </div>
          <div class="choose" v-show="selectStatus" @click="goOrder(add)">
            选择
          </div>
        </li>
      </ul>
      <p v-else>暂无地址信息</p>
      <div class="addAddress" @click="addAddress" v-show="!selectStatus" >添加地址</div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { mapState } from "vuex";
import bus from '@/api/bus.js'

export default {
  name: "AddressIndex",
  data() {
    return {
      selectStatus: false,
      path: "/my",
    };
  },
  components: { Header },
  created() {
    this.$store.dispatch("getAddress").then((res) => {
      // console.log(res);
    });
    // console.log(this.$route);
    if (this.$route.query.type) {
      this.selectStatus = true;
    }
  },
  computed: {
    ...mapState({
      addressList: (state) => state.Address.addressList,
    }),
  },
  methods: {
    // 跳转的时同一个页面
    addAddress() {
      this.$router.push("/addressEdit");
    },

    // 跳转编辑地址页面，并携带对应address对象
    editAddress(item) {
      if(this.selectStatus) return;
      this.$router.push({
        name: "AddressEdit",
        params: item,
      });
    },

    goOrder(add) {
        bus.$emit("selectPath", JSON.stringify(add));
        this.$router.back();
        return;
    },
  },
};
</script>

<style scoped lang="scss">
.addressIndex {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

main {
  display: flex;
  width: 100%;
  overflow: hidden;
  flex: 1;
  flex-direction: column;
  background-color: #f6f6f6;

  .addressList {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: 0.2667rem;

    li {
      position: relative;
      display: flex;
      width: 100%;
      padding: 0.4rem;
      margin-bottom: 0.4rem;
      flex-direction: column;
      justify-content: space-around;
      font-size: 0.4267rem;
      background-color: #fff;
      .basic {
        margin-bottom: 0.2133rem;

        .name {
          margin-right: 0.4rem;
        }
      }

      .choose {
        position: absolute;
        width: 2rem;
        height: 1.0667rem;
        top: 0.6133rem;
        right: 1rem;
        text-align: center;
        line-height: 1.0667rem;
        color: #fff;
        background-color: #b0352f;
        border-radius: 0.2667rem;
      }

      .default {
        color: red;
      }
    }
  }

  .addAddress {
    width: 3rem;
    height: 1rem;
    line-height: 1rem;
    margin: 0.5333rem auto;
    color: #fff;
    font-size: 0.45rem;
    background-color: #b0352f;
    text-align: center;
    border-radius: 0.2667rem;
  }

  p {
    margin: 1rem auto;
    font-size: 0.48rem;
    text-align: center;
  }
}

header {
  width: 100vw;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #b0352f;

  .back {
    margin-left: 0.4333rem;
  }

  .back i {
    color: #fff;
    font-size: 0.4733rem;
  }

  .home {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 0.3rem;
    img {
      height: 70%;
    }
  }

  .title {
    color: #fff;
    font-size: 0.5333rem;
  }
}
</style>
