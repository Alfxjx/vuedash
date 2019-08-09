<template>
  <div id="app">
    <dash-button></dash-button>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "123"
    };
  }
};
</script>

<style lang="less">
</style>
