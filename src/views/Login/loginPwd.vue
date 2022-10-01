<template>
  <div class="login">
    <Header>
        <span>登录</span>
    </Header>
    <main>
        <form onsubmit='return false'>
            <div class="phoneNumer">
                <input type="text" v-model="userTel" placeholder="请输入手机号" pattern="[0-9]*">
            </div>
            <div class="pwd">
                <input type="password" v-model="userPwd" placeholder="请输入密码">
            </div>
            <div class="goLogin">
                <button @click="goLogin">登录</button>
            </div>
        </form>

        <div class="approach">
            <div class="pwd" @click="byMsg">短信登录</div>
            <div class="register" @click="goRegister">快速注册</div>
        </div>

    </main>
  </div>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  name: "Login",
  components: { Header },
  data() {
    return {
      userTel: "",
      userPwd: "",
      //验证规则
      rules: {
        //手机号验证
        userTel: {
          rule: /^1[23456789]\d{9}$/,
          msg: "手机号要求11位数字",
        },
        //密码验证
        userPwd: {
          rule: /^\w{6,12}$/,
          msg: "密码要求6-12位任意字符",
        },
      },
    };
  },
  methods: {
    byMsg() {
      this.$router.push("/login");
    },

    goRegister() {
      this.$router.push("/register");
    },

    goLogin() {
      //前端验证
      if(!this.userTel) return this.$toast('请输入手机号')
      if(!this.userPwd) return this.$toast('请输入密码')
      if (!this.validate("userTel") || !this.validate("userPwd")) return;

      // 后端验证
      this.$store.dispatch("Login/loginByPwd", {
        userTel: this.userTel,
        userPwd: this.userPwd,
      }).then(res=>{
        console.log(res);
            if (res.success) {
              this.$toast(res.msg);
              if (this.$route.query.redirect)
                this.$router.push(this.$route.query.redirect);
              else this.$router.push("/my");
            } else {
              this.$toast(res.msg);
            }
      })
    },

    validate(key) {
      if (!this.rules[key].rule.test(this[key])) {
        // 如果正则验证不通过
        this.$toast(this.rules[key].msg);
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped lang='scss'>
.login {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  Header {
    width: 100vw;
    height: 1.2rem;
    background-color: #b0352f;
  }
}

main {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  width: 100%;
  background-color: #f4f4f4;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    margin: 0.8rem auto 0;
    div {
      width: 100%;
      height: 1.173333rem;
      margin-bottom: 0.8rem;
    }

    .phoneNumer input {
      width: 100%;
      line-height: 1.173333rem;
    }

    .pwd {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      input {
        width: 100%;
      }
    }

    .goLogin button {
      width: 100%;
      height: 100%;
      border: none;
      color: #fff;
      background-color: #b0352f;
      font-size: 0.5333rem;
      border-radius: 0.2rem;
    }
  }

  .approach {
    width: 85%;
    height: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: -0.2667rem auto;
    font-size: 0.48rem;
    .pwd {
      float: left;
    }

    .register {
      float: right;
    }
  }

  input {
    background-color: #fff;
    border: 0.0267rem solid #ccc;
    font-size: 0.45rem;
    height: 100%;
    padding-left: 0.4rem;
    box-sizing: border-box;
  }
}
</style>