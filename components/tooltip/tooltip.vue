<template>
  <div class="tip-wrap" v-tipClickOut="hideTooltip" @click="getClickPosition" id="tipWrap">
    <div class="tip-ref">
      <slot></slot>
    </div>
    <div
      v-show="show"
      ref="tips"
      class="tip-content"
      :class="{'too-low':isTooLow}"
      :style="{'right':ctxPosRight, 'left': ctxPosLeft,'top':ctxPosTop}"
    >
      <!-- 上方的三角符号 -->
      <div class="tip-content-triangle-left" v-show="isLeft" :style="{'left':leftTriangle2border}"></div>
      <div
        class="tip-content-triangle-right"
        v-show="isLeft"
        :style="{'left':rightTriangle2border}"
      ></div>
      <div
        class="tip-content-triangle-left"
        v-show="!isLeft"
        :style="{'right':leftTriangle2border}"
      ></div>
      <div
        class="tip-content-triangle-right"
        v-show="!isLeft"
        :style="{'right':rightTriangle2border}"
      ></div>
      <div class="tip-content-text" :class="{'too-low-text':isTooLow}">
        <span>{{context}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import clickOut from "../directives/TipClickOut";
import Vue from 'vue';
Vue.directive("tipClickOut", clickOut);
export default{
  name:'dash-tooltip',
  props:{
    show:{
      type: Boolean
    },
    context:{
      type: String,
      default:''
    },
    reverse:{
      type: Boolean
    }
  },
  data(){
    return {
      // 判断点击位置与axis的距离
      toTop: 0,
      toLeft: 0,
      // 距离插入的组件顶部的距离
      tipHeight: 0,
      // 插槽的高度
      slotHeight: 0,
      // 屏幕尺寸
      screenWidth: 0,
      screenHeight:  0,
      // 左三角挂载位置
      leftTriangle2border: "",
      // 右三角挂载位置
      rightTriangle2border: "",
      // 是否点击在左侧
      isLeft: true,
      // 是否太低
      isTooLow: false
    }
  },
  mounted(){
    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
  },
  computed: {
    // 弹窗的高度
    tipsContentHeight() {
      let width;
      this.isLeft
        ? (width = this.screenWidth - this.toLeft - 6)
        : (width = this.toLeft);
      let lines = Math.floor((this.context.length * 12) / width) + 1;
      return lines * 17 + 36;
    },
    // 对话框位置
    ctxPosRight() {
      if (this.isLeft) {
        return "auto";
      } else {
        return (this.screenWidth - this.toLeft - 25).toString() + "px";
      }
    },
    ctxPosLeft() {
      if (this.isLeft) {
        return (this.toLeft - 25).toString() + "px";
      } else {
        return "auto";
      }
    },
    ctxPosTop() {
      // 声明翻转
      if (this.reverse) {
        return -1 * (this.tipsContentHeight - 8) + `px`;
      }
      // 计算出翻转
      if (this.isTooLow) {
        return -1 * (this.tipsContentHeight - 8) + `px`;
      } else {
        return "28px";
      }
    }
  },
  methods: {
    getClickPosition(e) {
    // console.log(this.ctxPosTop);
    console.log(e);
    this.toTop = e.pageY;
    console.log("toTop" + this.toTop);
    this.toLeft = e.pageX;
    let middleLine = this.screenWidth / 2;
    if (this.toLeft < middleLine) {
      this.isLeft = true;
      this.leftTriangle2border = "15px";
      this.rightTriangle2border = "22.5px";
    } else {
      this.isLeft = false;
      this.rightTriangle2border = "15px";
      this.leftTriangle2border = "22.5px";
    }
    this.$nextTick(() => {
      setTimeout(() => {
        let el = document.getElementById("tipClick");
        let tipWrap = document.getElementById("tipWrap");
        if (el && tipWrap) {
          // slot 距离顶部的距离
          this.tipHeight = tipWrap.offsetTop;
          console.log("tipsHeight" + this.tipHeight);
          console.log("screenHeight" + this.screenHeight);
          this.slotHeight = el.clientHeight;
          // 如果太低 下方剩下的高度<本身加上40
          console.log("自己加40" + (this.tipsContentHeight + 40));

          console.log("tipsHeight" + this.tipHeight);
          console.log("screenHeight" + this.screenHeight);
          console.log("slotHeight" + this.slotHeight);
          console.log(
            "下方剩下的高度" +
              (this.screenHeight - this.tipHeight - this.slotHeight)
          );
          // 手动翻转，直接翻转
          console.log(this.reverse);
          if (this.reverse) {
            this.isTooLow = true;
          } else {
            // 否则 计算一下是不是需要翻转。
            this.screenHeight - this.tipHeight - this.slotHeight <
            this.tipsContentHeight + 40
              ? (this.isTooLow = true)
              : (this.isTooLow = false);
          }
        }
      });
    });
  },
    hideTooltip(el){
      this.$emit("update:show", false);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/var.less";
// @import "../../common/common.less";
.tip-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  .tip-content {
    position: absolute;
    // top: 28px;
    &.too-low {
      transform: rotateX(-180deg);
    }
    .tip-content-text {
      // right: 11px;
      // max-width: 95%;
      font-size: 12px;
      line-height: 14px;
      color: white;
      background-color: @theme-color;
      padding: 14px 12px 14px 15px;
      margin: 0 5px;
      border-radius: 4px;
      z-index: 1;
      &.too-low-text {
        transform: rotateX(-180deg);
      }
    }
    .tip-content-triangle-left {
      content: "";
      position: absolute;
      // right: 27px;
      // 2*4-1 px
      top: -7px;
      // border: 8px solid;
      border-top: 4px solid;
      border-bottom: 4px solid;
      border-left: 3.75px solid;
      border-right: 3.75px solid;
      border-color: transparent @theme-color @theme-color transparent;
    }
    .tip-content-triangle-right {
      content: "";
      position: absolute;
      // right: 27px;
      // 2*4-1 px
      top: -7px;
      // border: 8px solid;
      border-top: 4px solid;
      border-bottom: 4px solid;
      border-left: 3.75px solid;
      border-right: 3.75px solid;
      border-color: transparent transparent @theme-color @theme-color;
    }
  }
}
</style>