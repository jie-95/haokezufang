<template>
  <div>
    <van-nav-bar
      style="background-color: #21b97a"
      left-arrow
      @click-left="onClickLeft"
    >
      <template slot="title" class="city"> 地图找房 </template>
    </van-nav-bar>
    <h1>暂无数据</h1>
  </div>
</template>

<script>
import { areaMapApi } from "@/api";
export default {
  data() {
    return {};
  },
  // mounted(){
  //   this.getareaMapList()
  // },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/layout/home",
      });
    },
  //   async getareaMapList() {
  //     try {
  //       const res = await areaMapApi({});
  //       console.log(res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  },
}
</script>

<style>
</style>