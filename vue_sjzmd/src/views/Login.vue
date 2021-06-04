<template>
  <div>
    <!-- 学子商城的一些功能实现 -->
    <h3>用户登录</h3>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
    <mt-button type="primary" @click="login">登录</mt-button>
  </div>
</template>

<script>
import { Login } from "@/assets/js/apis/user.js";

export default {
  data() {
    return {
      uname: "huhu",
      upwd: "123456"
    };
  },
  methods: {
    async login() {
      var uname = this.uname;
      var upwd = this.upwd;
      //验证用户名
      let params = { uname, upwd };

      let result = await Login(params);

      if (result.code == 200) {
        //登录成功
        this.$router.push("/products");
      } else {
        this.$messagebox("错误", result.msg);
      }
      // console.log(result);

      // this.$router.push("/product");
    }
  }
};
</script>

<style>
</style>