<template>
  <div class="main">
    <dash-tooltip :show.sync="show1" context="测试气泡框，试一试吧">
      <button @click="showTip1" id="tipClick">show1show1show1show1</button>
    </dash-tooltip>
    <div class="blank"></div>
    <dash-tooltip :show.sync="show2" context="测试气泡框，试一试吧" reverse>
      <button @click="showTip2" id="tipClick">show2show2show2show2</button>
    </dash-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      reverse: true
    };
  },
  methods: {
    showTip1() {
      this.show1 = !this.show1;
    },
    showTip2() {
      this.show2 = !this.show2;
    }
  }
};
</script>

<style lang="less" scoped>
  .main{
    position: relative;
    .blank{
      height: 50vh;
    }
  }
</style>
