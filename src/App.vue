<template>
  <div id="app">
    <dash-button :content="text"></dash-button>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 1111
    };
  }
};
</script>

<style lang="less">
</style>
