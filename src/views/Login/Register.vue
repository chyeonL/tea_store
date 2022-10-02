<template>
  <div class="login">
    <Header>
      <span>注册</span>
    </Header>
    <main>
      <form onsubmit="return false">
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
        <div class="pwd">
          <input type="password" v-model="userPwd" placeholder="请输入密码" />
        </div>
        <div class="pwdAgain">
          <input
            type="password"
            v-model="pwdAgain"
            placeholder="再次输入密码"
          />
        </div>
        <div class="goRegister">
          <button @click="goRegister">注册</button>
        </div>
        <div class="agree">
          <span class="a"><input type="checkbox" :checked="checked" @click="checked=!checked"/></span>
          您已阅读并同意遵守<a href="javascript:;">用户协议</a>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      userTel: "",
      code: "",
      userPwd: "",
      pwdAgain: "",
      //验证规则
      rules: {
        //手机号验证
        userTel: {
          rule: /^1[23456789]\d{9}$/,
          msg: "手机号不能为空，要求11位数字",
        },
        //密码验证
        userPwd: {
          rule: /^\w{6,12}$/,
          msg: "密码不能为空，要求6-12位任意字符",
        },
      },
      disabled: false,
      timer: null,
      codeMsg: "获取短信验证码",
      codeVerification: "",
      checked: false,
    };
  },
  methods: {
    goRegister() {
      // 简单的表单验证
      if (!this.validate("userTel") || !this.validate("userPwd")) return;

      if (!this.code) return this.$toast("验证码为空");

      if (!this.checked) return this.$toast("请先阅读用户协议");

      // 登录和注册同时
      if (this.code != this.codeVerification) {
        this.$toast("验证码错误");
        return false;
      } else if (this.userPwd != this.pwdAgain) {
        this.$toast("请输入相同的密码");
        return false;
      } else {
        this.$store
          .dispatch("Login/register", {
            userTel: this.userTel,
            userPwd: this.userPwd,
          })
          .then((res) => {
            console.log(res);
            this.$toast(res.msg);
              if (this.$route.query.redirect)
                this.$router.push(this.$route.query.redirect);
              else this.$router.push("/my");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    // 短信验证码       13763334852
    sendCode() {
      // 先验证手机号
      if (!this.validate("userTel")) return;
      // 通过后，按钮效果改变
      this.disabled = true;
      let countdown = 6;
      this.timer = setInterval(() => {
        if (countdown > 0) {
          this.codeMsg = `${countdown}秒后可重新发送`;
          countdown--;
        } else {
          countdown = 6;
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
          this.code = this.codeVerification;
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

    .pwd,
    .pwdAgain {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      input {
        width: 100%;
      }
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

    .goRegister button {
      width: 100%;
      height: 100%;
      border: none;
      color: #fff;
      background-color: #b0352f;
      font-size: 0.5333rem;
      border-radius: 0.2rem;
    }

    .agree {
      display: flex;
      width: 100%;
      height: 0.6667rem;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;
      font-size: 0.35rem;
      .a {
        width: 0.35rem;
        height: 100%;
        margin: 0 0.1rem;
        input {
          width: 100%;
          height: 100%;
        }
      }
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

a {
  color:#b0352f;
  text-decoration: underline;
}

</style>
