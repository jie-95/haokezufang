<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />

    <div
      class="list"
      v-for="item in collectList"
      :key="item.houseCode"
      @click="details(item.houseCode)"
    >
      <div class="list-img">
        <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
        <!-- <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" /> -->
      </div>
      <div class="list-info">
        <div class="van-ellipsis">{{ item.title }}</div>
        <div class="about">{{ item.desc }}</div>
        <div class="tips">{{ item.tags }}</div>
        <div>
          <span class="price">{{ item.price }}</span>
          <span class="yue">元/月</span>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <van-grid direction="horizontal" :column-num="1">
      <van-grid-item class="van-grid-item__content">
        <img src="../../assets/imgs/dog.png" alt="" />
        <span>qqqqweq</span>
      </van-grid-item>
    </van-grid>
  </div> -->
</template>

<script>
import { getCollectApi } from '@/api'
export default {
  data() {
    return {
      collectList: []
    }
  },
  mounted() {
    this.getCollectList()
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    // 获取收藏列表
    async getCollectList() {
      this.$toast.loading('加载中，请稍后')
      try {
        const { data } = await getCollectApi(this.$store.state.tokenObj.token)
        this.collectList = data.body
        this.$toast.success('加载完成')
      } catch (error) {
        this.$toast.fail('加载失败，请稍后重试')
      }
    },
    // 查看详情页
    details(val) {
      this.$router.push('/details')
    }
  }
}
</script>

<style scoped lang="less">
// 顶部样式
:deep(.van-nav-bar__content) {
  background: #21b97a !important;
}
:deep(.van-nav-bar__arrow) {
  height: 22px;
  width: 22px;
  color: #fff;
}
:deep(.van-nav-bar__title) {
  color: #fff;
  font-size: 18px;
}
// 顶部样式

// 内容样式
// 内容样式
:deep(.van-grid-item__content) {
  display: flex;
  justify-content: space-between;
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
.list-info .van-ellipsis {
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
// 内容样式
</style>
