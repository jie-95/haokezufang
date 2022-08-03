<template>
  <div class="father">
    <!-- // 未登录 -->
    <div class="topHeader" v-if="!isLogin">
      <div class="content">
        <div class="content-s">
          <div class="head">
            <img src="../../assets/imgs/dog.png" alt="" />
          </div>
          <div class="a">游客</div>
          <button @click="goLogin" class="goLogin">去登录</button>
        </div>
      </div>
    </div>
    <!-- // 未登录 -->
    <!-- 已登录 -->
    <div class="topHeader" v-else>
      <div class="content">
        <div class="content-s">
          <div class="head">
            <img
              :src="`http://liufusong.top:8080${userInfoList.avatar}`"
              alt=""
            />
          </div>
          <div class="a">{{ userInfoList.nickname }}</div>
          <div class="outLog" @click="outLog">退出</div>
          <p>编辑个人资料<van-icon name="arrow" /></p>
        </div>
      </div>
    </div>
    <!-- 已登录 -->

    <van-grid :column-num="3" :border="false" style="margin-top: 5px">
      <van-grid-item @click="collect" icon="star-o" text="我的收藏" />
      <van-grid-item @click="1" icon="wap-home-o" text="我的出租" />
      <van-grid-item @click="1" icon="underway-o" text="看房记录" />
      <van-grid-item @click="1" icon="idcard" text="成为房主" />
      <van-grid-item @click="1" icon="user-o" text="个人资料" />
      <van-grid-item @click="1" icon="phone-o" text="联系我们" />
    </van-grid>
    <div class="footer"></div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import { getUserInfoApi } from '@/api'
export default {
  data() {
    return {
      userInfoList: []
    }
  },
  computed: {
    isLogin() {
      return !!this.$store.state.tokenObj.token
    }
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: '/login'
      })
    },
    outLog() {
      Dialog.confirm({
        title: '提示',
        message: '是否确认退出？'
      })
        .then(() => {
          this.$store.commit('SET_TOKEN', {})
        })
        .catch(() => {
          this.$$toast.fail('退出失败请重新尝试')
        })
    },
    async getUserInfo() {
      try {
        const {
          data: { body }
        } = await getUserInfoApi(this.$store.state.tokenObj.token)
        this.userInfoList = body
        console.log(this.userInfoList)
      } catch (error) {
        console.log(error)
      }
    },
    // 中间宫格转跳按钮
    collect() {
      this.$router.push('/collect')
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style scoped lang="less">
.father {
  height: 100%;
  position: relative;
}
.topHeader {
  height: 300px;
  width: 100%;
  background: url('../../assets/imgs/bg.png') no-repeat;
  background-size: 100%;
}

.topHeader .content {
  position: relative;
  width: 100%;
  height: 300px;
}
.topHeader .content-s {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  width: 318px;
  height: 165px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 0 10px 3px #ddd;
}
.topHeader .content-s .head {
  overflow: hidden;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translate(-50%);
  height: 70px;
  width: 70px;
  border: 5px solid #f5f5f5;
  border-radius: 50%;
  // background: url('../../assets/imgs/avatar.png') no-repeat;
  background-size: 100%;
}
.topHeader .content-s .head img {
  width: 100%;
}
.topHeader .content-s .a {
  font-size: 13px;
  margin-top: 50px;
}
.topHeader .content-s .goLogin {
  width: 70px;
  height: 30px;
  margin-top: 20px;
  background-color: #21b97a;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 13px;
}
// 已登录样式
.outLog {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 54px;
  border-radius: 30px;
  color: #fff;
  background: #21b97a;
  font-size: 12px;
  margin-top: 15px;
}
.content-s p {
  color: #999;
  font-size: 12px;
  margin-top: 60px;
}

// 已登录样式
.footer {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 345px;
  height: 84px;
  border-radius: 5px;
  background: url('../../assets/imgs/join.png') no-repeat;
  background-size: 100%;
}
</style>
