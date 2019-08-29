<template>
  <div id="app">
    <router-link to="/buttons">buttons</router-link>
    <router-link to="/collapse">collapse</router-link>
    <router-link to="/popup">popup</router-link>
    <router-link to="/tooltip">tooltip</router-link>
    <router-link to="/filters">filters</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
#app {
  > * {
    margin-right: 5px;
  }
}
</style>
