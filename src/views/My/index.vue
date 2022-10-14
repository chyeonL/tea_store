<template>
  <div id="my">
    <header>
      <div class="userInfo" v-show="isLogin">
        <div class="avatar">
          <img :src="userInfo.avatar" alt="" />
        </div>
        <div class="name">{{ userInfo.name }}</div>
      </div>
      <div class="login" @click="goLogin" v-show="!isLogin">登录/注册</div>
    </header>

    <!-- <router-link to='/login'>登录</router-link> -->
    <main>
      <ul>
        <li @click="$router.push('/address')">地址管理</li>
        <!-- <li @click="$router.push('/allOrders')">所有订单</li> -->
        <li >所有订单</li>
        <li @click="logout">退出登录</li>
      </ul>
    </main>
    <Tabbar />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "My",
  computed: {
    ...mapState({
      //没有开启命名空间的写法
      isLogin: (state) => state.Login.isLogin,
      userInfo: (state) =>
        state.Login.userInfo || {
          avatar: undefined,
          name: undefined,
        },
    }),
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },

    logout() {
      if (!JSON.parse(localStorage.getItem("isLogin"))) {
        this.$toast("请先进行登录");
        return
      }
      else {
        this.$store.commit("Login/LOGOUT");
        if (!JSON.parse(localStorage.getItem("isLogin"))) {
          this.$toast("退出成功");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#my {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.266666rem;
    background-color: #b0352f;
    .login {
      padding: 0.16rem 0.4rem;
      font-size: 0.5rem;
      color: #fff;
      background-color: #f6ab32;
      border-radius: 6px;
    }

    .userInfo {
      display: flex;
      // width: 2.6667rem;
      flex-direction: column;
      align-items: center;
      .avatar {
        width: 2rem;
        height: 2rem;
        overflow: hidden;
        border-radius: 1.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .name {
        padding: 0.2667rem 0;
        color: #fff;
        font-size: 0.48rem;
      }
    }
  }

  main {
    flex: 1;
    overflow: hidden;
    background-color: #f6f6f6;
    ul {
      width: 100%;
      margin: 0.4rem 0;
      padding: 0.2667rem;
      font-size: 0.45rem;
      background-color: #fff;
      li {
        height: 1.3rem;
        line-height: 1.3rem;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>
