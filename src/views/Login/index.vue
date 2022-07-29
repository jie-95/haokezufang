<template>
  <div>
    <div>
      <van-nav-bar
        style="background-color: #21b97a"
        left-arrow
        @click-left="onClickLeft"
      >
        <template slot="title" class="city"> 账号登陆 </template>
      </van-nav-bar>
    </div>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button style="background-color:#1cb676" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <div class="newUser">
        <a href="#">还没有账号，去注册~</a>
      </div>
    </van-form>
  </div>
</template>

<script>
import {LoginApi} from "@/api/index"
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
   async onSubmit() {
      try {
        const res = await LoginApi(this.username, this.password)
      console.log(res.data.body.token);
      window.localStorage.setItem('TOKEN',JSON.stringify(res.data.body.token))
      this.$toast.success("登录成功")
      this.$router.push({
        path:"/layout/home"
      })
      }catch (e) {
        this.$toast.fail("登录失败")
        console.log(e);
      }
    },
    onClickLeft() {
    this.$router.push({
      name: "layout",
    });
  },
  },
  
};
</script>

<style scoped>
    .van-field{
        height: 60px;
        line-height: 60px;
        padding:2px 0;
        margin: 0 20px;
    }
    .newUser {
        height: 20px;
        text-align: center;

    }
    .newUser a {
        display: inline-block;
        color: #666;
    }
</style>