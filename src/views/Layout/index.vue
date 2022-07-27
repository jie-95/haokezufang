<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/find" icon="search">找房</van-tabbar-item>
      <van-tabbar-item to="/layout/news" icon="notes-o">资讯</van-tabbar-item>
      <van-tabbar-item to="/layout/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    // name:layout,
    data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>