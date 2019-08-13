<template>
  <div class="pop-up" id="popup">
    <dash-button @click="handleShow">显示popup-l2r</dash-button>
    <dash-popup :visible.sync="showPop" position="l2r"/>
    <dash-button @click="handleShow1">显示popup-t2b</dash-button>
    <dash-popup :visible.sync="showPop1" position="t2b" container="#popup"/>
    <dash-button @click="handleShow2">显示popup-b2t</dash-button>
    <dash-popup :visible.sync="showPop2" position="b2t"/>
    <dash-button @click="handleShow3">显示popup-r2l</dash-button>
    <dash-popup :visible.sync="showPop3" position="r2l">
      <h2>1234</h2>
    </dash-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPop: false,
      showPop1: false,
      showPop2: false,
      showPop3: false
    };
  },
  methods: {
    handleShow() {
      this.showPop = true;
    },
    handleShow1() {
      this.showPop1 = true;
    },
    handleShow2() {
      this.showPop2 = true;
    },
    handleShow3() {
      this.showPop3 = true;
    }
  }
};
</script>

<style lang="less" scoped>
.pop-up{
  margin-top: 70px;
  border: 1px solid #000;
}
</style>
