<template>
  <div class="collapse-item" @click="handleShow" :class="{'disabled':disabled}">
    <div class="title-bar">
      <div v-if="this.icon" class="icon" :style="{backgroundImage:'url('+this.icon+')'}"></div>
      <h3 class="item-title" :class="{'left-side': !this.icon}">{{name}}</h3>
      <div class="arrow" :class="{'up': isActive}"></div>
    </div>
    <p class="content-bar" v-show="isActive">
      <slot></slot>
    </p>
  </div>
</template>
<script>
import Emitter from "../../mixins/emitter";

export default {
  name: "dash-collapse-item",
  componentName: "collapse-item",
  mixins: [Emitter],
  inject: ["collapse"],
  props: {
    index: {
      type: Number,
      default: -1
    },
    icon: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    type: {
      type: [Boolean, Number],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    }
  },
  methods: {
    handleShow() {
      this.dispatch("collapse", "on-show", this);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../common/common.less";
.collapse-item {
  width: 100%;
  // border-top: 1px solid #e1e5e6;
  border-bottom: 1px solid #e1e5e6;
  .title-bar {
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    .icon {
      width: 32px;
      height: 32px;
      transform: scale(0.5);
      z-index: 1000;
      margin: 0 10px 0 15px;
    }
    .item-title {
      font-family: PingFang-SC-Bold;
      font-size: 16px;
      color: #323233;
      letter-spacing: 0.18px;
      &.left-side {
        margin-left: 20px;
      }
    }
    .arrow {
      position: absolute;
      top: 25px;
      right: 6px;
      width: 16px;
      height: 16px;
      background: transparent url("../../src/assets/images/arrow.png") no-repeat
        center center;
      background-size: 16px 16px;
      transform: rotate(-90deg);
      &.up {
        transform: rotate(0);
      }
    }
  }
  .content-bar {
    margin-top: 14px;
    margin-bottom: 14px;
    line-height: 21px;
    padding: 0 26px 0 28px;
    font-size: 14px;
    text-align: justify;
    color: #7d7e80;
  }
}
</style>
