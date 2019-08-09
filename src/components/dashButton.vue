<template>
  <div
    class="dash-button"
    @click="handleBtnClick"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    :class="{'mouse-down':isMouseDown}"
  >
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: "dashButton",
  props: {
    text: {
      type: String,
      default: "按钮"
    }
  },
  data() {
    return {
      isMouseDown: false
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    handleBtnClick() {
      console.log("clicked" + this.$options.name);
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
.dash-button {
  max-width: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
  color: green;
  background: #fff;
  padding: 6px 12px;
  border: 1px solid green;
  border-radius: 6px;
  transition: all 0.1s;
  &.mouse-down{
    background: green;
    color: #fff;
  }
}
</style>
