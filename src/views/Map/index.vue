<template>
  <div>
    <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    

  </div>
</template>

<script>

export default {
    data() {
    return { areaList };
  },
    methods:{
    onClickLeft(){},
    onClickRight(){}
  }
};
</script>

<style>
</style>