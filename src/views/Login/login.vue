<template>
  <div class="login">
    <Header>
      <span>登录</span>
    </Header>
    <main>
      <form onsubmit="return false" autocomplete="on">
        <div class="phoneNumer">
          <input
            type="text"
            v-model="userTel"
            placeholder="请输入手机号"
            pattern="[0-9]*"
          />
        </div>
        <div class="code">
          <input
            type="text"
            v-model="code"
            placeholder="请输入短信验证码"
            pattern="[0-9]*"
          />
          <button
            @click="sendCode"
            :disabled="disabled"
            :class="{ disable: disabled }"
          >
            {{ codeMsg }}
          </button>
        </div>
        <div class="goLogin">
          <button @click="goLogin">登录</button>
        </div>
      </form>

      <div class="approach">
        <div class="pwd" @click="byPwd">密码登录</div>
        <div class="register" @click="goRegister">快速注册</div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userTel: "",
      code: "",
      //验证规则
      rules: {
        //手机号验证
        userTel: {
          rule: /^1[23456789]\d{9}$/,
          msg: "手机号不能为空，要求11位数字",
        },
      },
      disabled: false,
      timer: null,
      codeMsg: "获取短信验证码",
      codeVerification: "",
    };
  },
  methods: {
    byPwd() {
      this.$router.push({
        name: "LoginPwd",
        // // 可以隐式传参，不需要到路由中心改路径
        // // 地址栏会隐藏起来具体的数据，而是显示id
        // // 即使在router加上占位符，也不会显示具体
        // // 但是要记得带上name:''
        // params:{
        //   id:222
        // },
        // // 显式传参，查询字符串
        // query:{
        //   name:'dd'
        // }
        // // 当然可以一起传参
      });
    },

    goRegister() {
      this.$router.push("/register");
    },

    // 短信验证码       13763334852
    sendCode() {
      // 先验证手机号
      if (!this.validate("userTel")) return;
      // 通过后，按钮效果改变
      this.disabled = true;
      let countdown = 60;
      this.timer = setInterval(() => {
        if (countdown > 0) {
          this.codeMsg = `${countdown}秒后可重新发送`;
          countdown--;
        } else {
          countdown = 60;
          this.codeMsg = "获取短信验证码";
          this.disabled = false;
          clearInterval(this.timer);
        }
      }, 1000);
      // 发请求获取验证码
      this.$store
        .dispatch("Login/getCode", this.userTel)
        .then((res) => {
          console.log(res.data, res);
          this.codeVerification = res.data;
          this.code = this.codeVerification;    //  自动填充
        })
        .catch((err) => {
          console.log(err);
        });
    },

    validate(key) {
      if (!this.rules[key].rule.test(this[key])) {
        this.$toast(this.rules[key].msg);
        return false;
      }
      return true;
    },

    // 登录
    goLogin() {
      // 验证码正确
      if (this.code != this.codeVerification) {
        this.$toast("验证码错误");
        return false;
      }
      // 有没有该手机号的用户
      else {
        this.$store
          .dispatch("Login/loginByTel", { userTel: this.userTel })
          .then((res) => {
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
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
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

    .code {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      input {
        // flex: 1;
        width: 60%;
      }

      button {
        width: 40%;
        height: 100%;
        line-height: 1.173333rem;
        border: 0;
        color: #fff;
        background-color: #b0352f;
        border-radius: 0.2rem;
        font-size: 0.35rem;
        &.disable {
          background-color: rgba(176, 53, 47, 0.676);
        }
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
    line-height: 0.8rem;
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
    height: 100%;
    padding-left: 0.2667rem;
    border: 0.0267rem solid #ccc;
    font-size: 0.4rem;
    background-color: #fff;
    box-sizing: border-box;
  }
}
</style>
