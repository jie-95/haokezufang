<template>
  <div class="container">
    <van-search
      class="search"
      v-model="value"
      show-action
      disabled
      placeholder="请输入小区或地址"
      @search="onSearch"
    >
      <template slot="label">
        <span @click="areaSearch">{{ place }}</span
        ><i class="iconfont icon-arrow" style="font-size: 12px"></i>
      </template>
      <template #action>
        <div @click="onSearch">
          <i class="iconfont icon-map"></i>
        </div>
      </template>
    </van-search>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item.id">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 中间导航 -->
    <van-grid style="padding: '10px 0'" class="centerImg">
      <van-grid-item text="整租" @click="btn1">
        <img src="../../assets/imgs/1.png" alt="" />
        <h2>整租</h2>
      </van-grid-item>
      <van-grid-item text="合租" @click="btn1">
        <img src="../../assets/imgs/2.png" alt="" />
        <h2>合租</h2>
      </van-grid-item>
      <van-grid-item text="地图找房" @click="btn1">
        <img src="../../assets/imgs/3.png" alt="" />
        <h2>地图找房</h2>
      </van-grid-item>
      <van-grid-item text="去出租" @click="btn2">
        <img src="../../assets/imgs/4.png" alt="" />
        <h2>去出租</h2>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组 -->
    <div class="team">
      <div class="text">
        <h3>租房小组</h3>
        <h4>更多</h4>
      </div>
      <van-grid direction="horizontal" :column-num="2" :gutter="10">
        <van-grid-item v-for="item in groupsList" :key="item.id">
          <van-image :src="`http://liufusong.top:8080${item.imgSrc}`" />
          {{ item.title }}<br />
          {{ item.desc }}
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import '@/assets/font/iconfont.css/'
import { swiperApi, groupsApi } from '@/api'
export default {
  name: 'Home',
  data() {
    return {
      value: '',
      swiperList: [],
      groupsList: [],
      place: '北京'
    }
  },
  components: {},
  methods: {
    onSearch() {
      console.log('map')
      this.$router.push({
        path: '/map'
      })
    },
    areaSearch() {
      // console.log("area");
      this.$router.push({
        path: '/area'
      })
    },

    async getSwiperList() {
      try {
        const res = await swiperApi()
        // console.log(res.data.body);
        this.swiperList = res.data.body
        // console.log(this.swiperList);
      } catch (e) {
        console.log(e)
      }
    },

    async getGroupsList() {
      try {
        const res = await groupsApi()
        // console.log(res.data.body);
        this.groupsList = res.data.body
      } catch (e) {
        console.log(e)
      }
    },
    btn1() {
      this.$router.push({
        path: '/layout/find'
      })
    },
    btn2() {
      this.$router.push({
        path: '/login'
      })
    }
    //   city(val){
    //     this.$bus.$on('cityPlace',val){}
    // },
  },
  mounted() {
    this.getSwiperList()
    this.getGroupsList()
  }
}
</script>
<style>
/* 轮播图样式 */
.container {
  position: relative;
  background-color: #f6f5f6;
  padding: '5px,5px,5px,8px';
}
.container i {
  font-size: 25px;
  vertical-align: middle;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
}
.my-swipe .van-swipe-item img {
  width: 100%;
}
.container .search {
  position: absolute;
  z-index: 1;
  width: 100%;
  background: rgba(0, 0, 0, 0) !important;
}
.container .team {
  padding-bottom: 10px;
}
.container .team .text {
  display: flex;
  justify-content: space-between;
  margin: 15px 10px 15px 10px;
}
.container .team .text h3 {
  font-size: 15px;
  padding: 0;
  margin: 0;
}
.container .team .text h4 {
  font-weight: 400;
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.container .team img {
  width: 50px !important;
  height: 50px !important;
  font-size: 14px;
  margin: 0 10px;
}
.centerImg img {
  width: 60px;
  height: 60px;
}
.centerImg h2 {
  font-size: 14px;
  font-weight: 400;
  margin: 12px 0;
}
</style>
