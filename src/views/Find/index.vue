<template>
  <div>
    <!-- //顶部 -->
    <div>
      <van-search
        class="search"
        show-action
        disabled
        placeholder="请输入小区或地址"
        @search="onSearch"
      >
        <template slot="label">
          <span @click="areaSearch">北京</span
          ><i class="iconfont icon-arrow" style="font-size: 12px"></i>
        </template>
        <template #action>
          <i @click="onSearch" class="iconfont icon-map"></i>
        </template>
      </van-search>
    </div>
    <!-- //顶部 -->
    <!-- 列表展示 -->
    <div style="height: 55px; width: 100%"></div>
    <!-- 中间区域选择 -->
    <van-dropdown-menu>
      <van-dropdown-item title="区域">
        <van-picker
          show-toolbar
          @confirm="confirm"
          @cancel="cancel"
          @change="onChange"
          toolbar-position="bottom"
          :columns="columns"
        />
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- 中间区域选择 -->
    <div class="list" v-for="item in list" :key="item.houseCode">
      <div class="list-img">
        <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
      </div>
      <div class="list-info">
        <h3>{{ item.title }}</h3>
        <div class="about">{{ item.desc }}</div>
        <div class="tips">{{ item.tags }}</div>
        <div>
          <span class="price">{{ item.price }}</span>
          <span class="yue">元/月</span>
        </div>
      </div>
    </div>

    <!-- 列表展示 -->
  </div>
</template>

<script>
import { getHouseListApi } from '@/api'
export default {
  data() {
    return {
      list: [],
      pickList: [],
      columns: [
        // 第一列
        {
          values: ['区域', '地铁'],
          defaultIndex: 2
        },
        // 第二列
        {
          values: ['上午', '下午', '晚上'],
          defaultIndex: 1
        },
        // 第三列
        {
          values: []
        }
      ]
    }
  },
  mounted() {
    this.onLoad()
  },
  methods: {
    onSearch() {
      // console.log('map')
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
    async onLoad() {
      try {
        const res = await getHouseListApi()
        console.log(res.data.body.list)
        this.list = res.data.body.list
      } catch (e) {
        console.log(e)
      }
    },
    // 下拉列表
    // 确认按钮
    confirm() {
      console.log('确认')
    },
    // 取消按钮
    cancel() {
      console.log('取消')
    },
    onChange(value, index) {
      console.log(value, index)
      // const = this.list.filter((ele) => ele.)
    }
  }
}
</script>

<style scoped lang="less">
.search {
  position: absolute;
  z-index: 1;
  width: 100%;
  background: #21b97a !important;
}

.iconfont {
  color: #fff;
  vertical-align: middle;
}
.list {
  display: flex;
  width: 345px;
  height: 120px;
  padding: 18px 0 0;
  margin-left: 15px;
  border-bottom: 1px solid #ccc;
}
.list-img {
  width: 106px;
  height: 80px;
}
.list-img img {
  width: 100%;
  height: 100%;
}
.list-info {
  padding: 0 0 0 12px;
}
.list-info h3 {
  margin: 0;
  font-size: 15px;
}
.list-info .about {
  font-size: 12px;
  color: #afb2b3;
}
.list-info .tips {
  font-size: 12px;
  color: #39becd;
  background-color: #e1f5f8;
  margin: 0 5px 0 0;
  padding: 4px 5px;
}
.list-info .price {
  font-size: 16px;
  color: #fa5714;
  font-weight: 700;
}
.list-info .yue {
  font-size: 12px;
  color: #fa5714;
}
/* 下拉菜单样式 */
:deep(.van-picker__cancel) {
  width: 125px;
  height: 51px;
  font-size: 18px;
  color: #21b97a;
}
:deep(.van-picker__confirm) {
  width: 250px;
  height: 51px;
  background-color: #21b97a;
  color: #fff;
  font-size: 18px;
}
</style>
