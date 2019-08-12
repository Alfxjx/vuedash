<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Emitter from "../../mixins/emitter";
export default {
  name: "dash-collapse",
  componentName: "collapse",
  mixins: [Emitter],
  props: {
    accordion: Boolean,
    value: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      activeNames: [].concat(this.value)
    };
  },
  watch: {
    value(val) {
      this.activeNames = [].concat(val);
    }
  },
  provide() {
    return {
      collapse: this
    };
  },
  created() {
    this.$on("on-show", this.handleChange);
  },
  methods: {
    setActiveNames(activeNames) {
      activeNames = [].concat(activeNames);
      let value = this.accordion ? activeNames[0] : activeNames;
      this.activeNames = activeNames;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    handleChange(item) {
      if (this.accordion) {
        this.setActiveNames(
          (this.activeNames[0] || this.activeNames[0] === 0) &&
            this.activeNames[0] === item.name
            ? ""
            : item.name
        );
      } else {
        let activeNames = this.activeNames.slice(0);
        let index = activeNames.indexOf(item.name);

        if (index > -1) {
          activeNames.splice(index, 1);
        } else {
          activeNames.push(item.name);
        }
        this.setActiveNames(activeNames);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.collapse {
  width: 100%;
}
</style>
