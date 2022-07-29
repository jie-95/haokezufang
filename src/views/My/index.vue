<template>

 <div class="father">
    <div class="topHeader">
      <div class="content">
        <div class="content-s">
          <div class="head">头像</div>
          <div class="a">游客</div>
          <button @click="goLogin" class="goLogin">去登录</button>
        </div>
      </div>
    </div>
    
      <van-grid :column-num="3" :border="0" style="margin-top: 5px">
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="underway-o" text="看房记录" />
        <van-grid-item icon="idcard" text="成为房主" />
        <van-grid-item icon="user-o" text="个人资料" />
        <van-grid-item icon="phone-o" text="联系我们" />
      </van-grid>
    <div class="footer"></div>
    
</div>
 
</template>

<script>
export default {
  methods:{
    goLogin(){
      this.$router.push({
        path:"/login",
      })
    }
  }
};
</script>

<style scoped>
.father{
  height: 100%;
  position: relative;
}
.topHeader {
  height: 300px;
  width: 100%;
  background: url("../../assets/imgs/bg.png") no-repeat;
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
  box-shadow: 0 0 10px 3px #ddd
}
.topHeader .content-s .head {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translate(-50%);
  height: 70px;
  width: 70px;
  border: 5px solid #f5f5f5;
  border-radius: 50%;
  background: url("../../assets/imgs/avatar.png") no-repeat;
  background-size: 100%;
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
.footer {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 345px;
  height: 84px;
  border-radius: 5px;
  background:url("../../assets/imgs/join.png") no-repeat;
  background-size: 100%;
}
</style>