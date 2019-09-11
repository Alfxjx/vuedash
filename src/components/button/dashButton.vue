<template>
  <div
    class="dash-button"
    @click="handleBtnClick"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @touchstart="mouseDown"
    @touchend="mouseUp"
    :style="{borderRadius:computedRadius}"
    :class="[
    buttonType,
    buttonSize,
    {
      'mouse-down':isMouseDown,
      'disabled': disabled
    }]"
  >
    <slot v-if="$slots.default"></slot>
    <span v-else>{{content}}</span>
  </div>
</template>

<script>
export default {
  name: "dashButton",
  props: {
    content: {
      type: [String, Number],
      default: "Button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      // large mid small
      default: "mid"
    },
    type: {
      type: String,
      default: "primary"
    },
    radius: {
      type: String,
      default: "8px"
    }
  },
  data() {
    return {
      isMouseDown: false
    };
  },
  created() {},
  mounted() {},
  computed: {
    buttonSize() {
      return `btn-size-${this.size}`;
    },
    buttonType() {
      return `btn-type-${this.type}`;
    },
    computedRadius() {
      if (this.type === "round") {
        return `50%`;
      }
      return this.radius;
    }
  },
  methods: {
    handleBtnClick(event) {
      this.$emit("click", event);
    },
    mouseDown() {
      this.isMouseDown = true;
    },
    mouseUp() {
      this.isMouseDown = false;
    }
  },
  watch: {},
  components: {}
};
</script>

<style scoped lang="less">
@import "../../common/var.less";
@import "../../common/common.less";

.dash-button {
  max-width: 10em;
  display: inline-block;
  text-align: center;
  font-weight: 400;
  color: @theme-color;
  background: @bg-color;
  transition: all 0.1s;
  &.mouse-down {
    background: @theme-color;
    color: @bg-color;
  }
  // &.disabled {
  //   pointer-events: none;
  //   cursor: not-allowed;
  //   position: relative;
  //   opacity: 0.6;
  // }
  // size
  &.btn-size-large {
    font-size: 1.25em;
    padding: 6px 24px;
  }
  &.btn-size-mid {
    font-size: 1em;
    padding: 6px 12px;
  }
  &.btn-size-small {
    font-size: 0.8em;
    padding: 4px 0;
  }
  // type
  &.btn-type-primary {
    border: 1px solid @theme-color;
  }
  // TODO
  &.btn-type-text {
    border: none;
  }
  &.btn-type-round {
    width: 1.5em;
    padding: 6px;
    border: 1px solid @theme-color;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
