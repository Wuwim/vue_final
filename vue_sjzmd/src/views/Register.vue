<template>
  <div>
    <!-- 学子商城的一些功能实现 -->
    <h3>用户登录</h3>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-button type="primary" @click="reg">注册</mt-button>
  </div>
</template>

<script>
import { reg } from "@/assets/js/apis/user.js";

export default {
  data() {
    return {
      uname: "",
      upwd: "",
      email:"",
      phone:"",
    };
  },
  methods: {
    async reg() {
      var uname = this.uname;
      var upwd = this.upwd;
      var email = this.email;
      var phone = this.phone;
      //验证用户名
      let params = { uname, upwd , email,phone };

      let result = await reg(params);

      if (result.code == 200) {
        //注册成功
        this.$router.push("/login");
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