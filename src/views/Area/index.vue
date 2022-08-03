<template>
  <div>
    <van-nav-bar
      style="background-color: #21b97a"
      left-arrow
      @click-left="onClickLeft"
    >
      <span slot="title" class="city"> 城市列表 </span>
    </van-nav-bar>

    <p>当前城市</p>
    <van-index-bar class="hot">
      {{place}}
    </van-index-bar>
    <p>热门城市</p>
    <van-index-bar class="hot">
      <van-cell
        :title="item.label"
        v-for="item in hotList"
        :key="item.label"
        @click="btnCity(item.label)"
      ></van-cell>
    </van-index-bar>
    <p>城市列表</p>
    <van-index-bar class="hot">
      <van-cell v-for="item in cityList" :key="item.label">
        <span slot="title" @click="btnCity(item.label)">
          {{ item.label }}
        </span>
      </van-cell>
    </van-index-bar>
  </div>
</template>

<script>
import { areaHotApi, areaCityApi } from '@/api'
export default {
  data() {
    return {
      hotList: [],
      cityList: [],
      place: '北京'
    }
  },

  mounted() {
    this.getAreaHotList()
    this.getAreaCityList()
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: '/layout/home'
      })
    },

    async getAreaHotList() {
      try {
        const res = await areaHotApi()
        this.hotList = res.data.body
        // console.log(this.hotList);
      } catch (e) {
        console.log(e)
      }
    },
    async getAreaCityList() {
      try {
        const res = await areaCityApi(1)
        this.cityList = res.data.body
        console.log(this.cityList)
      } catch (e) {
        console.log(e)
      }
    },
    btnCity(val) {
      this.place = val
      console.log(this.place)
      this.$emit('cityPlace', val)
    }
  }
}
</script>

<style>
p {
  font-size: 14px;
  color: #999999;
  padding: 10px 15px;
}
.van-nav-bar__title {
  font-size: 18px !important;
  color: #fff !important;
}
.van-icon-arrow-left:before {
  color: #fff !important;
}
.van-cell__title {
  /* padding: 0 15px !important; */
  font-size: 16px;
}
</style>
