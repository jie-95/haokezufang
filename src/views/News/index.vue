<template>
  <div>
    <van-field
      readonly
      clickable
      label="城市"
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      showPicker: false,
      columns: [
        {
          values: ['区域', '地铁'],
          defaultIndex: 0
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
  methods: {
    onConfirm(value) {
      this.value = value
      this.showPicker = false
    }
  }
}
</script>

<style></style>
